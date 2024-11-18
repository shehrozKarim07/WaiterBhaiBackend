const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({

    country: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    website: {
        type: String
    },
    notesForTheWaiterTeam: {
        type: String
    },
    role: {
        type: String,
        default: 'customer'
    }

});
module.exports = mongoose.model('Customer', customerSchema)

