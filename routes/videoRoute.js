const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController.js');

router.get('/', videoController.getVideo);

module.exports = router;