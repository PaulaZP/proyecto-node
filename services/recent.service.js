const RecentMusic = require('../models/recent.model');
const mongoose = require('mongoose');

const recentService = {};

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

recentService.upsertRecent = async function ({idUser, idSong}) {
    try {
        const user = await findUser(idUser);
        if(user){
            return await updateRecent(user,idSong);
        }

        return await createRecent(idUser,idSong)
    }
    catch (e) {
        throw new Error ('Error while upsert recent music');
    }
}

recentService.getRecent = async function () {
    try {
        const recent = await RecentMusic.find({});
        return recent;
    }
    catch (e) {
        throw new Error ('Error while paginating recent');
    }
}

module.exports = recentService ;