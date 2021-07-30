const playlistService = require ('../services/playlist.service');

const playlistController = {};

playlistController.create = async function (req, res, next) {
    try{
        const newFPlaylist = await playlistService.createPlaylist(req.body);
        return res.status(201).json({newFPlaylist});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}

playlistController.updatePlaylist = async function (req, res, next) {
    try{
        const newFPlaylist = await playlistService.updatePlaylist(req.params, req.body);
        return res.status(201).json({newFPlaylist});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}

playlistController.deletePlaylist = async function (req, res, next) {
    try{
        const deletePlaylist = await playlistService.deletePlaylist(req.params);
        return res.status(201).json({deletePlaylist});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}

playlistController.deletePlaylistSong = async function (req, res, next) {
    try{
        const deleteSongs = await playlistService.deleteSongs(req.params);
        return res.status(201).json({deleteSongs});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}


playlistController.getPlaylist = async function(req, res, next){
    try{
        const playlists = await playlistService.getPlaylist();
        return res.status(200).json({ status:200, data: playlists, message: "Successfully playlist retrieved"})

    }catch(error){
        return res.status(400).json({status: 400, message: error.message});
    }
}

playlistController.getPlaylistOne = async function(req, res, next){
    try{
        const playlist = await playlistService.getPlaylistOne(req.params);
        return res.status(200).json({ status:200, data: playlist, message: "Successfully playlist retrieved"})

    }catch(error){
        return res.status(400).json({status: 400, message: error.message});
    }
}

module.exports = playlistController;