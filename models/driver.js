const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    driverId: { type: 'ObjectId', auto: true },
    name: String,
    phone: String,
    email: String,
    password: String
});
module.exports = mongoose.model("Drivers", driverSchema);