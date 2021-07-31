const express = require('express');
const router = express.Router();
const recentController = require('../controllers/recent.controller');

//actualizar datos
router.put('/recent', recentController.upsert);
router.get('/recent/:id', recentController.getRecent);

module.exports = router;