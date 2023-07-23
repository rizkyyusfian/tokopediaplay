// Path: tokopediaplay/models/video.js
const mongoose = require('mongoose');

const { Schema } = mongoose;
const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    urlImage: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    productList: {
        type: new mongoose.Schema({
            title: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            link: {
                type: String,
                required: true,
            },
        }),
    },
    commentList: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
        }, { timestamps: true}),
    },
}, { timestamps: true});

module.exports = mongoose.model('Video', videoSchema);