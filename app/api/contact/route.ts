import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  return NextResponse.json({ ok: true });
  const { name, email, company, interest, message } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"WATTONWAY Contact" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO ?? process.env.MAIL_USER,
    replyTo: email,
    subject: `New investor enquiry from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px">
        <h2 style="color:#162218">New enquiry — WATTONWAY</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#627064;width:130px">Name</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#627064">Email</td><td style="padding:8px 0;font-weight:600">${email}</td></tr>
          <tr><td style="padding:8px 0;color:#627064">Company / Fund</td><td style="padding:8px 0">${company || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#627064">Interest</td><td style="padding:8px 0">${interest || "—"}</td></tr>
        </table>
        <hr style="margin:16px 0;border:none;border-top:1px solid #e0e8e0"/>
        <p style="color:#627064;margin:0 0 6px">Message</p>
        <p style="white-space:pre-wrap;color:#1c281f">${message || "—"}</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
