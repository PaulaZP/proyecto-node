const playlistService = require ('../services/playlist.service');

const playlistController = {};

playlistController.create = async function (req, res, next) {
    try{
        const newFPlaylist = await playlistService.createFavorite(req.body);
        return res.status(201).json({newFPlaylist});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}
playlistController.getFavorites = async function(req, res, next){
    try{
        const playlist = await playlistService.getFavorites();
        return res.status(200).json({ status:200, data: playlist, message: "Successfully playlist retrieved"})

    }catch(error){
        return res.status(400).json({status: 400, message: error.message});
    }
}

module.exports = playlistController;