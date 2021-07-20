const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recentSchema = new Schema({
    idUser:{
        type: Number,
        require: true
    },
    id:{
        type: Number,
        require: true
    },
    Songs:{
        type: [String],
        require: true
    },
},{versionKey: false});

const Recent = mongoose.model('Recent', recentSchema)

module.exports = Recent;