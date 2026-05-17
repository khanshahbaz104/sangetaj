import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { company, name, title, email, whatsapp, country,
            occasion, quantity, timeline, message } = body;

    if (!company || !name || !email || !whatsapp || !country) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendEnquiryEmail({
      subject: `Corporate Enquiry — ${company}`,
      title: `Corporate: ${company}`,
      replyTo: email,
      rows: [
        ["Company",    company],
        ["Contact",    name],
        ["Title",      title],
        ["Email",      email],
        ["WhatsApp",   whatsapp],
        ["Country",    country],
        ["Occasion",   occasion],
        ["Quantity",   quantity],
        ["Timeline",   timeline],
        ["Message",    message],
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[corporate/route]", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
