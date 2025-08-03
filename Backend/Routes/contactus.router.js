const express = require('express');
const router = express.Router();
const { validateContact } = require('../Middlewares/validationMiddleware');
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContact
} = require('../Controllers/contactus.controller');

// Public
router.post('/', validateContact, createContact);

// Admin / Private (auth middleware can be added later)
router.get('/', getAllContacts);
router.get('/get/:id', getContactById);
router.patch('/update/:id', updateContact);

module.exports = router;
