import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, whatsapp, country, message } = body;

    if (!name || !email || !whatsapp || !country) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const productName = body.productName ?? "Unknown Product";

    await sendEnquiryEmail({
      subject: `Product Inquiry — ${productName}`,
      title: `Inquiry: ${productName}`,
      replyTo: email,
      rows: [
        ["Product",   productName],
        ["Name",      name],
        ["Email",     email],
        ["WhatsApp",  whatsapp],
        ["Country",   country],
        ["Message",   message],
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[inquiry/route]", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
