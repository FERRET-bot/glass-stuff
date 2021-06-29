const Discord = require('discord.js'); // used for message embeds, etc
var fs = require('fs');

module.exports = {
    name: 'enumeratekeys',
    description: "Enumerate all of the keys",
    usage: "",
    cooldown: 10,
    aliases: ["getkeys"],
    async execute(message, args, bot, config){
        fs.readFile('../../../keys.txt', 'utf8', function(err, data) {
            if (err) throw err;
            var lines = data.split("\n")
            var ret = ""
            lines.forEach(line=>{
                splitLine = line.split(";")
                id = splitLine[0]
                key = splitLine[1]
                ret = ret + `<@${id.toString()}> : ${key.toString()}`
            })
        });
    }
 };