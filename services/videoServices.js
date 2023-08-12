const Video = require('../models/videoModel.js');

// Get all video list
async function getVideoListService() {
    try {
        return await Video.find().select('title imageThumbnailUrl videoUrl');
    } catch (error) {
        throw new Error(error.message);
    };
};


// Get all product list based on video id
async function getProductListService(videoId) {
    try {
        return await Video.find({ _id: videoId }).select({ "productList._id": 1, "productList.name": 1, "productList.price": 1, "productList.link": 1, "productList.imageLink": 1, "_id": 0 });
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get all comment list based on video id
// async function getCommentListService(videoId) {
//     try {
//         return await Video.find({ _id: videoId }).select({ "commentList.userName": 1, "commentList.comment": 1, "commentList.createdAt": 1, "commentList.updatedAt": 1, "_id": 0 }).sort({ "commentList.createdAt": -1 });
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };


// Get all comment list based on video id sorted by createdAt descending
async function getCommentListService(videoId) {
    try {
        const video = await Video.findOne({ _id: videoId }, {
            "commentList.userName": 1,
            "commentList.comment": 1,
            "commentList.createdAt": 1,
            "commentList.updatedAt": 1,
            "_id": 0,
        });

        if (!video) {
            return [];
        }

        const sortedComments = video.commentList.sort((a, b) =>
            b.createdAt.getTime() - a.createdAt.getTime()
        );

        return { commentList: sortedComments };
    } catch (error) {
        throw new Error(error.message);
    }
};


// Add comment based on video id
async function addCommentService(videoId, userName, comment) {
    try {
        return await Video.updateOne({ _id: videoId }, { $push: { commentList: { userName: userName, comment: comment } } });
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { getVideoListService, getProductListService, getCommentListService, addCommentService };