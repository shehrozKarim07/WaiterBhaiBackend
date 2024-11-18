const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    hotelId: {
        type: mongoose.Types.ObjectId,
        ref: "Hotel",
        required: true,
    },
    image: {
         type: String,
        required: true
         },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    reviewText: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('HotelReview', reviewSchema);