const express = require('express');
const app = express();
const router = express.Router();
require('dotenv').config();
const port = 7000;
const mongoose = require('mongoose');
const FlightsRouter = require('./routes/flights.router')
const cors = require('cors');

app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI).then(() => {
    console.log('MongoDB bağlantısı başarılı!');
}).catch((err) => {
    console.error('MongoDB bağlantı hatası:', err);
});

app.use('/flights', FlightsRouter);

app.listen(port, () => {
    console.log(`Sunucu ${port} portu üzerinde çalışıyor`);
});