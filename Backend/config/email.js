const nodemailer = require('nodemailer');

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

const sendEmail = async (options) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: options.from || process.env.EMAIL_FROM,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
      attachments: options.attachments || []
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error;
  }
};

const sendContactNotification = async (contactData) => {
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${contactData.name}</p>
    <p><strong>Email:</strong> ${contactData.email}</p>
    <p><strong>Contact:</strong> ${contactData.contact}</p>
    <p><strong>Division:</strong> ${contactData.division}</p>
    <p><strong>Comments:</strong> ${contactData.comments || 'No comments'}</p>
    <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
  `;

  return sendEmail({
    to: process.env.EMAIL_FROM,
    subject: 'New Contact Form Submission - ABBASS Group',
    html: html,
    text: `New contact form submission from ${contactData.name} (${contactData.email})`
  });
};


const sendEbookNotification = async (ebookData) => {
  const html = `
    <h2>New Ebook Download</h2>
    <p><strong>Name:</strong> ${ebookData.name}</p>
    <p><strong>Email:</strong> ${ebookData.email}</p>
    <p><strong>Phone:</strong> ${ebookData.phone}</p>
    <p><strong>Ebook:</strong> ${ebookData.ebookTitle}</p>
    <p><strong>Downloaded:</strong> ${new Date().toLocaleString()}</p>
  `;

  return sendEmail({
    to: process.env.EMAIL_FROM,
    subject: 'New Ebook Download - ABBASS Group',
    html: html,
    text: `New ebook download by ${ebookData.name} (${ebookData.email})`
  });
};

module.exports = {
  sendEmail,
  sendContactNotification,
  sendEbookNotification
}; 