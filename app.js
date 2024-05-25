const express = require('express');
const { engine } = require('express-handlebars');
const connectDB = require('./config/db');
const path = require('path');
const bodyParser = require('body-parser');
const AdsKey = require('./models/AdsKey');  // Ensure this path is correct
const adRoute = require('./routes/adRoutes');  // Ensure this path is correct

// Load environment variables from .env file
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// Set up Handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/ads', adRoute); 

app.post('/add-ads-keys', async (req, res) => {
  const { bannerAdKey, interstitialAdKey, appOpenAdKey } = req.body;
  try {
    const newAdsKey = new AdsKey({
      bannerAdKey,
      interstitialAdKey,
      appOpenAdKey,
    });

    await newAdsKey.save();
    res.send('Ads keys saved successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});