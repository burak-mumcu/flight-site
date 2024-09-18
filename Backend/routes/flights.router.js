const express = require('express');
const router = express.Router();
const { getAllFlights, getMyFlights, addMyFlights, deleteMyFlights } = require('../controllers/flights.controller');

router.get('/', getAllFlights);
router.get('/myFlights', getMyFlights);
router.post('/addMyFlight', addMyFlights);
router.post('/deleteMyFlight', deleteMyFlights);

module.exports = router;