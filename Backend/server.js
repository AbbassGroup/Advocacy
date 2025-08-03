const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const connectDB = require('./config/db');
const errorHandler = require('./Middlewares/errorHandlerMiddleware');

// Import routes
const contactRoutes = require('./Routes/contactus.router');
const ebookRoutes = require('./Routes/ebook.router');

const app = express();

// Connect to database
connectDB();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'https://www.abbass.com.au/advocacy', 'https://abbass.com.au/advocacy', 'https://www.abbass.com.au', 'https://abbass.com.au', 'http://localhost:5173', 'http://localhost:3004','http://businessbrokersss.abbass.com.au','https://apibusinessbrokers.abbass.com.au'],
  methods: ['GET','POST','PUT','DELETE', 'PATCH', 'OPTIONS'],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, 
  message: {
    error: 'Too many requests from this IP, please try again later.'
  }
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Compression middleware
app.use(compression());

// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Static files
app.use('/ebooks', express.static('public/ebooks'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Advocacy Backend API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

// API routes
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/ebook', ebookRoutes);

// 404 handler
// app.use('*', (req, res) => {
//   res.status(404).json({
//     status: 'error',
//     message: `Route ${req.originalUrl} not found`
//   });
// });

// Error handling middleware
app.use(errorHandler);

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV}`);
  console.log(`🌐 Health check: https://${HOSTNAME}:${PORT}/api/health`);
});

module.exports = app; 
