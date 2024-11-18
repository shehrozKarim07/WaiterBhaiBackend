const mongoose = require('mongoose');
const complimentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dishId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    },

    compli: {
        type: String,
        enum: ['youAreCool', 'hotStuff', 'youAreFunny', 'greatPhoto', 'writeMode', 'goodWriter', 'justNote', 'thankYou'],
        required: true
    },

    comment: {
        type: String,

    }


}, { timestamps: true })
module.exports = mongoose.model('Compliment', complimentSchema)
