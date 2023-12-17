const mongoose = require('mongoose');

const adContentSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  // Add other fields as needed
});

const AdContent = mongoose.model('AdContent', adContentSchema);

module.exports = AdContent;