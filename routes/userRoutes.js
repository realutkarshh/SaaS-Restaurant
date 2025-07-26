const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Map routes to controller functions
router.post('/', userController.createUser);        // Create a new user
router.get('/', userController.getAllUsers);        // Get all users
router.get('/:id', userController.getUser);         // Get user by ID
router.put('/:id', userController.updateUser);      // Update user
router.delete('/:id', userController.deleteUser);   // Delete user

module.exports = router;
