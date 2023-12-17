// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const menuController=require("../controller/menuController");
const videoController=require("../controller/videoController");
const adContentController=require("../controller/adContentController");
const upload = require('../config/multer');

// Get all users
router.get('/all', userController.getAllUsers);
// Create a new menu item
router.post('/menuItems', menuController.createMenuItem);
router.put('/update/:id', menuController.updateMenuItem); // New route for updating a menu item by ID

router.delete('/menuItems/:id', menuController.deleteMenuItem); // New route for deleting a menu item by ID


router.post('/upload', upload.single('video'), videoController.uploadVideo);
router.put('/update/:id', videoController.updateVideo); // New route for updating a video
router.delete('/delete/:id', videoController.deleteVideo); // New route for deleting a video


// POST request to add content
router.post('/add-content', adContentController.addContent);





module.exports = router;
