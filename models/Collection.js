// import mongoose from "mongoose";
const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    hotelId: {
        type: mongoose.Types.ObjectId,
        ref: 'Hotel',
        required: true,
    },
    name: {
        type: String,
    },
    fav: {
        type: Boolean,
        default: false,
    }

    
}, {
    timestamps: true
});

module.exports = mongoose.model('Collection', collectionSchema);