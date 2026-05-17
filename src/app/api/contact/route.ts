import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, whatsapp, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendEnquiryEmail({
      subject: `Contact — ${subject}`,
      title: subject,
      replyTo: email,
      rows: [
        ["Name",     name],
        ["Email",    email],
        ["WhatsApp", whatsapp],
        ["Subject",  subject],
        ["Message",  message],
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact/route]", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
