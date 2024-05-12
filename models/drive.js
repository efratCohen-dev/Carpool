const mongoose = require('mongoose');
const driver = require('./driver');

const driveSchema = new mongoose.Schema({
    driver: driver,
    leavingTime:Date,
    startingPoint:{
        city:String,
        street:String,
        numBuild:number
    },
    target:{
        city:String,
        street:String,
        numBuild:number
    },
    price:Number,
    availablePlaces:Number,
    passengers:[] 
});
module.exports = mongoose.model("Drives", driveSchema);