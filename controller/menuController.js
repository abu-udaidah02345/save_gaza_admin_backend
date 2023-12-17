const menuList = require('../models/userModels');



// controllers/menuListController.js
const MenuList = require('../models/userModels');

exports.createMenuItem = async (req, res) => {
  try {
    const { name, title, image, description } = req.body;

    const newMenuItem = new MenuList({
      name,
      title,
      image,
      description,
    });

    const savedMenuItem = await newMenuItem.save();

    res.status(201).json(savedMenuItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteMenuItem = async (req, res) => {
  try {
    const menuItemId = req.params.id;

    const deletedMenuItem = await MenuList.findByIdAndDelete(menuItemId);

    if (!deletedMenuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    res.json({ message: 'Menu item deleted successfully', deletedMenuItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateMenuItem = async (req, res) => {
  try {
    const menuItemId = req.params.id;
    const { name, title, image, description } = req.body;

    const updatedMenuItem = await MenuList.findByIdAndUpdate(
      menuItemId,
      { name, title, image, description },
      { new: true }
    );

    if (!updatedMenuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    res.json({ message: 'Menu item updated successfully', updatedMenuItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};