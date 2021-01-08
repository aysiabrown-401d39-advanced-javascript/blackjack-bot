'use strict';

class Shoe {
    constructor(){
        this.shoe = [];
    }

    addDeck(deck) {
        deck.deck.forEach(card => this.shoe.push(card));
    }
}


module.exports = Shoe;