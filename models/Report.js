const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    dishId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    },

    report: {
        type: String,
        enum: ['notHelpFull', 'misCategorize', 'Inappropriate']
    }

});
module.exports = mongoose.model('report', reportSchema);