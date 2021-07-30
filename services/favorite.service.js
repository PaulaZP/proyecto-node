const FavoriteMusic = require('../models/favoriteMusic.model');
const mongoose = require('mongoose');

const favoriteMusicService = {};

async function findUser(idUser){
    try{
        const user = await FavoriteMusic.findOne({idUser: mongoose.Types.ObjectId(idUser)});
        return user ? user : null;  //? un ternario se usa como true o false
    }
    catch (e){
        throw Error ('Error while getting user')
    }
}

async function createPlaylist ({idUser, songs}){
    try{
        const favoriteMusic = new FavoriteMusic({idUser, songs});
        const newFavoriteMusic = await favoriteMusic.save();
        return newFavoriteMusic;
    }catch (e){
        //disparar el error
        throw new Error ('Error while save favorite music')
    }
}

async function updateFavoriteMusic(user, songs){
    try {
        user.songs.push(songs.toString());
        await user.save();
        return user;
    }
    catch (e){
        throw Error ('Error while update Favorite Music')
    }
}

favoriteMusicService.upsertFavoriteMusic = async function ({idUser, songs}) {
    try {
        const user = await findUser(idUser);
        if(user){
            return await updateFavoriteMusic(user,songs);
        } else {
            return await createPlaylist (idUser, songs)
        }
    }
    catch (e) {
        throw new Error ('Error while save Favorite Music');
    }
}



favoriteMusicService.getFavorite = async function ({id}) {
    try {
        const favoriteMusic = await FavoriteMusic.findById(id)
        return favoriteMusic;
    } catch (e) {
        throw Error('Error while retirning favorite')
    }
}

module.exports = favoriteMusicService ;