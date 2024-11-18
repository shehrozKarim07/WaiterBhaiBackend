const mongoose =require('mongoose');

const hotelPhotosSchema = new mongoose.Schema({
    image:{
        type: String,
        
    },
    category: {
        type: string
    }
});
module.exports = mongoose.model("hotelPhotos",hotelPhotosSchema);