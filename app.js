const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Define route handler for POST requests to /api/locations
app.post('/api/locations', (req, res) => {
  const locationData = req.body;
  console.log('Received location data:', locationData);
  
  // Handle location data (e.g., store in a database)
  
  res.status(200).json({ message: 'Location data received successfully' });
});

// Define route handler for other endpoints
// This handler will respond with a 404 Not Found for any other requests
app.use((req, res) => {
  res.status(404).send('Not Founds');
});
