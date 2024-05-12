const mongoose = require('mongoose');
const driverSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: email,
    password: String
});
module.exports = mongoose.model("Drivers", driverSchema);