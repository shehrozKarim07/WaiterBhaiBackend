const express = require('express');
const {addFav,getAllFavoriteDishes} = require('../controllers/favController')
const router = express.Router();

router.post('/addFav', addFav);
router.get('/getAll/:id', getAllFavoriteDishes)

module.exports = router;