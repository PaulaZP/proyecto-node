const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const Playlist = mongoose.model('Playlist', PlaylistSchema);
module.exports = Playlist;