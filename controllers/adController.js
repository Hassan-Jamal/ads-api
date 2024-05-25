const Ad = require('../models/AdsKey');

const getAds = async (req, res) => {
  try {
    const ads = await Ad.find();
    res.json(ads);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createAd = async (req, res) => {
  const { type, content } = req.body;

  try {
    const newAd = new Ad({
      type,
      content,
    });

    await newAd.save();
    res.status(201).json(newAd);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAdById = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) return res.status(404).json({ message: 'Ad not found' });
    res.json(ad);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAds,
  createAd,
  getAdById,
};
