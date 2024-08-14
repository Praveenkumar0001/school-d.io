const express = require('express');

const { createClassroom, assignClassroom } = require('../controllers/classroomController');
const router = express.Router();

router.post('/create', createClassroom);
router.post('/assign', assignClassroom);

module.exports = router;
