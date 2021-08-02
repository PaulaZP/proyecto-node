const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Este modelo nos permite visiaulizar como debemos de estructurar los datos que va a utilizar el usuario para poder guardarlos en la base de datos.
//En este caso tenemos el nombre de la playlist y otro arreglo el cual va almacenar los id de las canciones
const PlaylistSchema = mongoose.Schema({
    idUser: {
        type: Schema.Types.ObjectId,
        required:true
    },
    playlistName: {
        type: String,
        required:true
    },
    idSongs: [String],

}, {versionKey: false})

const playlist = mongoose.model('Playlist', PlaylistSchema);
module.exports = playlist;