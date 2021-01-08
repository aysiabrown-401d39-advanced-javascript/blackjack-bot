'use strict';
const Players = require('./players.schema');

async function getPlayer(id, name, flag) {
    let record;
    let exists = false;
    exists = await Players.exists({userid: id})
    console.log('after checking exists', exists);
    if(exists) {
        record = await Players.findOne({userid: id});
    } else {
        record = await addNewPlayer(id, name, flag);
    }
    return {record: record, new: false};
}

async function addNewPlayer(id, name, flag) {
    let newRecord = new Players({
        userid: id,
        name: name,
        flag: flag,
    })
    let save = await newRecord.save();
    return {record: save, new: true };
}

module.exports = getPlayer;