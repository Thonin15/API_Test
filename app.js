const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
const uri = "mongodb+srv://kitku:<password>@cluster0.imwxnou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect('mongodb+srv://kitku:admin12345@Cluster0.imwxnou.mongodb.net/locationDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

const PORT = process.env.PORT || 3000;
const Location = require('./models/Location');

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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
