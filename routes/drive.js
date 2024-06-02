const express = require("express");
const router = express.Router();

const { getByStartingPointAndDestination, deleteDrive, updateDrive, createDrive } = require('../controllers/drive');

router.post('/', createDrive);
router.get('/', getByStartingPointAndDestination);
router.delete('/:id', deleteDrive);
router.put('/:id', updateDrive);

module.exports = router;