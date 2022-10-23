require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const mongoString = 'mongodb+srv://hallen95:PJzhWJTmH1bX7VWL@cluster0.qcfyunr.mongodb.net/test';

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(cors())

app.use(express.json());
// 
app.use('/api', routes)

app.get('/', (req, res) => {
    res.send('hello world 2')
})

app.listen(4000, () => {
    console.log(`Server Started at ${4000}`)
})

module.exports = app;