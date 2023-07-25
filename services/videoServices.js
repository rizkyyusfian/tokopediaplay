const Video = require('../models/videoModel.js');

// Get all video list
async function getVideoListService() {
    try {
        return await Video.find().select('urlImageThumbnail');
    } catch (error) {
        throw new Error(error.message);
    };
};


// Get all product list based on video id
async function getProductListService(videoId) {
    try {
        return await Video.find({ _id: videoId }).select({ productList: 1 });
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all comment list based on video id
async function getCommentListService(videoId) {
    try {
        return await Video.find({ _id: videoId }).select({ commentList: 1 });
    } catch (error) {
        throw new Error(error.message);
    }
};

// Add comment based on video id
async function addCommentService(videoId, name, comment) {
    try {
        return await Video.updateOne({ _id: videoId }, { $push: { commentList: { name: name, comment: comment } } });
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { getVideoListService, getProductListService, getCommentListService, addCommentService };