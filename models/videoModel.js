// Path: tokopediaplay/models/video.js
const mongoose = require('mongoose');

const { Schema } = mongoose;
const videoSchema = new Schema({
    title: {
        type: String,
        // required: true,
    },
    urlImageThumbnail: {
        type: String,
        // required: true,
    },
    productList: {
        type: [
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
            },
        ],
        required: true,
    },
    commentList: {
        type: [
            {
                name: {
                    type: String,
                    required: true,
                },
                comment: {
                    type: String,
                    required: true,
                },
            }, { timestamps: true}
        ],
    },
}, { timestamps: true});

module.exports = mongoose.model('Video', videoSchema);