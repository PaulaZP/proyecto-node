const favoriteMusicService = require ('../services/favorite.service');

const FavoriteMusicController = {};

//El try se debe de cumplir si no en caso contrario se pasara al catch

FavoriteMusicController.upsert = async function (req, res, next) {
    try{
        // la solicitud ha tenido exito y se ha creado un nuevo recurso como resultado. Esta es la respuesta enviada despues de una peticion de PUT
        const upsertFavorite = await favoriteMusicService.upsertFavorite(req.body);
        return res.status(201).json({status: 201, data: upsertFavorite});

    }catch(error){
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        return res.status(400).json({status: 400, message: error.message}) 
    }
}

FavoriteMusicController.getFavorite = async function(req, res, next){
    try{
        // la solicitud ha tenido existo
        const favorites = await favoriteMusicService.getFavorite(req.params);
        return res.status(200).json({ status:200, data: favorites, message: "Successfully favorites retrieved"})

    }catch(e){
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        return res.status(400).json({status: 400, message: e.message});
    }
}

FavoriteMusicController.delete = async function(req, res, next){
    try{
        // la solicitud ha tenido existo
        const deleteFavorite = await favoriteMusicService.deleteFavorite(req.body);
        return res.status(200).json({ status:200, data: deleteFavorite, message: "Item removed succesfull"})

    }catch(e){
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        return res.status(400).json({status: 400, message: e.message});
    }
}

module.exports = FavoriteMusicController;