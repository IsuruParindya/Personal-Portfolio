
require('dotenv').config();

const express = require('express');
const { Resend } = require('resend');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
app.set('trust proxy', 1);
const PORT = process.env.PORT || 5000;

// Check environment variables
if (!process.env.RESEND_API_KEY || !process.env.EMAIL_USER) {
  throw new Error('Missing email environment variables.');
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

app.use(express.json({ limit: '10kb' }));

// Rate limiter
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: 'Too many requests. Please try again later.',
  },
});

// HTML escaping
function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);
}

// Health check
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Portfolio contact API is running.',
  });
});

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof subject !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please complete all fields.',
      });
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: 'One or more fields exceed the allowed length.',
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address.',
      });
    }

    // Email configuration
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email.trim(),
      subject: `Portfolio Contact: ${subject.trim()}`,
      text: `
Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${subject.trim()}

Message:
${message.trim()}
      `,
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject.trim())}</p>
        <hr />
        <p>${escapeHtml(message.trim()).replace(/\n/g, '<br>')}</p>
      `,
    };

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.EMAIL_USER,
      replyTo: email.trim(),
      subject: mailOptions.subject,
      text: mailOptions.text,
      html: mailOptions.html,
    });

    if (error) {
      throw new Error(error.message);
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.',
    });

  } catch (error) {
    console.error('Email sending error:', error);

    return res.status(500).json({
      success: false,
      message: 'Unable to send your message.',
    });
  }
});

// Start Express server
app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`);
});