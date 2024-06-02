const express = require("express");
const router = express.Router();

const { getAllDrivers, deleteDriver, updateDriver, createDraiver } = require('../controllers/driver');

router.post('/', createDraiver);
router.get('/', getAllDrivers);
router.delete('/:id', deleteDriver);
router.put('/:id', updateDriver);

module.exports=router;
