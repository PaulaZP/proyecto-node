const express = require('express');
const router = express.Router();
const favoriteMusicController = require('../controllers/favorite.controller');

//actualizar datos
router.put('/favorite', favoriteMusicController.upsert);
router.get('/favorite/:id', favoriteMusicController.getFavorite);
router.delete('/favorite', favoriteMusicController.delete);

module.exports = router;