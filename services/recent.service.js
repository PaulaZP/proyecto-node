const Recent = require('../models/recent.model')
const recentService = {}

recentService.createRecent = async function({idUser, id, songs}){
    try{
        const recent = new Recent({idUser, id,songs});
        const newRecent = await recent.save();

        return newRecent;
    }catch (e){
        //disparar el error
        throw new Error ('Error while save recent')
    }
}

recentService.getRecent = async function(){
    try{
        const recents = await Recent.find({});
        return recents;

    }catch{
        throw new Error ('Error while Paginating recent')
    }
}

module.exports = recentService;