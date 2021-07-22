const playlistService = require ('../services/playlist.service');

const playlistController = {};

playlistController.create = async function (req, res, next) {
    try{
        const newPlaylist = await playlistService.createPlaylist(req.body);
        return res.status(201).json({newPlaylist});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}
playlistController.getPlaylists = async function(req, res, next){
    try{
        const playlists = await playlistService.getPlaylists();
        return res.status(200).json({ status:200, data: playlists, message: "Successfully playlist retrieved"})

    }catch(error){
        return res.status(400).json({status: 400, message: error.message});
    }
}

playlistController.getPlaylist = async function(req, res, next){
    try{
        const playlist = await playlistService.getPlaylist(req.params);
        if(playlist == null){
            return res.status(400).json({message: "cannot find playlist"});
        }
        return res.status(200).json({ status:200, data: playlist, message: "Successfully playlist retrieved"})

    }catch(error){
        return res.status(400).json({status: 400, message: error.message});
    }
}

playlistController.updatePlaylist = async function(req, res, next){
    try{
        const updatePlaylist = await playlistService.updatePlaylist(req.params, req.body);
        return res.status(200).json({ status:200, data: updatePlaylist, message: "Successfully updated playlist"})

    }catch(error){
        return res.status(400).json({status: 400, message: error.message});
    }
}

module.exports = playlistController;