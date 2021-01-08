'use strict';

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
        this.value = 0;
    }

    assignVal() {
        if(this.rank == 'Jack' || this.rank == 'Queen' || this.rank == 'King') {
            this.value = 10;
        } else if(this.rank == 'Ace') {
            this.value = 1 || 11;
        } else {
            this.value = parseInt(this.rank);
        }
    }
}


module.exports = Card;