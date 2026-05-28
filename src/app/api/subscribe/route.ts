import { NextResponse } from 'next/server';

/**
 * Newsletter signup → Twenty CRM.
 *
 * Writes each subscriber into a custom "Subscribers" object in Twenty via its
 * REST core API. The integration stays dormant (returns 503) until these env
 * vars are set — keep the key server-side only (Infisical / runtime env), never
 * expose it to the browser:
 *
 *   TWENTY_API_URL            e.g. https://crm.opensystems.foundation
 *   TWENTY_API_KEY            Twenty API key (Bearer token)
 *   TWENTY_SUBSCRIBERS_PATH   optional, default "/rest/subscribers"
 *
 * Assumes the Twenty "Subscribers" object has at least an `email` (text) field,
 * plus optional `source` (text) and `status` (text) fields.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: unknown; source?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const source = typeof body.source === 'string' ? body.source.slice(0, 120) : 'website';

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const apiUrl = process.env.TWENTY_API_URL;
  const apiKey = process.env.TWENTY_API_KEY;
  const path = process.env.TWENTY_SUBSCRIBERS_PATH ?? '/rest/subscribers';

  if (!apiUrl || !apiKey) {
    // Dormant until the CRM is wired up. Don't pretend success — surface clearly.
    console.warn('[subscribe] TWENTY_API_URL / TWENTY_API_KEY not configured; dropping signup', { email, source });
    return NextResponse.json(
      { error: 'Subscriptions are not enabled yet. Please check back soon.' },
      { status: 503 },
    );
  }

  const endpoint = `${apiUrl.replace(/\/$/, '')}${path}`;

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        source,
        status: 'subscribed',
      }),
    });

    if (res.ok) {
      return NextResponse.json({ message: 'You are subscribed. Welcome to the commons.' });
    }

    // Twenty returns 409 / a duplicate-key error when the email already exists.
    if (res.status === 409) {
      return NextResponse.json({ message: 'You are already subscribed — thank you.' });
    }

    const detail = await res.text().catch(() => '');
    if (/duplicate|already exists|unique/i.test(detail)) {
      return NextResponse.json({ message: 'You are already subscribed — thank you.' });
    }

    console.error('[subscribe] Twenty API error', res.status, detail);
    return NextResponse.json({ error: 'We could not save your subscription. Please try again.' }, { status: 502 });
  } catch (err) {
    console.error('[subscribe] Twenty API request failed', err);
    return NextResponse.json({ error: 'We could not reach the subscription service. Please try again.' }, { status: 502 });
  }
}
