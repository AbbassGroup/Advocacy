const mongoose = require('mongoose');

const ebookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email address'
    ]
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  ebookTitle: {
    type: String,
    required: [true, 'Ebook title is required'],
    trim: true,
    maxlength: [200, 'Ebook title cannot exceed 200 characters']
  },
  ebookType: {
    type: String,
    enum: {
      values: ['business', 'finance', 'property', 'advocacy', 'general'],
      message: 'Please select a valid ebook type'
    },
    default: 'advocacy'
  },
  downloadCount: {
    type: Number,
    default: 1
  },
  lastDownloaded: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'unsubscribed'],
    default: 'active'
  },
  marketingConsent: {
    type: Boolean,
    default: true
  },
  ipAddress: {
    type: String,
    trim: true
  },
  userAgent: {
    type: String,
    trim: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes
ebookSchema.index({ email: 1, createdAt: -1 });
ebookSchema.index({ status: 1, createdAt: -1 });
ebookSchema.index({ ebookType: 1, createdAt: -1 });
ebookSchema.index({ marketingConsent: 1, createdAt: -1 });

// ✅ Fixed: Safe virtual for formatted createdAt
ebookSchema.virtual('formattedDate').get(function () {
  return this.createdAt
    ? this.createdAt.toLocaleDateString('en-AU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    : null;
});

// ✅ Fixed: Safe virtual for formatted lastDownloaded
ebookSchema.virtual('formattedLastDownload').get(function () {
  return this.lastDownloaded
    ? this.lastDownloaded.toLocaleDateString('en-AU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    : null;
});

// Pre-save cleanup
ebookSchema.pre('save', function (next) {
  if (this.name) this.name = this.name.trim();
  if (this.email) this.email = this.email.toLowerCase().trim();
  if (this.phone) this.phone = this.phone.trim();
  if (this.ebookTitle) this.ebookTitle = this.ebookTitle.trim();
  next();
});

// Static method to find or create download record
ebookSchema.statics.findOrCreateDownload = async function (downloadData) {
  const { email, ebookTitle } = downloadData;

  let ebook = await this.findOne({ email, ebookTitle });

  if (ebook) {
    ebook.downloadCount += 1;
    ebook.lastDownloaded = new Date();
    await ebook.save();
  } else {
    ebook = new this(downloadData);
    await ebook.save();
  }

  return ebook;
};

module.exports = mongoose.model('Ebook', ebookSchema);
