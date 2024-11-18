const Bussiness = require('../models/Bussiness');
const createBussiness = async (req, res) => {
    try {
        const { country, name, address, category, phone, website, role } = req.body;
        const newBussiness = new Bussiness({
            country,
            name,
            address,
            category,
            phone,
            website,
            role
        });
        const savedBussiness = await newBussiness.save();
        res.status(201).json({ success: true, message: "bussiness created", savedBussiness });
    } catch (error) {
        res.status(500).json({ success: false, message: "interval server error" });

    }
};

const getAllBussiness = async (req, res) => {
    try {
        const bussiness = await Bussiness.find({});
        res.status(200).json({ success: true, bussiness });
    } catch (error) {
        res.status(500).json({ success: false, message: "interval server error" });

    }
};


module.exports = { createBussiness, getAllBussiness };