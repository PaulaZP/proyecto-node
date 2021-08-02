const mongoose = require('mongoose');
const FavoriteMusic = require('../models/favoriteMusic.model');

const favoriteMusicService = {};

/*Cuando se llama a la función asíncrona, regresa con una Promesa. Cuando la función asíncrona devuelve un valor,
la promesa se cumple, si la función asíncrona arroja un error, se rechaza.

La palabra await se puede utilizar para esperar a que se resuelva una promesa y devuelva el valor cumplido

save - se usa para guardar el documento en la base de datos

pull - se usa para eliminar un elemento de la colección mediante la clave dada y devolver el elemento extraído.

find - se usa para encontrar datos particulares de la base de datos

*/

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