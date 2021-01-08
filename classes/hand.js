'use strict';

class Hand {
    constructor() {
        this.cards = [];
        this.count = 0;
        this.bet = 0;
    }

    totalHand() {
        this.cards.forEach(card => this.count += card.value)
    }
}

module.exports = Hand;