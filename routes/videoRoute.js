const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController.js');

// Homepage route for getting all video list
router.get('/', videoController.getVideo);

// Route for getting all product list based on video id
router.get('/product/:videoId', videoController.getProduct);

// Route for getting all comment list based on video id
router.get('/comment/:videoId', videoController.getComment);

// Route for adding comment based on video id
router.post('/comment/:videoId', videoController.addComment);

module.exports = router;