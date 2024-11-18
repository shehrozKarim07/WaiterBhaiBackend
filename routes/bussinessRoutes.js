const express = require('express');
const {createBussiness,getAllBussiness} = require('../controllers/addBussinessControllers');
const router = express.Router();


router.post('/addBussiness', createBussiness);
router.get('/getAllBussiness', getAllBussiness);

module.exports = router;
