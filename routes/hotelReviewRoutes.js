const express = require('express');

const { createReview, getAllReviews, getSingleReview, updateReviewById, removeById } = require('../controllers/hotelReviewController')
const upload = require('../utils/upload')

const router = express.Router();

router.post('/createHotelReview', upload.single('image'), createReview);
router.get('/getAllReviews', getAllReviews)
router.get('/getSingleReview/:id', getSingleReview)
router.get('/updateHotelReview', updateReviewById)
router.delete('/removeById/:id', removeById)

module.exports = router;