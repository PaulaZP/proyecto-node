const playlistService = require ('../services/playlist.service');

const playlistController = {};

//El try se debe de cumplir si no en caso contrario se pasara al catch

playlistController.create = async function (req, res, next) {
    try{
        // la solicitud ha tenido exito y se ha creado un nuevo recurso como resultado.
        const newFPlaylist = await playlistService.createPlaylist(req.body);
        return res.status(201).json({newFPlaylist});

    }catch(error){
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        return res.status(400).json({status: 400, message: error.message})
    }
}

playlistController.updatePlaylist = async function (req, res, next) {
    try{
        // la solicitud ha tenido exito y se ha creado un nuevo recurso como resultado. 
        const newPlaylist = await playlistService.updatePlaylist(req.params, req.body);
        return res.status(201).json({newPlaylist});

    }catch(error){
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        return res.status(400).json({status: 400, message: error.message})
    }
}

playlistController.deletePlaylist = async function (req, res, next) {
    try{
        // la solicitud ha tenido exito y se ha creado un nuevo recurso como resultado. 
        const deletePlaylist = await playlistService.deletePlaylist(req.params);
        return res.status(201).json({deletePlaylist});

    }catch(error){
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        return res.status(400).json({status: 400, message: error.message})
    }
}

playlistController.deletePlaylistSong = async function (req, res, next) {
    try{
        // la solicitud ha tenido exito y se ha creado un nuevo recurso como resultado. 
        const deleteSongs = await playlistService.deleteSongs(req.params, req.body);
        return res.status(201).json({deleteSongs});

    }catch(error){
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        return res.status(400).json({status: 400, message: error.message})
    }
}

playlistController.getPlaylist = async function(req, res, next){
    try{
        // la solicitud ha tenido existo
        const playlist = await playlistService.getPlaylist(req.params);
        return res.status(200).json({ status:200, data: playlist, message: "Successfully playlist retrieved"})

    }catch(error){
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        return res.status(400).json({status: 400, message: error.message});
    }
}

playlistController.getPlaylistOne = async function(req, res, next){
    try{
        // la solicitud ha tenido existo
        const playlist = await playlistService.getPlaylistOne(req.params);
        return res.status(200).json({ status:200, data: playlist, message: "Successfully playlist retrieved"})

    }catch(error){
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        return res.status(400).json({status: 400, message: error.message});
    }
}

module.exports = playlistController;