const express = require('express');
const router = express.Router();
const favoriteMusicController = require('../controllers/favorite.controller');

//actualizar datos
router.put('/favorite-music', favoriteMusicController.upsert);
router.get('/favorite-music/:idUser', favoriteMusicController.getFavorite);
router.delete('/favorite-music/:idUser/song/:song', favoriteMusicController.deleteFavorite);

module.exports = router;