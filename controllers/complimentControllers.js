const Compliment = require('../models/Compliment');
const addCompliment = async (req, res) => {

    const { dishId, compli, comment } = req.body
    console.log(req.body)
    try {
        const newCompliment = new Compliment({
            userId: req.body.userId,
            dishId,
            compli,
            comment
        });

        await newCompliment.save();
        res.status(201).json({ success: true, message: "compliment added", newCompliment });
    } catch (error) {
        throw new Error(`Failed to create compliment: ${error.message}`);
    }
};


const getAllCompliments = async (req, res) => {
    try {
        const compliments = await Compliment.find({});
        res.status(200).json({ success: true, compliments });
    } catch (error) {
        throw new Error(`Failed to get compliments: ${error.message}`);
    }
};

const getById = async (req, res) => {
    try {
        const { id: complimentId } = req.params;

        const compliment = await Compliment.findOne({ _id: complimentId });
        console.log(compliment)
        if (!compliment) {
            return res.status(404).json({ success: false, message: 'no compliment using this id' });
        }
        res.status(200).json({ success: true, compliment });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message });
    }
}
const getComplimentById = async (req, res) => {

    try {
        const { id: dishId } = req.params;
        console.log(dishId)
        const compliment = await Compliment.find({ dishId });
        if (!compliment) {
            return res.status(404).json({ success: false, message: 'no compliment using this id' });
        }
        res.status(200).json({ success: true, compliment });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { addCompliment, getAllCompliments, getComplimentById, getById };

