const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlist.controller')

router.post('/playlist', playlistController.create);
router.get('/playlists', playlistController.getPlaylists)

//traer un solo usuario
router.get('/playlist/:id', playlistController.getPlaylist);

//actualizar datos
router.put('/playlist/:id', playlistController.updatePlaylist);


module.exports = router;