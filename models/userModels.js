// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phoneNumber: String,
  country: String,
});

module.exports = mongoose.model('User', userSchema);


// const menuListSchema = new mongoose.Schema({
//     name: String,
//     title: String,
//     image: String,
//     description: String,
//   });
  
//   module.exports = mongoose.model('MenuList', menuListSchema);
  
 