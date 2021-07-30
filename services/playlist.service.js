const Playlist = require('../models/playlist.model');
const mongoose = require('mongoose');

const PlaylistService = {};

async function findUser(idUser){
    try{
        const user = Playlist.findOne({idUser: mongoose.Types.ObjectId(idUser)});
        return user ? user : null;  //? un ternario se usa como true o false
    }
    catch (e){
        throw Error ('Error while getting user')
    }
}

async function createPlaylist ({idUser, songs, playlistName}){
    try{
        const playlistMusic = new Playlist({idUser, songs, playlistName});
        const newPlaylistMusic = await playlistMusic.save();
        return newPlaylistMusic;
    }catch (e){
        throw new Error ('Error while save playlist')
    }
}
async function updatePlaylist(user,  songs) {
    try {
        user.song.unshift(songs.toString());
        await user.save();
        return user;
    } catch (e) {
        throw new Error('Error while update Recent Music');
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




module.exports = PlaylistService;