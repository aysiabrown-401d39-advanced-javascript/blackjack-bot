'use strict';

const Card = require('../classes/card');
const Hand = require('../classes/hand');
const Deck = require('../classes/deck');
const Shoe = require('../classes/shoe');
const Player = require('../classes/player');

function startGame(maxShoe) {
    let shoe = new Shoe();
    for(let i = 0; i < maxShoe; i++) {
        let current = new Deck();
        current.assembleDeck();
        current.shuffleDeck();
        current.deck.forEach(card => card.assignVal());
        shoe.addDeck(current);
    }
    console.log(shoe.shoe);
    return shoe.shoe;
}

module.exports = startGame;