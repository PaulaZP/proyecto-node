const FavoriteMusic = require('../models/favoriteMusic.model');
const mongoose = require('mongoose');

const favoriteMusicService = {};

favoriteMusicService.getFavorite = async function ({idUser}) {
    try {
        const favoriteMusic = await FavoriteMusic.find({idUser: mongoose.Types.ObjectId(idUser)})
        return favoriteMusic;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Favorite Music')
    }
}

async function findUser(idUser){
    try{
        const user = await FavoriteMusic.findOne({idUser: mongoose.Types.ObjectId(idUser)});
        return user ? user : null;  //? un ternario se usa como tru o false
    }
    catch (e){
        throw Error ('Error while getting user')
    }
}

async function saveFavoriteMusic (idUser, songs) {
    try {
        const favoriteMusic = new FavoriteMusic({idUser, songs});
        const newFavoriteMusic = await favoriteMusic.save();
        return newFavoriteMusic;
    } catch (e) {
        // Log Errors
        throw Error('Error while save Favorite Music')
    }
}

async function updateFavoriteMusic(user, songs){
    try {
        user.songs.push(songs.toString());
        await user.save();
        return user;
    }
    catch (e){
        console.log('Error message', e.message)
        throw Error ('Error while update Favorite Music')
    }
}

async function deleteFavoriteMusic(user, song){
    try {
        user.song.pull(song);
        user.save();
        return user;
    }
    catch (e){
        console.log('Error message', e.message)
        throw new Error ('Error while update Favorite Music')
    }
}

favoriteMusicService.upsertFavoriteMusic = async function ({idUser, songs}) {
    try {
        const user = await findUser(idUser);
        if(user){
            return await updateFavoriteMusic(user,songs);
        } else {
            return await saveFavoriteMusic (idUser, songs)
        }
    }
    catch (e) {
        console.log('Error message', e.message)
        throw new Error ('Error while save Favorite Music');
    }
}

favoriteMusicService.deleteFavorite = async function ({idUser, song}) {
    try {
        const user = await findUser(idUser);
        if(user){
            return deleteFavoriteMusic(user,song);
        }
    }
    catch (e) {
        console.log('Error message', e.message)
        throw new Error ('Error while save Favorite Music');
    }
}

module.exports = favoriteMusicService ;