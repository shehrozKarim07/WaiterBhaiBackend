const express = require('express');
const router = express.Router();
const { addReport, getAll, getReportById, updateReport, removeReport } = require('../controllers/reportControllers')

router.post('/add', addReport);
router.get('/all', getAll);
router.get('/getById/:id', getReportById);
router.put('/update/:id', updateReport);
router.delete('/delete/:id', removeReport);


module.exports = router;