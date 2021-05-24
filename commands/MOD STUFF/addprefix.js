const Discord = require('discord.js'); // used for message embeds, etc
const { json } = require('express');
const fs = require('fs');
function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
}
module.exports = {
    name: 'addprefix',
    description: "Add a server prefix",
    usage: "<prefix>",
    cooldown: 5,
    async execute(message, args, bot, config){
        var servprefs = require("../../servPrefs.json");
        if (message.guild.ownerID !== message.author.id && !config.devs.includes(message.author.id.toString())) return message.channel.send(`You must be the owner of this server to use this command.`);
        if (!servprefs.servers[message.guild.id.toString()]){
            fs.readFile('../../servPrefs.json', function (err, returned) {
                returned = json.parse(returned);
                if (err) {
                    console.log('Error reading file:',err)
                    return
                }
                returned.servers.push({
                    "serverid": message.guild.id.toString(),
                    "prefixes": config.prefixes
                })
                fs.writeFile('../../servPrefs.json', JSON.stringify(returned), (err) => {
                    if (err) console.log('Error writing file:', err)
                })
            })
        }else{
            fs.readFile('../../servPrefs.json', function (err, returned) {
                returned = json.parse(returned);
                if (err) {
                    console.log('Error reading file:',err)
                    return
                }
                returned.servers.prefixes.push(args[0].toString())
                fs.writeFile('../../servPrefs.json', JSON.stringify(returned), (err) => {
                    if (err) console.log('Error writing file:', err)
                })
            })
        }
    }
};