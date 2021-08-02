const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Este modelo nos permite visiaulizar como debemos de estructurar los datos que va a utilizar el usuario para poder guardarlos en la base de datos.
const FavoriteMusicSchema = mongoose.Schema({
    idUser: {
        type: Schema.Types.ObjectId,
        required:true
    },
    songs: [String], //Esto es un arreglo que almacena los id de las canciones

}, {versionKey: false});

const FavoriteMusic = mongoose.model('FavoriteMusic', FavoriteMusicSchema);
module.exports = FavoriteMusic;