const favoriteMusicService = require ('../services/favorite.service');

const FavoriteMusicController = {};

FavoriteMusicController.upsert = async function (req, res, next) {
    try{
        const upsertFavorite = await favoriteMusicService.upsertFavorite(req.body);
        return res.status(201).json({status: 201, data: upsertFavorite});
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

FavoriteMusicController.delete = async function(req, res, next){
    try{
        const deleteFavorite = await favoriteMusicService.deleteFavorite(req.body);
        return res.status(200).json({ status:200, data: deleteFavorite, message: "Item removed succesfull"})

    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

module.exports = FavoriteMusicController;