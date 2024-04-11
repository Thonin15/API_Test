const mongoose = require('mongoose');

// Define location schema
const locationSchema = new mongoose.Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true }
});

// Create Location model from schema
const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
