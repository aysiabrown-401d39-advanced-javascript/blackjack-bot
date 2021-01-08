const Card = require("./card");

class Deck {
    constructor() {
        this.deck = [];
    }

    assembleDeck() {
        let ranks = [2,3,4,5,6,7,8,9,10,'Jack','Queen', 'King','Ace'];
        let suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
        for(let i = 0; i < ranks.length; i++) {
            for(let j = 0; j < suits.length; j++) {
                let card = new Card(suits[j], ranks[i]);
                this.deck.push(card)
            }
        }
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }
}

module.exports = Deck;