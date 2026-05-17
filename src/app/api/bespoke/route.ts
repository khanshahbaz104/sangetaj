import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, whatsapp, country, pieceType, subject, purpose,
            scale, timeline, budget, personalisation, message, referral } = body;

    if (!name || !email || !whatsapp || !country || !pieceType || !subject || !purpose) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sendEnquiryEmail({
      subject: `Bespoke Commission — ${subject}`,
      title: `Bespoke: ${subject}`,
      replyTo: email,
      rows: [
        ["Name",              name],
        ["Email",             email],
        ["WhatsApp",          whatsapp],
        ["Country",           country],
        ["Piece Type",        pieceType],
        ["Subject / Vision",  subject],
        ["Purpose",           purpose],
        ["Scale",             scale],
        ["Timeline",          timeline],
        ["Budget",            budget],
        ["Personalisation",   Array.isArray(personalisation) ? personalisation.join(", ") : personalisation],
        ["Additional Notes",  message],
        ["How they found us", referral],
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[bespoke/route]", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
