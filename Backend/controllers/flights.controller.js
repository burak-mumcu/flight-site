const { Flights } = require('../models/flights.model');
const { MyFlights } = require('../models/myFlights.model');

class FlightsController {
    constructor() {
        this.flights = Flights.find();
    }

    getAllFlights() {
        return this.flights;
    }

    getMyFlights() {
        return MyFlights.find();
    }

    addMyFlights(flightId) {
        return MyFlights.create({ flightId });
    }

    deleteMyFlights(flightId) {
        return MyFlights.deleteOne({ flightId });
    }
}

module.exports = { FlightsController }