const Hotel = require('../models/Hotel');

const createHotel = async (req, res) => {
    try {
        const { userId, country, name, category, phoneNumber, websiteURL, notesForWaiters, cateringService, outdoorSeating, indoorDining, videos, description } = req.body;
        const images = req.files?.map(file => file.filename)
        const address = {
            longitude: req.body['address.longitude'],
            latitude: req.body['address.latitude'],
            street: req.body['address.street'],
            city: req.body['address.city'],
            state: req.body['address.state'],
        };
        const timing = {
            opening: req.body['timing.opening'],
            closing: req.body['timing.closing'],
        };
        const newHotel = new Hotel({
            userId,
            country,
            name,
            address,
            category,
            phoneNumber,
            websiteURL,
            notesForWaiters,
            timing,
            cateringService,
            outdoorSeating,
            indoorDining,
            videos,
            images,
            description
        });
        // console.log(address)
        const saveHotel = await newHotel.save();
        res.status(201).json({ success: true, message: "hotel created", saveHotel });
    } catch (error) {
        res.status(500).json({ success: false, message: "Interval server error" });

    }
};

const getAll = async (req, res) => {
    try {
        const hotel = await Hotel.find({})
        res.status(201).json({ success: true, message: "hotel retrieved", hotel });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

const getHotelById = async (req, res) => {

    try {
        const id = req.params.id;
        const hotel = await Hotel.findById(id);
        if (!hotel) {
            return res.status(404).json({ success: false, message: "hotel not found" });

        }
        res.status(200).json({ success: true, hotel });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


const updateHotel = async (req, res) => {
    const id = req.params.id;
    console.log(id)

    try {
        const hotel = await Hotel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        if (!hotel) {
            return res.status(404).json({ success: false, message: 'hotel not found' });
        }


        res.status(200).json({ success: true, message: 'hotel updated', hotel });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });

    }
};
const filter = async (req, res) => {
    try {
        const data = await Hotel.find({
            $or: [
                { "name": { $regex: req.params.key, $options: "i" } },
                { "category": { $regex: req.params.key, $options: "i" } },
                { "price": { $regex: req.params.key, $options: "i" } },
                { "cateringService": req.params.key === "cateringService" ? true : false },
                { "outdoorSeating": req.params.key === "outdoorSeating" ? true : false },
                { "indoorDining": req.params.key === "indoorDining" ? true : false },
            ]
        })
        res.send(data);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

const removeHotel = async (req, res) => {
    const { id } = req.params;
    try {
        const hotel = await Hotel.findByIdAndDelete(id);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.json({ message: 'Hotel deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};
module.exports = { createHotel, getAll, getHotelById, updateHotel, removeHotel, filter };


