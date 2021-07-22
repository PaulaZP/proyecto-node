const recentService = require ('../services/recent.service');

const RecentController = {};

RecentController.upsert = async function (req, res, next) {
    try{
        const upsertRecent = await recentService.upsertRecent(req.body);
        return res.status(201).json({status: 201, data: upsertRecent});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}

module.exports = RecentController;