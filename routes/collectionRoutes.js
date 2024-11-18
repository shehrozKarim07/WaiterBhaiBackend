const express = require('express');
const { createCollection, getAllCollections, getCollectionById, updatedCollection, deleteCollection } = require('../controllers/collectionControllers')
const router = express.Router();

router.post('/createCollection/:id', createCollection);

router.get('/getAllCollections', getAllCollections);

router.get('/getCollectionById/:id', getCollectionById);

router.put('/update/:id', updatedCollection);

router.delete('/delete/:id', deleteCollection);


module.exports = router;