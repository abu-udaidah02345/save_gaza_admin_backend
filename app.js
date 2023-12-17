// app.js or index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const dbConfig = require('./config/database');
const videoRoutes=require("./routes/userRoutes");


const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(dbConfig.url);

app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
// // Routes
// app.use('/api/videos', videoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
