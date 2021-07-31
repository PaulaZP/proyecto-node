const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlist.controller'); // Esto es para traer el archivo de controllers

//Sirve para crear una nueva playlist
router.post('/playlist', playlistController.create);

//Sirve para actualizar una playlist en especifico
router.put('/playlist/:id', playlistController.updatePlaylist);

//Sirve para traer todas las playlist del usuario
router.get('/playlist/:idUser', playlistController.getPlaylist);

//Sirve para traer una playlist especifica del usuario
router.get('/playlist/:idUser/:id', playlistController.getPlaylistOne);

//Sirve para eliminar las playlist especificas del usuario
router.delete('/playlist/:id', playlistController.deletePlaylist);

//Sirve para eliminar una cancion especifica de la playlist del usuario
router.delete('/playlistsong/:id', playlistController.deletePlaylistSong);

//sirve para exportar el  modulo para utilizarlo en otro archivo
module.exports = router;