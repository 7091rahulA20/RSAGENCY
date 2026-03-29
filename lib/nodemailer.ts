import nodemailer from 'nodemailer';

// IMPORTANT: Add your SMTP credentials to environment variables (.env.local)
// EMAIL_USER=your-email@example.com
// EMAIL_PASS=your-password-or-app-password
// EMAIL_HOST=smtp.example.com
// EMAIL_PORT=587

// Debug logs to check if env vars are loading
console.log('📧 SMTP Configuration Check:');
console.log('  Host:', process.env.EMAIL_HOST);
console.log('  Port:', process.env.EMAIL_PORT);
console.log('  User:', process.env.EMAIL_USER);
console.log('  Pass set:', process.env.EMAIL_PASS ? '✅ Yes' : '❌ No');

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // Add TLS configuration to fix self-signed certificate error
  tls: {
    rejectUnauthorized: false, // This fixes the certificate error
  },
  // Optional: Add connection timeout
  connectionTimeout: 5000,
  greetingTimeout: 5000,
  socketTimeout: 5000,
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error('❌ SMTP Connection Error:', error.message);
    console.error('   Please check your .env.local credentials');
  } else {
    console.log('✅ SMTP Server is ready to send emails');
    console.log('   Connected to:', process.env.EMAIL_HOST);
  }
});

export const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.AGENCY_EMAIL || 'agency@influencio.com', // Use env variable
};