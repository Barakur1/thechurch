// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const isAdmin = require('../middleware/isAdmin');

// --- SAFETY CHECKS (Helps catch missing exports instantly) ---
if (typeof isAdmin !== 'function') {
    throw new TypeError('isAdmin middleware is not a function. Check your middleware/isAdmin.js export.');
}
if (!adminController.getDashboard) {
    throw new TypeError('adminController.getDashboard is undefined. Check your controllers/adminController.js exports.');
}
if (!adminController.getMembers) {
    throw new TypeError('adminController.getMembers is undefined. Check your controllers/adminController.js exports.');
}
if (!adminController.getEvents) {
    throw new TypeError('adminController.getEvents is undefined. Check your controllers/adminController.js exports.');
}
// -------------------------------------------------------------

// All routes here are prefixed with /admin (e.g., http://localhost:1000/admin/dashboard)

// 1. Main Admin Dashboard
router.get('/dashboard', isAdmin, adminController.getDashboard);

// 2. Church Members Management Page
router.get('/members', isAdmin, adminController.getMembers);

// 3. Church Events Management Page
router.get('/events', isAdmin, adminController.getEvents);

module.exports = router;