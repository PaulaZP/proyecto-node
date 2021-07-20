const recentService = require ('../services/recent.service');

const recentController = {};

recentController.create = async function (req, res, next) {
    try{
        const newRecent = await recentService.createRecent(req.body);
        return res.status(201).json({newRecent});
    }catch(error){
        return res.status(400).json({status: 400, message: error.message})
    }
}
recentController.getRecents = async function(req, res, next){
    try{
        const recent = await recentService.getFavorites();
        return res.status(200).json({ status:200, data: recent, message: "Successfully recent retrieved"})

    }catch(error){
        return res.status(400).json({status: 400, message: error.message});
    }
}

module.exports = recentController;