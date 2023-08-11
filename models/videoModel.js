// Path: tokopediaplay/models/video.js
const mongoose = require('mongoose');

const { Schema } = mongoose;
const videoSchema = new Schema({
    title: {
        type: String,
        // required: true,
    },
    imageThumbnailUrl: {
        type: String,
        // required: true,
    },
    videoUrl: {
        type: String,
        // required: true,
    },
    productList: [
        {
            type: new Schema(
                {
                    name: {
                        type: String,
                        // required: true,
                    },
                    price: {
                        type: Number,
                        // required: true,
                    },
                    link: {
                        type: String,
                        // required: true,
                    },
                    imageLink: {
                        type: String,
                        // required: true,
                    },
                }, { timestamps: true},
            ),    
        },
    ],
    commentList: [
        {
            type: new Schema(
                {
                    userName: {
                        type: String,
                        required: true,
                    },
                    comment: {
                        type: String,
                        required: true,
                    },
                }, { timestamps: true},
            ),
        },
    ],
}, { timestamps: true});

module.exports = mongoose.model('Video', videoSchema);