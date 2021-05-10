const Discord = require('discord.js'); // used for message embeds, etc

module.exports = {
    name: 'getformat',
    description: "Gets the command creation format",
    usage: "",
    async execute(message, args, bot, config){
        message.channel.send("[] = optional\n<> = required\n```js\n"+config.cmdformat+"```")
    }
};
