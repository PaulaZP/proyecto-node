const Playlist = require('../models/playlist.model')
const PlaylistService = {}

PlaylistService.createPlaylist = async function({idUser, playlistName, songs}){
    try{
        const playlist = new Playlist({idUser, playlistName, songs});
        const newPlaylist = await playlist.save();

        return newPlaylist;
    }catch (e){
        //disparar el error
        throw new Error ('Error while save playlist')
    }
}

PlaylistService.getPlaylists = async function(){
    try{
        const playlists = await Playlist.find({});
        return playlists;

    }catch{
        throw new Error ('Error while Paginating playlist')
    }
}

PlaylistService.getPlaylist = async function({id}){
    try{
        const playlist = await Playlist.findById(id)
        return playlist;
    }catch (e){
        throw new Error ('Error while returning playlist');
    }
}

PlaylistService.updatePlaylist = async function({id}, {idUser, playlistName, songs}){
    try{
        const playlist = await Playlist.findById(id)
        const updatePlaylist = await playlist.set({idUser, playlistName, songs});  //setear los valores
        await updatePlaylist.save();
        return updatePlaylist;
    }catch (e){
        throw new Error ('Error while returning playlist');
    }
}


module.exports = PlaylistService;