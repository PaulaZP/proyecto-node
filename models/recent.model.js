const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecentSchema = mongoose.Schema({
    idUser: {
        type: Schema.Types.ObjectId,
        required:true
    },
    songs: [String],

}, {versionKey: false})

const RecentMusic = mongoose.model('Recent', RecentSchema);
module.exports = RecentMusic;