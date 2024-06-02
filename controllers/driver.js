const Driver = require('../models/driver');

exports.createDraiver = async (req, res) => {
    const driver = await Driver.create(req.body);
    res.json(driver);
}

exports.getAllDrivers = async (req, res) => {
    try {
        const drivers = await Driver.find();
        res.json(drivers);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get drivers' });
    }
}

exports.updateDriver = async (req, res) => {
    try {
        const updateDriver = await Driver.findOneAndUpdate({driverId:req.params.id},req.body);
        if (!updateDriver) {
            return res.status(404).json({ message: 'Driver not found' });
        }
        res.json(updateDriver);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update driver' });
    }
}

exports.deleteDriver = async (req, res) => {
    try {
        const deleteDriver = await Driver.findOneAndDelete({driverId:req.params.id});
        if (!deleteDriver) {
            return res.status(404).json({ message: "Driver not found" });
        }
        res.json({ message: "Driver deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: "Faild to delete driver" })
    }
}
