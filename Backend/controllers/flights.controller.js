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
        const MyFlights = await myFlights.find();
        if (!MyFlights) return res.status(404).json({ message: "No flights found" });
        return res.status(200).json(MyFlights);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const addMyFlights = async(req, res) => {
    try {
        const { flightId } = req.body;
        const flight = await Flights.findById(flightId);
        if (!flight) return res.status(404).json({ message: "Uçuş bulunamadı" });
        let myFlight = new myFlights(flight.toObject());
        await myFlight.save();
        return res.status(200).json(myFlight);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Sunucu hatası" });
    }
}

const deleteMyFlights = async(req, res) => {
    const { flightId } = req.body;
    console.log(flightId);
    try {
        const myFlight = await myFlights.findById(flightId);
        if (!myFlight) return res.status(404).json({ message: "No flight found" });
        await myFlights.deleteOne({ _id: flightId });
        return res.status(200).json({ message: "Flight deleted" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { getAllFlights, getMyFlights, addMyFlights, deleteMyFlights };