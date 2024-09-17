const mongoose = require('mongoose');
const { flightSchema } = require('./flights.model')

const myFlights = mongoose.model('MyFlights', flightSchema);

module.exports = { myFlights }