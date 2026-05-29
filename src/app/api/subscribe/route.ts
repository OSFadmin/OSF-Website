import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

/**
 * Newsletter signup → Listmonk.
 *
 * Tracks email inputs in an OSF Listmonk instance now; can be ported to Twenty
 * CRM later. Dormant (HTTP 503) until these env vars are set — keep credentials
 * server-side only (Vercel env / Infisical), never in client code:
 *
 *   LISTMONK_API_URL     e.g. https://listmonk.opensystems.foundation
 *   LISTMONK_API_USER    Listmonk API user (or admin user)
 *   LISTMONK_API_TOKEN   that user's API token / password
 *   LISTMONK_LIST_ID     numeric id of the target list
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

  const apiUrl = process.env.LISTMONK_API_URL;
  const apiUser = process.env.LISTMONK_API_USER;
  const apiToken = process.env.LISTMONK_API_TOKEN;
  const listId = Number(process.env.LISTMONK_LIST_ID);

  if (!apiUrl || !apiUser || !apiToken || !listId) {
    // Dormant until Listmonk is wired up. Don't pretend success — surface clearly.
    console.warn('[subscribe] LISTMONK_* not configured; dropping signup', { email, source });
    return NextResponse.json(
      { error: 'Subscriptions are not enabled yet. Please check back soon.' },
      { status: 503 },
    );
  }

  const endpoint = `${apiUrl.replace(/\/$/, '')}/api/subscribers`;
  const auth = Buffer.from(`${apiUser}:${apiToken}`).toString('base64');

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        email,
        name: email,
        status: 'enabled',
        lists: [listId],
        preconfirm_subscriptions: true,
        attribs: { source },
      }),
    });

    if (res.ok) {
      return NextResponse.json({ message: 'You are subscribed. Welcome to the commons.' });
    }

    // Listmonk returns 409 (or a conflict message) when the subscriber already exists.
    if (res.status === 409) {
      return NextResponse.json({ message: 'You are already subscribed — thank you.' });
    }

    const detail = await res.text().catch(() => '');
    if (/already exists|duplicate|conflict/i.test(detail)) {
      return NextResponse.json({ message: 'You are already subscribed — thank you.' });
    }

    console.error('[subscribe] Listmonk API error', res.status, detail);
    return NextResponse.json({ error: 'We could not save your subscription. Please try again.' }, { status: 502 });
  } catch (err) {
    console.error('[subscribe] Listmonk API request failed', err);
    return NextResponse.json({ error: 'We could not reach the subscription service. Please try again.' }, { status: 502 });
  }
}
