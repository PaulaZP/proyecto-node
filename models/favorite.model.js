const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    idUser:{
        type: Number,
        require: true
    },
    Songs:{
        type: [String],
        require: true
    },
},{versionKey: false});

const Favorite = mongoose.model('Favorite', favoriteSchema)

module.exports = Favorite;