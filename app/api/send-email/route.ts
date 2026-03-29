import { NextResponse } from "next/server";
import { transporter, mailOptions } from "@/lib/nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, subject, message, company, budget, handle, followers, category, portfolio, type } = data;

    // Build email content based on form type
    let emailContent = `
      <h3>New Submission from Influencio Website</h3>
      <p><strong>Form Type:</strong> ${type || 'General Contact'}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
    `;

    if (company) emailContent += `<p><strong>Company:</strong> ${company}</p>`;
    if (budget) emailContent += `<p><strong>Budget Range:</strong> ${budget}</p>`;
    if (handle) emailContent += `<p><strong>Social Handle:</strong> ${handle}</p>`;
    if (followers) emailContent += `<p><strong>Follower Count:</strong> ${followers}</p>`;
    if (category) emailContent += `<p><strong>Category/Niche:</strong> ${category}</p>`;
    if (portfolio) emailContent += `<p><strong>Portfolio:</strong> ${portfolio}</p>`;
    if (subject) emailContent += `<p><strong>Subject:</strong> ${subject}</p>`;
    
    emailContent += `<p><strong>Message:</strong></p><p>${message}</p>`;

    // Send email
    // NOTE: For development/testing without real SMTP, this will fail.
    // Ensure ADDRESS_USER, ADDRESS_PASS, etc. are set in .env.local
    
    await transporter.sendMail({
      ...mailOptions,
      subject: `[Influencio] New ${type || 'Contact'} Form Submission: ${name}`,
      html: emailContent,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
