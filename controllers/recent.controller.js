const recentService = require ('../services/recent.service');

const RecentController = {};

//El try se debe de cumplir si no en caso contrario se pasara al catch

RecentController.upsert = async function (req, res, next) {
    try{
        // la solicitud ha tenido exito y se ha creado un nuevo recurso como resultado. Esta es la respuesta enviada despues de una peticion de PUT
        const upsertRecent = await recentService.upsertRecent(req.params, req.body);
        return res.status(201).json({status: 201, data: upsertRecent});

    }catch(error){
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        return res.status(400).json({status: 400, message: error.message})
    }
}

RecentController.getRecent = async function (req, res, next) {
    try{
        // la solicitud ha tenido existo
        const recents = await recentService.getRecent(req.params);
        return res.status(200).json({status: 202, data: recents, message: "Succesfully recent retrived"});

    }catch(error){
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        return res.status(400).json({status: 400, message: error.message})
    }
}

module.exports = RecentController;