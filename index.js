'use strict';

require('dotenv').config();
const Discord = require('discord.js');
const discord = new Discord.Client();
const PREFIX = process.env.PREFIX;

//commands start here 
const addPlayer = require('./commands/newPlayer');
const startGame = require('./commands/start')
const deal = require('./commands/deal');
const bet = require('./commands/bets')
let currentPlayers = [];
let shoe;

discord.once('ready', () => {
    console.log('Proof of life!');
})

discord.login(process.env.BOT_TOKEN);

discord.on('message', async message => {
    console.log(message.content);
    if(message.content.startsWith(PREFIX)) {
        const args = message.content.slice(PREFIX.length).trim().split(' ');
        const command = args.shift().toLowerCase();
        if(command == 'join') {
            if(currentPlayers.length <= 5) {
                console.log(message.author);
                currentPlayers.push(await addPlayer(message.author));
                console.log('all players', currentPlayers);
                message.reply('joined!');
            } else  {
                message.reply('sorry, the table is full!');
            }
            message.channel.send('Waiting for !start <maxDecksInShoe>')
        }
        if(command == 'start') {
            shoe = startGame(args[0]);
            message.channel.send('Dealing cards...')
            let gameStart = deal(currentPlayers, shoe);
            console.log('gameStart', gameStart);
            currentPlayers = gameStart.currentPlayers;
            shoe = gameStart.shoe;
            console.log('my hand', currentPlayers[0].hand);
            message.channel.send('Here are your playing orders:') 
            let count = 1;           
            currentPlayers.forEach(player => {
                message.channel.send(`${player.name}, you are ${count}.`);
                count++;
            })
            message.channel.send('Place !bet <order> <bet>');
        }
        if(command == 'bet') {
            let order = args[0] - 1;
            if(currentPlayers[order].hand.bet == 0) {
                currentPlayers = bet(order, currentPlayers, args[1]);
                message.reply(`placed a $${args[1]} bet`);
            }
            message.channel.send('Did everyone bet? <y/n>')
        }
        if(command == 'y') {
            // begin round
        }
    }
})


// mongoose connection 
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGODB_URI, options);