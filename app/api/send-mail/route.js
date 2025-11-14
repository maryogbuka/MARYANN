import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with error handling
let resend;
try {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not defined');
  }
  resend = new Resend(process.env.RESEND_API_KEY);
  console.log('✅ Resend initialized successfully');
} catch (error) {
  console.error('❌ Failed to initialize Resend:', error.message);
}

export async function POST(request) {
  // If Resend failed to initialize, return error immediately
  if (!resend) {
    return NextResponse.json(
      { 
        success: false,
        error: 'Email service not configured properly. Please check environment variables.' 
      },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    console.log('📧 Processing contact form submission...');
    console.log('From:', name, email);
    console.log('Subject:', subject);

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { 
          success: false,
          error: 'All fields are required' 
        },
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Please provide a valid email address' 
        },
        { status: 400 }
      );
    }

    // Send email using Resend
    console.log('🚀 Sending email via Resend...');
    
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mhycienth57@gmail.com'], // Your receiving email
      subject: `Portfolio Contact: ${subject}`,
      reply_to: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0e1821; border-bottom: 2px solid #7ee7f9; padding-bottom: 10px;">
            New Portfolio Contact Form Submission
          </h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background: white; padding: 15px; border-left: 4px solid #7ee7f9;">
            <strong>Message:</strong>
            <p style="white-space: pre-line; margin-top: 10px;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
      text: `
New Portfolio Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from your portfolio contact form
      `
    });

    if (error) {
      console.error('❌ Resend API Error:', error);
      return NextResponse.json(
        { 
          success: false,
          error: `Email service error: ${error.message}` 
        },
        { status: 500 }
      );
    }

    console.log('✅ Email sent successfully! Message ID:', data?.id);
    
    return NextResponse.json({ 
      success: true,
      message: 'Message sent successfully! I will get back to you within 24 hours.',
      data: data
    });

  } catch (error) {
    console.error('❌ Unexpected error in contact form:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'An unexpected error occurred. Please try again or contact me directly at mhycienth58@gmail.com' 
      },
      { status: 500 }
    );
  }
}