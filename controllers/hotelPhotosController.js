const hotelPhotos = require("../models/photos");

const addPhotos  = async (req,res)=>{
    try {
        const {image,category} = req.body;
        const newHotelPhotos = new hotelPhotos({
            image,
            category
        });

        const savedPhotos =  await newHotelPhotos.save();
        res.status(200).json({
            success: true,
            message: "Photos added successfully",
             savedPhotos
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Interval server error" });
        
    }

}
module.exports = addPhotos;