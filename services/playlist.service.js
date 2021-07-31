const playlist = require('../models/playlist.model');
const mongoose = require('mongoose');
const playlistService = {};


playlistService.createPlaylist = async function({idUser, playlistName, idSongs}){
    try{
        const Playlist = new playlist({idUser, playlistName, idSongs});
        const newPlaylist = await Playlist.save();
        return newPlaylist;
    }catch (e){
        throw new Error ('Error while save playlist')
    }
}

playlistService.updatePlaylist = async function({id},{idUser, playlistName, idSongs}){
    try{
        const Playlist = await playlist.findById(id);
        const updatePlay = await Playlist.set({idUser, playlistName});
        Playlist.idSongs.push(idSongs.toString());
        await updatePlay.save();
        return updatePlay;
    }catch (e){
        throw new Error ('Error while save playlist')
    }
}

playlistService.deleteSongs = async function({id},{idUser, playlistName, idSongs}){
    try{
        const Playlist = await playlist.findById(id);
        const updatePlay = await Playlist.set({idUser, playlistName});
        Playlist.idSongs.pull(idSongs.toString());
        await updatePlay.save();
        if(Playlist){
            return "song deleted";
        }
    }catch (e){
        throw new Error ('Error while delete playlist')
    }
}

playlistService.deletePlaylist = async function({id}){
    try{
        const Playlist = await playlist.deleteOne({_id:id});
        if(Playlist){
            return "playlist deleted";
        }
    }catch (e){
        throw new Error ('Error while delete playlist')
    }
}

playlistService.getPlaylist = async function({idUser}){
    try{
        const playlists = await playlist.find({idUser: mongoose.Types.ObjectId(idUser)});
        return playlists;

    }catch{
        throw new Error ('Error while Paginating playlist')
    }
}


playlistService.getPlaylistOne = async function({idUser, id}){
    try{
        const playlistOne = await playlist.find({idUser: mongoose.Types.ObjectId(idUser),_id:id});
        return playlistOne;

    }catch{
        throw new Error ('Error while Paginating playlist')
    }
}

module.exports = playlistService;