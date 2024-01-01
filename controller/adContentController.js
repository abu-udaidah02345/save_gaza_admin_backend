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


exports.getAllAdContent = async (req, res) => {
  try {
    // Retrieve all ad content
    const adContentList = await AdContent.find();

    res.json(adContentList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAdContentById = async (req, res) => {
  try {
    const adContentId = req.params.id;

    // Check if the ad content exists
    const adContent = await AdContent.findById(adContentId);

    if (!adContent) {
      return res.status(404).json({ message: 'Ad content not found' });
    }

    res.json(adContent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateAdContentById = async (req, res) => {
  try {
    const adContentId = req.params.id;
    const { description } = req.body;

    // Check if the ad content exists
    const adContent = await AdContent.findById(adContentId);

    if (!adContent) {
      return res.status(404).json({ message: 'Ad content not found' });
    }

    // Update the ad content
    adContent.description = description;
    const updatedAdContent = await adContent.save();

    res.json(updatedAdContent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteAdContentById = async (req, res) => {
  try {
    const adContentId = req.params.id;

    // Check if the ad content exists
    const adContent = await AdContent.findById(adContentId);

    if (!adContent) {
      return res.status(404).json({ message: 'Ad content not found' });
    }

    // Delete the ad content by ID
    await AdContent.findByIdAndDelete(adContentId);

    res.json({ message: 'Ad content deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAllAdContent = async (req, res) => {
  try {
    // Delete all ad content
    await AdContent.deleteMany();

    res.json({ message: 'All ad content deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
