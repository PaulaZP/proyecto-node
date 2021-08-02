const RecentMusic = require('../models/recent.model');
const mongoose = require('mongoose');

const recentService = {};

/*Cuando se llama a la función asíncrona, regresa con una Promesa. Cuando la función asíncrona devuelve un valor,
la promesa se cumple, si la función asíncrona arroja un error, se rechaza.

La palabra await se puede utilizar para esperar a que se resuelva una promesa y devuelva el valor cumplido

findOne - se usa para buscar un documento según la condición. Devuelve el primer documento que cumple la condición.

save - se usa para guardar el documento en la base de datos

find - se usa para encontrar datos particulares de la base de datos

*/


async function findUser(idUser){
    try{
        const user = RecentMusic.findOne({idUser: mongoose.Types.ObjectId(idUser)});
        return user ? user : null;  //? un ternario se usa como tru o false
    }
    catch (e){
        throw new Error ('Error while getting user')
    }
}

async function createRecent(idUser, idSong){
    try {
        const recentMusic = new RecentMusic({idUser, idSong});
        const newRecentMusic = await recentMusic.save();
        return newRecentMusic;
    }
    catch (e){
        throw new Error ('Error while save recent music')
    }
}

async function updateRecent(user, idSong){
    try {
        user.idSong = idSong;
        user.save();
        return user;
    }
    catch (e){
        throw new Error ('Error while update recent music')
    }
}

recentService.upsertRecent = async function ({id}, {idSong}) {
    try {
        const user = await findUser(id);
        if(user){
            return await updateRecent(user,idSong);
        }

        return await createRecent(id, idSong)
    }
    catch (e) {
        throw new Error ('Error while upsert recent music');
    }
}

recentService.getRecent = async function ({id}) {
    try {
        const recent = await RecentMusic.find({idUser:id});
        return recent;
    }
    catch (e) {
        throw new Error ('Error while paginating recent');
    }
}

module.exports = recentService ;