const Discord = require('discord.js'); // used for message embeds, etc

module.exports = {
    name: 'uptime',
    description: "Display how long the bot has been running in DAY//HOUR//MIN//SEC format",
    usage: "",
    cooldown: 3,
    async execute(message, args, bot, config){
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        message.channel.send(uptime.toString())
    }
};