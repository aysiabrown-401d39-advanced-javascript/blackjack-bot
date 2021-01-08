'use strict';

class Player {
    constructor(userID, name, flag) {
        this.userID = userID;
        this.name = name;
        this.flag = flag;
        this.wins = 0;
        this.losses = 0;
        this.ties = 0;
        this.earnings = 0;
        this.bank = 500;
        this.hand = null;
    }
}

module.exports = Player;