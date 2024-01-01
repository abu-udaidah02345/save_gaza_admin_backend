// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const menuController=require("../controller/menuController");
const videoController=require("../controller/videoController");
const adContentController=require("../controller/adContentController");
const getContactController=require("../controller/getContactController");
const upload = require('../config/multer');
const authMiddleware = require('../middleware/authMiddleware');

// Get all users
router.get('/all', userController.getAllUsers);
router.delete('/all', userController.deleteAllUsers); 
router.delete('/all/:id', userController.deleteUserById);   // Delete user by ID// Delete all users

router.post('/menuItems', menuController.createMenuItem);
router.put('/menuItems/:id', menuController.updateMenuItem); 
router.get('/menuItems', menuController.getAllMenuItems);   // Get all menu items// New route for updating a menu item by ID
router.delete('/menuItems', menuController.deleteMenuItemAll);
router.delete('/menuItems/:id', menuController.deleteMenuItem);
router.get('/menuItems/:id', menuController.getMenuItemById); // Get menu item by ID // New route for deleting a menu item by ID

router.get('/videos', videoController.getAllVideos); // Get all video metadata
router.post('/upload', upload.single('video'), videoController.uploadVideo);
router.get('/videos/:id', videoController.getVideoById);
router.delete('/delete-all', videoController.deleteAllVideos); // Delete all videos
router.put('/update/:id', videoController.updateVideo); // New route for updating a video
router.delete('/delete/:id', videoController.deleteVideo); // New route for deleting a video


// POST request to add content
router.post('/add-content', adContentController.addContent);
router.get('/ad-content', adContentController.getAllAdContent); // Get all ad content
router.get('/ad-content/:id', adContentController.getAdContentById); // Get ad content by ID
router.put('/ad-content/:id', adContentController.updateAdContentById); // Update ad content by ID
router.delete('/ad-content/:id', adContentController.deleteAdContentById); // Delete ad content by ID
router.delete('/ad-content', adContentController.deleteAllAdContent); // Delete all ad content

// contact us

router.get("/messeges",authMiddleware.verifyToken,getContactController.getUserContactus);




module.exports = router;
