const mongoose = require('mongoose');
const driver = require('./driver');

const driveSchema = new mongoose.Schema({
    driveId:{ type: 'ObjectId',auto: true },
    driver: {type:'ObjectId',ref: 'driver'},
    leavingTime:Date,
    startingPoint:{
        city:String,
        street:String,
        numBuild:Number
    },
    destination:{
        city:String,
        street:String,
        numBuild:Number
    },
    price:Number,
    availablePlaces:Number,
    passengers:[] 
});
module.exports = mongoose.model("Drives", driveSchema);