'use strict';

const mongoose = require('mongoose');

const players = new mongoose.Schema({
    userid: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    flag: {type: String, required: true},
    wins: {type: Number, required: true, default: 0},
    losses: {type: Number, required: true, default: 0},
    ties: {type: Number, required: true, default: 0},
    bank: {type: Number, required: true, default: 500}
})

const playersModel = mongoose.model('players', players);

module.exports = playersModel;