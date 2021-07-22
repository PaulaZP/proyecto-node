const express = require('express');
const router = express.Router();
const recentController = require('../controllers/recent.controller');

//actualizar datos
router.put('/recent-music', recentController.upsert);


module.exports = router;