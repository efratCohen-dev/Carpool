const Drive = require('../models/drive');
const mongoose = require('mongoose');

exports.createDrive = async (req, res) => {
    const drive = await Drive.create(req.body);
    res.json(drive);
}

exports.getByStartingPointAndDestination = async (req, res) => {
    try {
        const {startingPoint,destination}=req.body;
        const appropriateTravel=await Drive.find({startingPoint:startingPoint,destination:destination});
        if(!appropriateTravel){
            return res.status(404).json({ message: 'Drives not found' });
        }
        res.json(appropriateTravel);
    } catch (error) {
        res.status(500).json({ message: 'Faild to find any drives' }); 
    }
}

exports.updateDrive = async (req, res) => {
    try {
        const updateDrive = await Drive.findOneAndUpdate({ driveId: req.params.id }, req.body);
        if (!updateDrive) {
            return res.status(404).json({ message: 'Drive not found' });
        }
        res.json(updateDrive);
    } catch (error) {
        res.status(500).json({ message: 'Faild to update drive' });
    }
}

exports.deleteDrive = async (req, res) => {
    try {
        const deleteDrive = await Drive.findOneAndDelete({ driveId: req.params.id });
        if (!deleteDrive) {
            return res.status(404).json({ message: 'Drive not found' });
        }
        res.json({ message: 'Driver deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Faild to delte drive' });
    }
}
