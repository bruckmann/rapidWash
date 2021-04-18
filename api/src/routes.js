const express = require('express');
const fieldsMiddleware = require('./middlewares/fieldsMiddleware');
const ScheduleController = require('./controller/ScheduleController');

const router = express.Router();
const scheduleController = new ScheduleController();

router.post("/schedule", fieldsMiddleware,  scheduleController.schedule);

module.exports = router;