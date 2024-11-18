const express = require('express');
const { addCustomer, getCustomer } = require('../controllers/customerController');
const router = express.Router();


router.post('/addCustomer', addCustomer);
router.get('getCustomer', getCustomer);


module.exports = router;