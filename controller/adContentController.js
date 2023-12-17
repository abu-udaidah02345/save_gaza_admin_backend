// controllers/adContentController.js
const AdContent = require('../models/adContentModel');

exports.addContent = async (req, res) => {
  try {
    const { description } = req.body;

    // Validate input
    if (!description) {
      return res.status(400).json({ error: 'Description is required.' });
    }

    // Create a new AdContent instance
    const newAdContent = new AdContent({ description });

    // Save the ad content to the database
    const savedAdContent = await newAdContent.save();

    res.status(201).json(savedAdContent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
