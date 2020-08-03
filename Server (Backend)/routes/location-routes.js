/**
 * The file contains all sub-routes related to locations route.
 */
const express = require('express');
const router = express.Router();
const Location = require('../models/location');

/**
 * get request to retrive all locations from database.
 */
router.get('/',(req,res) =>{
    console.log("executing without param");
    Location.find().then(data => {
        res.send(data);
    }).catch( err => {
        res.json({message:err});
    });    
});

/**
 * get request to retrive particular location record from database having specific uuid.
 */
router.get('/:uuid',(req,res) =>{
    console.log(req.params);
    Location.find({uuid:req.params.uuid}).then(data => {
        res.send(data);
    }).catch( err => {
        res.json({message:err});
    });    
});

/**
 * Post request to store new location in the database.
 * Though,currently client does not provide functionality to store new location in database,
 * but later functionality can be extended.
 */
router.post('/',(req,res) => {
   const location = new Location({
        name:req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        address: req.body.address,
        uuid: req.body.uuid
   });
   location.save().then((data) => {
       res.status(200).json(data);
   }).catch((err) =>{
    res.json({message:err});
   });

});

module.exports = router;