const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlist.controller')

router.post('/playlist', playlistController.create);
router.put('/playlist/:id', playlistController.updatePlaylist);
router.get('/playlist/:idUser', playlistController.getPlaylist);
router.get('/playlist/:idUser/:id', playlistController.getPlaylistOne);
router.delete('/playlist/:id', playlistController.deletePlaylist);
router.delete('/playlistsong/:id', playlistController.deletePlaylistSong);

module.exports = router;