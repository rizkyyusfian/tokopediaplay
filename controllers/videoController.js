const {getVideoListService, getProductListService, getCommentListService, addCommentService, searchVideoService} = require('../services/videoServices.js');


// Get all video list
async function getVideo(req, res) {
    try {
        const videoList = await getVideoListService();
        res.status(200).json({"videoList": videoList});
    } catch (error) {
        res.status(500).json("Failed to get video list, Error Message: " + error.message);
    }
};

// Get all product list based on video id
async function getProduct(req, res) {
    try {
        const videoId = req.params.videoId;
        const productList = await getProductListService(videoId);
        res.status(200).json(productList);
    } catch (error) {
        res.status(500).json("Failed to get product list, Error Message: " + error.message);
    }
};

// Get all comment list based on video id
async function getComment(req, res) {
    try {
        const videoId = req.params.videoId;
        const commentList = await getCommentListService(videoId);
        res.status(200).json(commentList);
    } catch (error) {
        res.status(500).json("Failed to get comment list, Error Message: " + error.message);
    }
};

// Add comment based on video id
async function addComment(req, res) {
    try {
        const videoId = req.params.videoId;
        const { userName, comment } = req.body;
        await addCommentService(videoId, userName, comment);
        res.status(201).json("Comment Successfully Added");
    } catch (error) {
        res.status(400).json("Failed to a add comment, Error Message: " + error.message);
    }
};

// Search video based on keyword
async function searchVideo(req, res) {
    try {
        const keyword = req.query.q;
        const videoList = await searchVideoService(keyword);
        res.status(200).json({"videoList": videoList});
    } catch (error) {
        res.status(500).json("Failed to search video, Error Message: " + error.message);
    }
};

module.exports = { getVideo, getProduct, getComment, addComment, searchVideo };