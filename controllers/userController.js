const User = require('../models/User');
const bcrypt = require('bcryptjs'); // Install: npm install bcryptjs

// Create a new user (admin/cashier/staff)
exports.createUser = async (req, res) => {
  try {
    const userData = { ...req.body };
    
    // Hash the password if provided
    if (userData.password) {
      const saltRounds = 10;
      userData.passwordHash = await bcrypt.hash(userData.password, saltRounds);
      delete userData.password; // Remove plain password
    }
    
    const user = new User(userData);
    await user.save();
    
    // Don't return password hash in response
    const userResponse = user.toObject();
    delete userResponse.passwordHash;
    
    res.status(201).json({ message: 'User created!', user: userResponse });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single user by id
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id, 
      req.body,
      { new: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User updated!', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
