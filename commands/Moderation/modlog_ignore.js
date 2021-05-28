const Discord = require('discord.js'); // used for message embeds, etc
const fs = require('fs')

module.exports = {
    name: 'modlogignore',
    description: "Set a channel to be ignored by the global modlog",
    usage: "<channel id>",
    cooldown: 15,
    async execute(message, args, bot, config){
        if(!message.member.guild.me.hasPermission('ADMINISTRATOR')) return message.reply("You do not have the sufficient perms, ``Administrator``, to perform this task.")
        if(!args || !args[0]) return message.reply("Please specify a channel ID.")
        if(!bot.channels.cache.get(args[0])) return message.reply("This channel does not exist.")
        fs.readFile("./modlog_ignore.txt", function (err, data) {
            if (err) message.reply("An error occured!");
            if(data.toString().indexOf(message.channel.id.toString()) >= 0){
                return message.reply("This channel ID already exists in the modlog ignore textfile!")
            }
            fs.appendFile('./modlog_ignore.txt', args[0].toString()+"\n", function (err) {
                if (err) message.reply("An error occured!")
                message.reply("Success!")
            });
        });
    }
};