const express = require('express');
const router = express.Router();
const { getAds, createAd, getAdById } = require('../controllers/adController');

router.route('/').get(getAds).post(createAd);
router.route('/:id').get(getAdById);

module.exports = router;
