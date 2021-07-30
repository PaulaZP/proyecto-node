const Favorite = require('../models/playlist.model')
const playlistService = {}

playlistService.createPlaylist = async function({idUser, playlistName, idSongs}){
    try{
        const Playlist = new Favorite({idUser, playlistName, idSongs});
        const newPlaylist = await Playlist.save();
        return newPlaylist;
    }catch (e){
        throw new Error ('Error while save playlist')
    }
}

playlistService.updatePlaylist = async function({id},{idUser, playlistName, idSongs}){
    try{
        const Playlist = await Favorite.findById(id);
        const updatePlay = await Favorite.set({idUser, playlistName});
        Playlist.idSongs.push(idSongs.toString());
        await updatePlay.save();
        return updatePlay;
    }catch (e){
        throw new Error ('Error while save playlist')
    }
}

playlistService.deleteSongs = async function({id},{idUser, playlistName, idSongs}){
    try{
        const Playlist = await Favorite.findById(id);
        const updatePlay = await Favorite.set({idUser, playlistName});
        Playlist.idSongs.pull(idSongs.toString());
        await updatePlay.save();
        return updatePlay;
    }catch (e){
        throw new Error ('Error while delete playlist')
    }
}

playlistService.deletePlaylist = async function({id}){
    try{
        const Playlist = await Favorite.deleteOne({_id:id});
        return Playlist;
    }catch (e){
        throw new Error ('Error while delete playlist')
    }
}


playlistService.getPlaylist = async function(){
    try{
        const playlists = await Favorite.find({});
        return playlists;

    }catch{
        throw new Error ('Error while Paginating playlist')
    }
}

playlistService.getPlaylistOne = async function({id}){
    try{
        const playlist = await Favorite.find({_id:id});
        return playlist;

    }catch{
        throw new Error ('Error while Paginating playlist')
    }
}

module.exports = playlistService;