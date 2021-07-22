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

async function createRecent(idUser, songs){
    try {
        const recentMusic = new RecentMusic({idUser, songs});
        const newRecentMusic = await recentMusic.save();
        return newRecentMusic;
    }
    catch (e){
        throw new Error ('Error while save recent music')
    }
}

async function updateRecent(user, songs){
    try {
        user.songs.push(songs.toString());
        await user.save();
        return user;
    }
    catch (e){
        throw new Error ('Error while update recent music')
    }
}

recentService.upsertRecent = async function ({idUser, songs}) {
    try {
        const user = await findUser(idUser);
        if(user){
            return await updateRecent(user,songs);
        }

        return await createRecent(idUser,songs)
    }
    catch (e) {
        throw new Error ('Error while save recent music');
    }
}

module.exports = recentService ;