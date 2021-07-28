const favoriteMusicService = require ('../services/favorite.service');

const FavoriteMusicController = {};

FavoriteMusicController.upsert = async function (req, res, next) {
    try{
        const upsertFavoriteMusic = await favoriteMusicService.upsertFavoriteMusic(req.body);
        return res.status(201).json({status: 201, data: upsertFavoriteMusic});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}

FavoriteMusicController.getFavorite = async function(req, res, next){
    try{
        const favorites = await favoriteMusicService.getFavorite(req.params);
        return res.status(200).json({ status:200, data: favorites, message: "Successfully favorites retrieved"})

    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

FavoriteMusicController.deleteFavorite = async function(req, res, next){
    try{
        const favorites = await favoriteMusicService.deleteFavorite(req.params);
        return res.status(200).json({ status:200, data: favorites, message: "Item removed succesfull"})

    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

module.exports = FavoriteMusicController;