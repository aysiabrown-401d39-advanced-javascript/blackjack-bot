'use strict';

const Card = require('../classes/card');
const Hand = require('../classes/hand');
const Deck = require('../classes/deck');
const Shoe = require('../classes/shoe');
const Player = require('../classes/player');
const getPlayer = require('../database/join');


async function newPlayer(author) {
    console.log(author.id, author.username, author.discriminator);
    let player = await getPlayer(author.id, author.username, author.discriminator);
    let addedPlayer = new Player(player.record.userid, player.record.name, player.record.flag);
    if(!player.new) {
        addedPlayer.wins = player.record.wins;
        addedPlayer.losses = player.record.losses;
        addedPlayer.ties = player.record.ties;
        addedPlayer.bank = player.record.bank;
    }
    console.log('addedPlayer ', addedPlayer);
    return addedPlayer;
}

module.exports = newPlayer;