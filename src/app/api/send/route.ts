import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true 
});

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    console.log('Sending email with data:', { name, email, subject });
    
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'oa2systems@gmail.com',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Detailed email error:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
