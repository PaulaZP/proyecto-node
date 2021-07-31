const express = require('express');
const router = express.Router();
const recentController = require('../controllers/recent.controller');

//actualizar datos
router.put('/recent/:id', recentController.upsert);
router.get('/recent/:id', recentController.getRecent);

module.exports = router;