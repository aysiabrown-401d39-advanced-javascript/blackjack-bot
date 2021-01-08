'use strict';

const Card = require('../classes/card');
const Hand = require('../classes/hand');
const Deck = require('../classes/deck');
const Shoe = require('../classes/shoe');
const Player = require('../classes/player');

function bet(index, currentPlayer, bet) {
    currentPlayer[index].bank -= bet;
    currentPlayer[index].hand.bet = bet;
    return currentPlayer;
}

module.exports = bet;