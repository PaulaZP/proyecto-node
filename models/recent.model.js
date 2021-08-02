const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Este modelo nos permite visiaulizar como debemos de estructurar los datos que va a utilizar el usuario para poder guardarlos en la base de datos.
//En este caso tenemos los id de las canciones los cuales se muestran por medio de un objeto
const RecentSchema = mongoose.Schema({
    idUser: {
        type: Schema.Types.ObjectId,
        required:true
    },
    idSong:{
        type: String,
        required:true
    }      
}, {versionKey: false})

const RecentMusic = mongoose.model('Recent', RecentSchema);
module.exports = RecentMusic;