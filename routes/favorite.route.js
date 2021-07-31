const express = require('express');
const router = express.Router();
const favoriteMusicController = require('../controllers/favorite.controller'); // Esto es para traer el archivo de ocntrollers

//se puede agregar y actualizar las canciones de favoritos
router.put('/favorite', favoriteMusicController.upsert);

//se puede traer las canciones de favoritos
router.get('/favorite/:id', favoriteMusicController.getFavorite);

//se pueden borrar las canciones de favoritos
router.delete('/favorite', favoriteMusicController.delete);

//Esto es para exportar el modulo y poder usarlo en otro archivo
module.exports = router;