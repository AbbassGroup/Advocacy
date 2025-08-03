const express = require('express');
const router = express.Router();
const {
  createEbook,
  downloadEbook,
  getAllEbooks,
  getEbookStats,
  getEbookById,
  updateEbook,
  unsubscribeEbook
} = require('../Controllers/ebook.controller');
const { validateEbook } = require('../Middlewares/validationMiddleware');

// Public routes
router.post('/', validateEbook, createEbook);
router.get('/download/:title', downloadEbook);
router.post('/unsubscribe', unsubscribeEbook);

// Admin/Private routes
router.get('/', getAllEbooks);
router.get('/stats', getEbookStats);
router.get('/get/:id', getEbookById);
router.patch('/update/:id', updateEbook);

module.exports = router;
