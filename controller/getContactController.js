const Message=require("../models/messegeModel");


exports.getUserContactus = async (req, res) => {
    try {
      const userId = req.user; // Retrieved from the JWT verification middleware
      const user = await Message.findById(userId);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
