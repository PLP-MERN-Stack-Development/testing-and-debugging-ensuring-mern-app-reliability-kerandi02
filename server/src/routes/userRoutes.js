const express = require('express');
const {
  registerUser,
  loginUser,
  getUsers,
  getUser,
} = require('../controllers/userController');
const {
  validateUserRegistration,
  validateUserLogin,
} = require('../middleware/validation');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/register', validateUserRegistration, registerUser);
router.post('/login', validateUserLogin, loginUser);

// Protected routes
router.get('/', protect, authorize('admin'), getUsers);
router.get('/:id', protect, getUser);

module.exports = router;