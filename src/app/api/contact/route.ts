import { Resend } from "resend";
import { NextResponse } from "next/server";

// You can keep this in your .env file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, subject, message } = body;

    const fullName = `${firstName} ${lastName}`;

    const data = await resend.emails.send({
      from: "Your Portfolio <onboarding@resend.dev>", // You can customize this in Resend dashboard
      to: "abdullaharif893@gmail.com", // Change this to your receiving email
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; font-size: 16px;">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error });
  }
}
