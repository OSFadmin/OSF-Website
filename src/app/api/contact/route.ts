import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

/**
 * Contact form → email to contact@opensystems.foundation via Mailcow SMTP.
 *
 * Dormant (HTTP 503) until SMTP env vars are set — keep credentials server-side
 * only (Vercel env / Infisical), never in client code:
 *
 *   SMTP_HOST        e.g. mail.rmail.online
 *   SMTP_PORT        e.g. 587
 *   SMTP_USER        Mailcow mailbox used to send/relay
 *   SMTP_PASS        that mailbox's password / app password
 *   SMTP_SECURE      optional, "true" for implicit TLS (465); default false (STARTTLS)
 *   CONTACT_TO       optional, default contact@opensystems.foundation
 *   CONTACT_FROM     optional, default = SMTP_USER
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim().slice(0, 200);
  const email = String(body.email ?? '').trim().slice(0, 200);
  const organisation = String(body.organisation ?? '').trim().slice(0, 200);
  const reason = String(body.reason ?? 'General').trim().slice(0, 80);
  const message = String(body.message ?? '').trim().slice(0, 8000);

  if (!name || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please provide your name, a valid email, and a message.' }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const to = process.env.CONTACT_TO ?? 'contact@opensystems.foundation';
  const from = process.env.CONTACT_FROM ?? user;

  if (!host || !user || !pass) {
    console.warn('[contact] SMTP env not configured; dropping submission', { email, reason });
    return NextResponse.json(
      { error: 'The contact form is not enabled yet. Please email contact@opensystems.foundation directly.' },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });

  const text =
    `New contact form submission\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Organisation: ${organisation || '—'}\n` +
    `Reason: ${reason}\n\n` +
    `Message:\n${message}\n`;

  try {
    await transporter.sendMail({
      from: `OSF Website <${from}>`,
      to,
      replyTo: `${name} <${email}>`,
      subject: `[OSF Contact] ${reason} — ${name}`,
      text,
    });
    return NextResponse.json({ message: 'Thank you — your message has been sent. We read every message.' });
  } catch (err) {
    console.error('[contact] SMTP send failed', err);
    return NextResponse.json(
      { error: 'We could not send your message right now. Please email contact@opensystems.foundation directly.' },
      { status: 502 },
    );
  }
}
