const Contact = require('../Models/contactus.model');
const { sendContactNotification } = require('../config/email');

exports.createContact = async (req, res, next) => {
  try {
    const { name, email, contact, division, comments } = req.body;

    const contactSubmission = new Contact({
      name,
      email,
      contact,
      division,
      comments,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    });

    await contactSubmission.save();

    try {
      await sendContactNotification({
        name,
        email,
        contact,
        division,
        comments
      });
    } catch (emailError) {
      console.error('❌ Email notification failed:', emailError);
    }

    res.status(201).json({
      status: 'success',
      message: 'Thank you for your message. We will get back to you soon!',
      data: {
        id: contactSubmission._id,
        name: contactSubmission.name,
        email: contactSubmission.email,
        submittedAt: contactSubmission.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllContacts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, status, division } = req.query;

    const query = {};
    if (status) query.status = status;
    if (division) query.division = division;

    const currentPage = parseInt(page);
    const perPage = parseInt(limit);
    const skip = (currentPage - 1) * perPage;

    const [contacts, total] = await Promise.all([
      Contact.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(perPage)
        .select('-__v'),
      Contact.countDocuments(query)
    ]);

    const totalPages = Math.ceil(total / perPage);

    res.status(200).json({
      status: 'success',
      data: contacts,
      pagination: {
        total,
        limit: perPage,
        page: currentPage,
        totalPages,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1
      }
    });
  } catch (error) {
    next(error);
  }
};


exports.getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id).select('-__v');

    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: contact
    });
  } catch (error) {
    next(error);
  }
};

exports.updateContact = async (req, res, next) => {
  try {
    const { status, notes } = req.body;

    const updateData = {};
    if (status) updateData.status = status;
    if (notes) updateData.notes = notes;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    ).select('-__v');

    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Contact submission updated successfully',
      data: contact
    });
  } catch (error) {
    next(error);
  }
};
