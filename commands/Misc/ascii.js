const Discord = require('discord.js'); // used for message embeds, etc
const fs = require('fs')

module.exports = {
    name: 'videotoascii',
    description: "Converts video attachment to ascii",
    usage: "<video as an attachment>",
    async execute(message, args, bot, config){
        var asciify = require('asciify-image');
 
        var options = {
            fit:    'box',
            width:  200,
            height: 100
        }
        asciify(message.attachments.get("url"), options)
        .then(function (asciified) {
            message.channel.send(asciified).then(promise =>{
                message.channel.send("Done")
            })
        })
        .catch(function (err) {
            console.error(err);
        });
    }
};