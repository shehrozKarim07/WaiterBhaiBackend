const mongoose = require('mongoose');


const dishSchema = new mongoose.Schema({
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
    },

    name: {
        type: String,

    },
    price: {
        type: Number,

    },
    images: [{

        type: String

    }],
    imageUrl: {
        type: String,
    },
    imageDescription: {
        type: String
    },
    imageFoodType: {
        type: String,
    },

}, {
    timestamps: true
});


module.exports = mongoose.model("dish", dishSchema);