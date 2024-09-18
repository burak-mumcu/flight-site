const { Flights } = require('../models/flights.model');
const { myFlights } = require('../models/myFlights.model');


const getAllFlights = async(req, res) => {
    try {
        const flights = await Flights.find();
        if (!flights) return res.status(404).json({ message: "No flights found" });
        return res.status(200).json(flights);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
const getMyFlights = async(req, res) => {
    try {
        const myFlights = await myFlights.find();
        if (!myFlights) return res.status(404).json({ message: "No flights found" });
        return res.status(200).json(myFlights);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const addMyFlights = async(req, res) => {
    try {
        const { flightId } = req.body;
        const flight = await Flights.findById({ _id: flightId });
        if (!flight) return res.status(404).json({ message: "No flight found" });
        const MyFlights = await myFlights.create(flight);
        return res.status(200).json(MyFlights);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const deleteMyFlights = async(req, res) => {
    const { flightId } = req.body;
    try {
        const myFlight = await MyFlights.deleteOne({ flightId });
        if (!myFlight) return res.status(404).json({ message: "No flight found" });
        return res.status(200).json({ message: "Flight deleted" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { getAllFlights, getMyFlights, addMyFlights, deleteMyFlights };