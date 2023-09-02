//Imports
const express = require('express');
require('dotenv').config();
const database = require('./config/database');
const jsxEngine = require('jsx-view-engine');
const Flight = require('./models/Flight');


//variables
const app = express();
const PORT = 3000;

//app Config
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

//Middleware
app.use(express.urlencoded({extended: false}));

//Routes
/**
 * Index Route
 */
app.get('/', (req, res) => {
    res.redirect('/flights');
});

app.get('/flights', async (req, res) => {
    const flightsFromDB = await Flight.find({}).sort({departs: 'asc'});

    res.render('Index', {
        flights : flightsFromDB
    });
})

/**
 * POST
 */
app.post('/flights', async (req, res) => {
    try{
        const createdFlight = await Flight.create(req.body);
        console.log(createdFlight);
    }catch(error){
        console.log(error);
    }
    res.redirect('/flights');
});

/**
 * New 
 */
app.get('/flights/new', (req, res) => {
    const flight = new Flight();
    const dt = flight.departs;
    const departsDate = dt.toISOString().slice(0,16)

    res.render('New', {departsDate});
});

/**
 * Show
 */
app.get('/flights/:id', async (req, res) => {
    const {id} = req.params;

    const flight = await Flight.findById(id);
    res.render('Show', {
        flight: flight
    })
})

app.post('/flights/:id', async (req, res) => {
    const {id} = req.params;
    console.log(req.body);
    try {
        const flightToUpdate = await Flight.findById(id);
        flightToUpdate.destinations.push(req.body);
        const updatedFlight = await Flight.findByIdAndUpdate(id, flightToUpdate, {new: true});
        res.redirect(`/flights/${updatedFlight.id}`)
    } catch (error) {
        console.log(error);
    }
})

app.get('/flights/destination/:id', async (req, res) => {
    const {id} = req.params;

    const flight = await Flight.findById(id);
    res.render('Destination', {
        flight: flight,
    })
})

//Listening
database();
app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
})