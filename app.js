const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Location = require('./models/Location');

// Connect to MongoDB
const uri = "mongodb+srv://kitku:admin12345@cluster0.imwxnou.mongodb.net/locationDB";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// POST endpoint to save location data
app.post('/api/locations', async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const location = new Location({ latitude, longitude });
    await location.save();
    res.status(200).json({ message: 'Location data saved successfully' });
  } catch (error) {
    console.error('Failed to save location data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET endpoint to fetch location data
app.get('/api/locations', async (req, res) => {
  try {
    // Retrieve all location documents from the database
    const locations = await Location.find({}, 'latitude longitude');
    res.json(locations);
  } catch (error) {
    console.error('Failed to fetch location data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
