const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require("./config/keys");
const bodyParser = require("body-parser");

app.use(bodyParser.json()); /* Middleware to parse request in json format.*/

const locationRoute = require('./routes/location-routes'); /* Route defined for locations */
app.use('/location', locationRoute); 

/* Connection with Mongo Database */
mongoose.connect(keys.mongodb.dbURI,
    { useNewUrlParser: true },
    (error) => {
        if (!error)
            console.log("success");
        else
            console.log("Failure");
    });

const port = process.env.PORT || 3000; /* Environment defines Server Port if available, else 3000 */
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});