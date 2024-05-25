const mongoose = require('mongoose');

const AdsKeySchema = new mongoose.Schema({
  bannerAdKey: {
    type: String,
    required: true,
  },
  interstitialAdKey: {
    type: String,
    required: true,
  },
  appOpenAdKey: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('AdsKey', AdsKeySchema);
