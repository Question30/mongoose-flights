const mongoose = require('mongoose');

function database() {
    mongoose.connect(process.env.MONGO_URI);

    const db = mongoose.connection;

    db.on('error', (e) => console.log(e));
    db.on('open', () => console.log('Connected to MongoDB'));
    db.on('close', () => console.log('MongoDB disconnected'));
}

module.exports = database;