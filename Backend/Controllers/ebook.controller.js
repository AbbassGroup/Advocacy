const Ebook = require('../Models/ebook.model');
const { sendEbookNotification } = require('../config/email');
const path = require('path');
const fs = require('fs');

exports.createEbook = async (req, res, next) => {
  try {
    const { name, email, phone, ebookTitle, ebookType = 'general' } = req.body;

    const ebookDownload = await Ebook.findOrCreateDownload({
      name,
      email,
      phone,
      ebookTitle,
      ebookType,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    });

    try {
      await sendEbookNotification({ name, email, phone, ebookTitle });
    } catch (emailError) {
      console.error('❌ Email notification failed:', emailError);
    }

    res.status(201).json({
      status: 'success',
      message: 'Thank you! Your ebook download link has been sent to your email.',
      data: {
        id: ebookDownload._id,
        name: ebookDownload.name,
        email: ebookDownload.email,
        ebookTitle: ebookDownload.ebookTitle,
        downloadCount: ebookDownload.downloadCount,
        submittedAt: ebookDownload.createdAt,
        downloadUrl: `/api/ebook/download/${encodeURIComponent(ebookTitle)}`
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.downloadEbook = async (req, res, next) => {
  try {
    const { title } = req.params;
    const decodedTitle = decodeURIComponent(title);

    const ebookFileMap = {
      'Escape The Employee Mindset': 'Escape The Employee Mindset.pdf',
      'Start Smart: What to do in the first 90 days': 'Start Smart What to Do in Your First 90 Days of Business.pdf',
      'Systems over stress': 'Systems Over Stress.pdf',
      'The breakout blueprint': 'The Breakout Blueprint.pdf',
      'The confidence code': 'The Confidence Code.pdf',
      'The sales blueprint': 'The Sales Blueprint.pdf',
      'The silent entrepreneur': 'The Silent Entrepreneur.pdf',
      'Your licence to thrive': 'Your Licence to Thrive How to Launch and Grow Your Own Business Under a Trusted Brand.pdf'
    };

    const filename = ebookFileMap[decodedTitle];

    if (!filename) {
      return res.status(404).json({ status: 'error', message: 'Ebook not found' });
    }

    const filePath = path.join(__dirname, '../public/ebooks', filename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ status: 'error', message: 'PDF file not found' });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.sendFile(path.resolve(filePath));
  } catch (error) {
    next(error);
  }
};

exports.getAllEbooks = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, status, ebookType, email } = req.query;

    const query = {};
    if (status) query.status = status;
    if (ebookType) query.ebookType = ebookType;
    if (email) query.email = email.toLowerCase();

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { createdAt: -1 },
      select: '-__v'
    };

    const downloads = await Ebook.paginate(query, options);

    res.status(200).json({ status: 'success', data: downloads });
  } catch (error) {
    next(error);
  }
};

exports.getEbookStats = async (req, res, next) => {
  try {
    const stats = await Ebook.aggregate([
      {
        $group: {
          _id: null,
          totalDownloads: { $sum: 1 },
          totalUniqueUsers: { $addToSet: '$email' },
          totalDownloadCount: { $sum: '$downloadCount' }
        }
      },
      {
        $project: {
          _id: 0,
          totalDownloads: 1,
          totalUniqueUsers: { $size: '$totalUniqueUsers' },
          totalDownloadCount: 1
        }
      }
    ]);

    const ebookTypeStats = await Ebook.aggregate([
      {
        $group: {
          _id: '$ebookType',
          count: { $sum: 1 },
          totalDownloads: { $sum: '$downloadCount' }
        }
      },
      { $sort: { count: -1 } }
    ]);

    const recentDownloads = await Ebook.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email ebookTitle createdAt');

    res.status(200).json({
      status: 'success',
      data: {
        overview: stats[0] || { totalDownloads: 0, totalUniqueUsers: 0, totalDownloadCount: 0 },
        byType: ebookTypeStats,
        recent: recentDownloads
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.getEbookById = async (req, res, next) => {
  try {
    const download = await Ebook.findById(req.params.id).select('-__v');
    if (!download) {
      return res.status(404).json({ status: 'error', message: 'Ebook download record not found' });
    }

    res.status(200).json({ status: 'success', data: download });
  } catch (error) {
    next(error);
  }
};

exports.updateEbook = async (req, res, next) => {
  try {
    const { status, marketingConsent } = req.body;

    const updateData = {};
    if (status) updateData.status = status;
    if (typeof marketingConsent === 'boolean') updateData.marketingConsent = marketingConsent;

    const download = await Ebook.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    ).select('-__v');

    if (!download) {
      return res.status(404).json({ status: 'error', message: 'Ebook download record not found' });
    }

    res.status(200).json({
      status: 'success',
      message: 'Ebook download record updated successfully',
      data: download
    });
  } catch (error) {
    next(error);
  }
};

exports.unsubscribeEbook = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ status: 'error', message: 'Email is required' });
    }

    const result = await Ebook.updateMany(
      { email: email.toLowerCase() },
      { status: 'unsubscribed', marketingConsent: false }
    );

    res.status(200).json({
      status: 'success',
      message: 'You have been successfully unsubscribed from marketing emails.',
      data: { updatedRecords: result.modifiedCount }
    });
  } catch (error) {
    next(error);
  }
};
