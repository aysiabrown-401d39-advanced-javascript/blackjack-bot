'use strict';

const Card = require('../classes/card');
const Hand = require('../classes/hand');
const Deck = require('../classes/deck');
const Shoe = require('../classes/shoe');
const Player = require('../classes/player');


// will take an array of current Players from bot
function deal(currentPlayers, shoe) {
    currentPlayers.forEach(player => {
        player.hand = new Hand();
        player.hand.cards.push(shoe.shift());
    })
    currentPlayers.forEach(player => {
        player.hand.cards.push(shoe.shift());
        player.hand.totalHand();
    })
    console.log('hand', currentPlayers[0].hand);
    return { currentPlayers: currentPlayers, shoe: shoe };
}

module.exports = deal;