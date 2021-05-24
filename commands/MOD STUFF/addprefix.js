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
        var def = undefined;
        servprefs.servers.forEach(s=>{
            if(s.serverid === message.guild.id.toString()) def = true;
        })
        if (!def){
<<<<<<< HEAD
            fs.readFile('app/servPrefs.json', function (err, returned) {
=======
            fs.readFile('/app/servPrefs.json', function (err, returned) {
>>>>>>> 4993038013bb36f6768ec752bc91bbd874746d5f
                returned = JSON.parse(returned);
                if (err) {
                    console.log('Error reading file:',err)
                    return
                }
                returned.servers.push({
                    "serverid": message.guild.id.toString(),
                    "prefixes": config.prefixes
                })
<<<<<<< HEAD
                fs.writeFile('app/servPrefs.json', JSON.stringify(returned), (err) => {
=======
                fs.writeFile('/app/servPrefs.json', JSON.stringify(returned), (err) => {
>>>>>>> 4993038013bb36f6768ec752bc91bbd874746d5f
                    if (err) console.log('Error writing file:', err);
                    message.reply("Created entry in database, please rerun command")
                })
            })
        }else{
            fs.readFile('/app/servPrefs.json', function (err, returned) {
                returned = JSON.parse(returned);
                if (err) {
                    console.log('Error reading file:',err)
                    return
                }
                returned.servers.prefixes.push(args[0].toString())
<<<<<<< HEAD
                fs.writeFile('app/servPrefs.json', JSON.stringify(returned), (err) => {
=======
                fs.writeFile('/app/servPrefs.json', JSON.stringify(returned), (err) => {
>>>>>>> 4993038013bb36f6768ec752bc91bbd874746d5f
                    if (err) console.log('Error writing file:', err)
                    message.reply("Done!")
                })
            })
        }
    }
};