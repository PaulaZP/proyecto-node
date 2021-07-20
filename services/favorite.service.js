const Favorite = require('../models/favorite.model')
const favoriteService = {}

favoriteService.createFavorite = async function({idUser, id, songs}){
    try{
        const favorite = new Favorite({idUser, id,songs});
        const newFavorite = await favorite.save();

        return newFavorite;
    }catch (e){
        //disparar el error
        throw new Error ('Error while save favorite')
    }
}

favoriteService.getFavorite = async function(){
    try{
        const favorites = await Favorite.find({});
        return favorites;

    }catch{
        throw new Error ('Error while Paginating favorite')
    }
}

module.exports = favoriteService;