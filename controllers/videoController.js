//make video controller

// Path: tokopediaplay/controllers/videoController.js
const {getVideoList} = require('../services/videoServices.js');


// get video function from service
async function getVideo(req, res) {
    try {
        const videoList = await getVideoList();
        res.status(200).json(videoList);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getVideo };


