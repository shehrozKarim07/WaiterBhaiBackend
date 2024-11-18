const express = require("express");
const upload = require('../utils/upload')
const { createDish, getAll, getDishById, updateDish, deletebyid } = require("../controllers/dishControllers")
const router = express.Router();

router.post('/create', upload.any('images'), createDish);
router.get('/all/:hotelId', getAll);
router.get('/getById/:id', getDishById)
router.put('/update/:id', updateDish)
router.delete('/remove/:id', deletebyid);



module.exports = router;