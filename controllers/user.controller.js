const userService = require ('../services/user.service');

const userController = {};

//El try se debe de cumplir si no en caso contrario se pasara al catch


userController.create = async function (req, res, next) {
    try{
        const newUser = await userService.createUser(req.body);
        return res.status(201).json({newUser}); //la solicitud ha tenido exito y se ha creado un nuevo recurso.
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})// El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
    }
}

userController.getUsers = async function(req, res, next){
    try{
        const users = await userService.getUsers();
        return res.status(200).json({ status:200, data: users, message: "Successfully users retrieved"})// la solicitud ha tenido existo

    }catch(e){
        return res.status(400).json({status: 400, message: e.message});// El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
    }
}

userController.getUser = async function(req, res, next){
    try{
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        const user = await userService.getUser(req.params);
        if(user == null){
            return res.status(400).json({message: "cannot find user"});
        }

        // la solicitud ha tenido existo
        return res.status(200).json({ status:200, data: user, message: "Successfully user retrieved"})

    }catch(e){
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        return res.status(400).json({status: 400, message: e.message});
    }
}

userController.updateUser = async function(req, res, next){
    try{
        // la solicitud ha tenido existo
        const updateUser = await userService.updateUser(req.params, req.body);
        return res.status(200).json({ status:200, data: updateUser, message: "Successfully updated user"})

    }catch(e){
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        return res.status(400).json({status: 400, message: e.message});
    }
}

userController.deleteUser = async function(req, res, next){
    try{
        //la solicitud ha tenido exito y se ha creado un nuevo recurso como resultado
        const deleteUser = await userService.deleteUser(req.params);
        return res.status(201).json({deleteUser}) 

    }catch(e){
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        return res.status(400).json({status: 400, message: e.message});
    }
}

userController.logginUser = async function(req, res, next){
    try{
        // la solicitud ha tenido existo
        const loggin = await userService.logginUser(req.params);
        return res.status(200).json({loggin})

    }catch(e){
        // El servidor no pudo interpretar la solicitud dada una sintaxis inválida.
        return res.status(400).json({status: 400, message: e.message});
    }
}
module.exports = userController;