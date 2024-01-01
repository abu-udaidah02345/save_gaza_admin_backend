// controllers/userController.js
const User = require('../models/userModels');

exports.getAllUsers = async (req, res) => {
  try {
  
    const users = await User.find().maxTimeMS(30000); // Set a higher timeout (e.g., 30 seconds)

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteAllUsers = async (req, res) => {
  try {
    // Delete all users
    await User.deleteMany();

    res.json({ message: 'All users deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete the user by ID
    await User.findByIdAndDelete(userId);

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};