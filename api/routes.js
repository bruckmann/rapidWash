const router = require('express').Router();
const ScheduleController = require('./controller/ScheduleController');

const scheduleController = new ScheduleController();

router.post("/schedule", scheduleController.schedule);