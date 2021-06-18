const Discord = require('discord.js'); // used for message embeds, etc

module.exports = {
    name: 'getformat',
    description: "Gets the command creation format",
    usage: "",
    aliases: ["format"],
    cooldown: 10,
    async execute(message, args, bot, config){
        if(!config.devs.includes(message.author.id.toString())) return message.reply("Only my owners can use this command")
        message.channel.send("[] = optional\n<> = required\n```js\n"+config.cmdformat+"```")
    }
};
