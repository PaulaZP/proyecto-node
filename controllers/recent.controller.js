const recentService = require ('../services/recent.service');

const RecentController = {};

RecentController.upsert = async function (req, res, next) {
    try{
        const upsertRecent = await recentService.upsertRecent(req.params, req.body);
        return res.status(201).json({status: 201, data: upsertRecent});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}

RecentController.getRecent = async function (req, res, next) {
    try{
        const recents = await recentService.getRecent(req.params);
        return res.status(200).json({status: 202, data: recents, message: "Succesfully recent retrived"});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}

module.exports = RecentController;