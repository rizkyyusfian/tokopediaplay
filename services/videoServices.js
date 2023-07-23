// make video service

// Path: tokopediaplay/services/videoServices.js
const Video = require('../models/videoModel.js');


// get id, urlImage, thumbnail
function getVideoList() {
     try {
        return Video.find().select('urlImage thumbnail');
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { getVideoList };
