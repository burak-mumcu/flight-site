const express = require('express');
const app = express();
const router = express.Router();
require('dotenv').config();
const port = 3000;
const mongoose = require('mongoose');
const FlightsRouter = require('./routes/flights.router')

app.use(express.json());

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI).then(() => {
    console.log('MongoDB bağlantısı başarılı!');
}).catch((err) => {
    console.error('MongoDB bağlantı hatası:', err);
});

app.use('flights', FlightsRouter);

app.listen(port, () => {
    console.log(`Sunucu ${port} portu üzerinde çalışıyor`);
});