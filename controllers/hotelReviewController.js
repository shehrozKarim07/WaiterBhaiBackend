const HotelReview = require('../models/HotelReview');



const createReview = async (req, res) => {
    try {
        const { userId,hotelId, rating, reviewText } = req.body
        console.log(req.file)
    
        const image = req.file?.filename
      

        const newReview = new HotelReview({
            userId,
            hotelId,
            image,
            reviewText,
            rating,
        });

        await newReview.save();
        console.log(newReview)
        res.status(201).json({ success: true, message: "review added", newReview });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
        
    }
};

const getAllReviews = async (req, res) => {
    try {
        const reviews = await HotelReview.find();
        res.status(201).json({ success: true, reviews });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create review'
        });
    }
};

const getSingleReview = async (req, res) => {
    const id = req.params.id;

    try {
        const review = await HotelReview.findOne({ hotelId: id });

        if (!review) {
            return res.status(404).json({ success: false, message: 'Review not found with this id' });
        }
        res.status(200).json({ success: true, data: review });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}


const updateReviewById = async (req, res) => {
    try {
        const id = req.params;
        const { rating, reviewText } = req.body;

        const review = await review.findOne({ id });
        if (!review) {
            return res.status(404).send(`No review with id ${reviewId}`);
        }
        review.rating = rating;
        review.reviewText = reviewText;
        await review.save();

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Interval server error" });

    }
}

const removeById = async (req, res) => {
    const id = req.params.id;
    try {
        const review = await HotelReview.findByIdAndDelete(id);
        if (!review) {
            return res.status(404).send(`No review with this id ${id} `);
        }
        res.status(200).json({ success: true, message: "Review deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}


module.exports = { createReview, getAllReviews, getSingleReview, updateReviewById, removeById };



