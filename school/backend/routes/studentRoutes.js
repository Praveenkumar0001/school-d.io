const express = require('express');
const { createStudent } = require('../controllers/studentController');
const router = express.Router();

router.post('/create', createStudent);

module.exports = router;
