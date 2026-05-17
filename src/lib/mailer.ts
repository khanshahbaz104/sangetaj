import nodemailer from "nodemailer";

// ── Transporter (created once, reused) ──────────────────────────────────────
function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",   // true = 465, false = STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// ── HTML wrapper ─────────────────────────────────────────────────────────────
function wrapHtml(title: string, rows: [string, string | undefined][]) {
  const rowsHtml = rows
    .filter(([, v]) => v && v.toString().trim())
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 16px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;
                   color:#A8A6A4;font-family:Georgia,serif;white-space:nowrap;vertical-align:top;
                   border-right:1px solid #1e1e1d;width:170px;">${label}</td>
        <td style="padding:10px 16px;font-size:14px;color:#F0EDE8;font-family:Georgia,serif;
                   white-space:pre-wrap;">${value}</td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#070707;font-family:Georgia,serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:48px 24px;">
        <table role="presentation" width="600" style="max-width:600px;width:100%;background:#0D0D0C;
               border:1px solid #1e1e1d;">

          <!-- Header -->
          <tr>
            <td style="padding:32px 32px 24px;border-bottom:1px solid #1e1e1d;">
              <p style="margin:0;font-size:22px;font-style:italic;font-weight:700;color:#F0EDE8;
                        letter-spacing:-0.01em;">Sang-e-Taj</p>
              <p style="margin:4px 0 0;font-size:9px;letter-spacing:0.3em;text-transform:uppercase;
                        color:#A8A6A4;">Makrana · Est. 1631</p>
            </td>
          </tr>

          <!-- Subject banner -->
          <tr>
            <td style="padding:20px 32px;background:#111110;border-bottom:1px solid #1e1e1d;">
              <p style="margin:0;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;
                        color:#A8A6A4;">New Enquiry</p>
              <p style="margin:6px 0 0;font-size:18px;font-weight:700;font-style:italic;
                        color:#F0EDE8;">${title}</p>
            </td>
          </tr>

          <!-- Data rows -->
          <tr>
            <td style="padding:8px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                     style="border-collapse:collapse;">
                ${rowsHtml}
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 32px;border-top:1px solid #1e1e1d;">
              <p style="margin:0;font-size:10px;letter-spacing:0.14em;color:#5A5856;">
                This message was submitted via the Sang-e-Taj website enquiry form.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Send helper ───────────────────────────────────────────────────────────────
export async function sendEnquiryEmail(opts: {
  subject: string;
  title: string;
  replyTo?: string;
  rows: [string, string | undefined][];
}) {
  const transport = createTransport();
  const from = `"${process.env.SMTP_FROM_NAME ?? "Sang-e-Taj"}" <${process.env.SMTP_USER}>`;
  const to = process.env.ENQUIRY_TO ?? process.env.SMTP_USER!;

  await transport.sendMail({
    from,
    to,
    replyTo: opts.replyTo ?? to,
    subject: `[Sang-e-Taj] ${opts.subject}`,
    html: wrapHtml(opts.title, opts.rows),
  });
}
