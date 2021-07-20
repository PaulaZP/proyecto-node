const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    idUser:{
        type: Number,
        require: true
    },
    id:{
        type: Number,
        require: true
    },
    Songs:{
        type: String,
        require: true
    },
},{versionKey: false});

const playlist = mongoose.model('Playlist', playlistSchema)

module.exports = playlist;