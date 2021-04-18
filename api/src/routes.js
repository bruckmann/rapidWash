const express = require('express');
const ScheduleController = require('./controller/ScheduleController');

const router = express.Router();
const scheduleController = new ScheduleController();

router.post("/schedule", scheduleController.schedule);

module.exports = router;