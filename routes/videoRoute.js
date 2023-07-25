const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController.js');

router.get('/', videoController.getVideo);

router.get('/product/:videoId', videoController.getProduct);

router.get('/comment/:videoId', videoController.getComment);

router.post('/comment/:videoId', videoController.addComment);

module.exports = router;