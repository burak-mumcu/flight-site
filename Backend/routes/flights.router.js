const express = require('express');
const router = express.Router();
const FlightsController = require('../controllers/flights.controller');

router.get('/', FlightsController.getAllFlights);
router.get('/myFlights', FlightsController.getMyFlights);
router.post('/deleteMyFlight', FlightsController.deleteMyFlight);
router.post('/addMyFlight', FlightsController.addMyFlight);

module.exports = router;