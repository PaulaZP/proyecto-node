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

module.exports = FavoriteMusicController;