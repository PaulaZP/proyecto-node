const mongoose = require('mongoose');
const FavoriteMusic = require('../models/favoriteMusic.model');

const favoriteMusicService = {};

async function findUser(idUser){
    try{
        const user = await FavoriteMusic.findOne({idUser: mongoose.Types.ObjectId(idUser)});
        return user ? user : null;  
    }catch (e){
        console.log('Error message', e.message);
        throw Error ('Error while getting user');
    }
}

async function createFavorite(idUser, songs){
    try{
        const favoriteMusic = new FavoriteMusic({idUser, songs});
        const newFavoriteMusic = await favoriteMusic.save();
        return newFavoriteMusic;
    }catch (e){
        console.log('Error message', e.message);
        throw Error ('Error while save favorite music')
    }
}

async function updateFavoriteMusic(user, songs) {
    try {
        user.songs.push(songs.toString());
        user.save();
        return user;
    } catch (e) {
        console.log('Error Message', e.message)
        throw  Error('Error while update Favorite Music');
    }
}

async function deleteFavoriteMusic(user, songs){
    try {
        user.songs.pull(songs.toString());
        user.save();
        return user;
    }
    catch (e){
        console.log('Error message', e.message);
        throw Error ('Error while delete Favorite Music')
    }
}

favoriteMusicService.upsertFavorite = async function({idUser, songs}){
    try {
        const user = await findUser(idUser);
        if(user){
            return await updateFavoriteMusic(user, songs);
        }
        return await createFavorite(idUser, songs);
    }
    catch (e){
        console.log('Error message', e.message);
        throw Error ('Error while upsert Favorite Music');
    }
}

favoriteMusicService.getFavorite = async function ({id}) {
    try {
        const favoriteMusic = await FavoriteMusic.find({idUser: mongoose.Types.ObjectId(id)});
        return favoriteMusic;
    }catch (e){
        console.log('Error message', e.message);
        throw Error ('Error while paginating favorite music');
    }
} 

favoriteMusicService.deleteFavorite = async function({songs, idUser}){
    try{
        const user = await findUser(idUser);
        if(user){
            return await deleteFavoriteMusic(user, songs);
        }
    }catch(e){
        throw new Error('Error while delete favorite');
    }
}

module.exports = favoriteMusicService ;