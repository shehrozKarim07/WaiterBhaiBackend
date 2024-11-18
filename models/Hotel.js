const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',

    },
    country: {
        type: String,
    },
    name: {
        type: String,
    },
    address: {

        street: String,
        city: String,
        state: String,
    },
    // Location: {
    //     longitude: String,
    //     latitude: String,
    // },
    category: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    websiteURL: {
        type: String,
    },
    notesForWaiters: {
        type: String,
    },
    timing: {
        opening: {
            type: String,
            // required:true
        },
        closing: {
            type: String,
            // required:true
        }
    },

    cateringService: {
        type: Boolean,
    },
    outdoorSeating: {
        type: Boolean
    },
    indoorDining: {
        type: Boolean
    },
    images: [
        { type: String }
    ],
    description: {
        type: String
    }
});

module.exports = mongoose.model('Hotel', hotelSchema);
