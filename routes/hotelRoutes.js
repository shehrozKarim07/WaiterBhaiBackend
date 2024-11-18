const express = require('express');
const upload = require('../utils/upload')
const { createHotel, getAll, getHotelById, updateHotel, removeHotel, filter } = require('../controllers/hotelControllers');
const router = express.Router();



router.post('/create', upload.any('images'), createHotel);
router.get('/getall', getAll);
router.get('/getById/:id', getHotelById);
router.get('/search/:key', filter)
router.put('/update/:id', updateHotel);
router.delete('/delete/:id', removeHotel);


module.exports = router;