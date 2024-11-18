const express = require('express');
const { addCompliment, getAllCompliments, getComplimentById, getById } = require('../controllers/complimentControllers')
const router = express.Router();

router.post('/addCompliment', addCompliment);
router.get('/getAll', getAllCompliments);
router.get('/getComplimentById/:id', getComplimentById);
router.get('/getById/:id', getById)

module.exports = router;