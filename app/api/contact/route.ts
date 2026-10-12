import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email().max(254),
  phone: z.string().min(8).max(30),
  subject: z.string().min(1).max(200),
  message: z.string().min(10).max(5000),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check your form details." },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = parsed.data;

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: ["info@mrmeats.co.in"],
      replyTo: email,
      subject: `Website enquiry: ${subject}`,
      text: [
        "New enquiry from the Mr Meats website",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Unable to send your enquiry. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}