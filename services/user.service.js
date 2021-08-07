const md5 = require('md5');
const User = require('../models/user.model')
const userService = {}

/*Cuando se llama a la función asíncrona, regresa con una Promesa. Cuando la función asíncrona devuelve un valor,
la promesa se cumple, si la función asíncrona arroja un error, se rechaza.

La palabra await se puede utilizar para esperar a que se resuelva una promesa y devuelva el valor cumplido

md5 - para incriptar datos sensibles

save - se usa para guardar el documento en la base de datos

find - se usa para encontrar datos particulares de la base de datos

findById - se usa para buscar un solo documento por su campo _id

deleteOne - se usa para eliminar el primer documento que cumple las condiciones de la colección

*/

userService.createUser = async function({name, email, password}){
    try{
        const user = new User({name, email, password: md5(password)});
        const newUser = await user.save();
        return newUser;
    }catch (e){
        console.log(e.message);
        throw new Error ('Error while save user')
    }
};

userService.getUsers = async function(){
    try{
        const users = await User.find({});
        return users;
    }catch (e){
        console.log(e.message);
        throw new Error ('Error while Paginating Users')
    }
}

userService.getUser = async function({id}){
    try{
        const user = await User.findById(id);
        let getUser = JSON.parse(JSON.stringify(user));
        delete getUser.password;
        return getUser;
    }catch (e){
        console.log(e.message);
        throw new Error ('Error while returning user');
    }
}

userService.updateUser = async function({id}, {name, email, password}){
    try{
        const user = await User.findById(id)
        const updateUser = await user.set({name, email, password: md5(password)});
        await updateUser.save();
        return updateUser;
    }catch (e){
        console.log(e.message);
        throw new Error ('Error while update user');
    }
}

userService.deleteUser = async function({id}){
    try{
        const user = await User.deleteOne({_id:id});
        if(user){
            return "user deleted";
        }
    }catch (e){
        console.log(e.message);
        throw new Error ('Error while update user');
    }
}

userService.logginUser = async function({email,password}){
    try{
        const users = await User.findOne({email});
        if(users.password == md5(password)){
            return data = {
                id:users._id,
                status:true
            }
        }else{
            return data = {
                status: false
            }
        };
    }catch (e){
        console.log(e.message);
        throw new Error ('Error while loggin user');
    }
}

module.exports = userService;