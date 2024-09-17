const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    departure: String,
    arrival: String,
    price: Number,
    from: String,
    to: String,
    duration: String,
    date: String
});

const Flights = mongoose.model('Flights', flightSchema);

module.exports = { flightSchema, Flights }