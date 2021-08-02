const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Este modelo nos permite visiaulizar como debemos de estructurar los datos que va a utilizar el usuario para poder guardarlos en la base de datos.
//En este caso tenemos el nombre que ingresa el usuario, el correo y una contraseña
const userSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
},{versionKey: false});

const User = mongoose.model('User', userSchema)

module.exports = User;