const Collection = require('../models/Collection');

const createCollection = async (req, res) => {
    try {
        const { hotelId, name, fav } = req.body;
        const { id: userId } = req.params;

        if (!hotelId) {
            return res.status(400).send({ success: false, message: 'Please provide hotel' });
        }

        // Check if the collection already exists for the user and hotel
        const existingCollection = await Collection.findOne({ userId, hotelId });

        if (existingCollection) {
            // If the collection exists and fav is true, remove the collection (disfav)
            await Collection.deleteOne({ _id: existingCollection._id });
            return res.status(200).json({ success: true, message: 'Hotel unfavorited successfully' });
        }

        // If the collection does not exist, create a new one
        const collection = new Collection({ userId, hotelId, name, fav });
        await collection.save();

        res.status(201).json({ success: true, data: collection });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


const getAllCollections = async (req, res) => {
    try {
        const collections = await Collection.find({});
        res.status(200).json({ success: true, collections });;
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

const getCollectionById = async (req, res) => {
    const id = req.params.id;
    try {
        const collection = await Collection.findById(id);
        if (!collection) {
            return res.status(404).json({ success: false, message: 'collection not found' });
        }
        res.status(200).json({ success: true, collection });;
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};


const updatedCollection = async (req, res) => {
    const id = req.params.id;
    try {
        const collection = await Collection.findByIdAndUpdate(id);
        res.status(200).json({ success: true, collection });; g7tuyfktk, gvujhbjk

    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });

    }

};

const deleteCollection = async (req, res) => {
    const { id } = req.params;
    try {
        const collection = await Collection.findByIdAndDelete(id);
        if (!collection) {
            return res.status(404).json({ message: 'collection not found' });
        }
        res.status(200).json({ success: true, message: 'compliment deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};




module.exports = { createCollection, getAllCollections, getCollectionById, updatedCollection, deleteCollection };

