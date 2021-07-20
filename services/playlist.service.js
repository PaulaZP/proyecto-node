const Favorite = require('../models/playlist.model')
const playlistService = {}

playlistService.createPlaylist = async function({idUser, id, playlistName, songs}){
    try{
        const playlist = new Favorite({idUser, id, playlistName, songs});
        const newPlaylist = await playlist.save();

        return newPlaylist;
    }catch (e){
        //disparar el error
        throw new Error ('Error while save playlist')
    }
}

playlistService.getPlaylist = async function(){
    try{
        const playlists = await Playlist.find({});
        return playlists;

    }catch{
        throw new Error ('Error while Paginating playlist')
    }
}

module.exports = playlistService;