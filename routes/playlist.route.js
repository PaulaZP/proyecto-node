const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlist.controller')

router.post('/playlist', playlistController.create);
router.put('/playlist/:id', playlistController.updatePlaylist);
router.get('/playlist', playlistController.getPlaylist);
router.get('/playlist/:id', playlistController.getPlaylistOne);
router.delete('/playlist/:id', playlistController.deletePlaylist);
router.delete('/playlist/:id', playlistController.deletePlaylistSong);

module.exports = router;