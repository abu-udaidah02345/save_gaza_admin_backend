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
