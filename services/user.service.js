const md5 = require('md5');
const User = require('../models/user.model')
const userService = {}

userService.createUser = async function({name, email, password}){
    try{
        const user = new User({name, email, password: md5(password)});
        const newUser = await user.save();

        return newUser;
    }catch (e){
        //disparar el error
        console.log(e.message);
        throw new Error ('Error while save user')
    }
}

userService.getUsers = async function(query){
    try{
        const users = await User.find(query)
        console.log('users', users)
        return users.map(user => {
            let getUser = JSON.parse(JSON.stringify(user));
            delete getUser.password;
            return getUser;
        });

    }catch (e){
        console.log(e.message);
        throw new Error ('Error while Paginating Users')
    }
}

userService.getUser = async function({id}){
    try{
        const user = await User.findById(id);
        let savableUser = JSON.parse(JSON.stringify(user));
        delete savableUser.password;
        return savableUser;
    }catch (e){
        console.log(e.message);
        throw new Error ('Error while returning user');
    }
}

userService.updateUser = async function({id}, {name, email, password}){
    try{
        const user = await User.findById(id)
        const updateUser = await user.set({name, email, password: md5(password)});  //setear los valores
        await updateUser.save();
        return updateUser;
    }catch (e){
        console.log(e.message);
        throw new Error ('Error while returning user');
    }
}


module.exports = userService;