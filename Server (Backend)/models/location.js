/**
 * locationSchema defines the schema of location collection stored in the Mongo Database.
 * Moongoose module is used that can be used to perform CRUD operations.
 * Name,Latitude,Longitude,address and device's uuid are stored in the database.
 */
const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    uuid: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('location', locationSchema);
