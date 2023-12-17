const Video = require('../models/videoModel');


const uploadVideo = async (req, res) => {
    try {
      const { title, description, video, contentType } = req.body;
  
      // Check if required parameters are provided
      if (!title || !description || !video || !contentType) {
        return res.status(400).json({ error: 'Title, description, video, and contentType are required' });
      }
  
      // You can save video metadata to your database
      const newVideo = new Video({
        title,
        description,
        video,
        contentType,
      });
  
      await newVideo.save();
  
      res.json({ message: 'Video metadata uploaded successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  const deleteVideo = async (req, res) => {
    try {
      const videoId = req.params.id;
  
      const deletedVideo = await Video.findByIdAndDelete(videoId);
  
      if (!deletedVideo) {
        return res.status(404).json({ message: 'Video not found' });
      }
  
      res.json({ message: 'Video deleted successfully', deletedVideo });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const updateVideo = async (req, res) => {
    try {
      const videoId = req.params.id;
      const { title, description, video } = req.body;
  
      // Validate input
      if (!title || !description || !video) {
        return res.status(400).json({ message: 'Title, description, and video are required' });
      }
  
      const updatedVideo = await Video.findByIdAndUpdate(
        videoId,
        { title, description, video },
        { new: true }
      );
  
      if (!updatedVideo) {
        return res.status(404).json({ message: 'Video not found' });
      }
  
      res.json({ message: 'Video updated successfully', updatedVideo });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    uploadVideo,
    deleteVideo,
    updateVideo
  };