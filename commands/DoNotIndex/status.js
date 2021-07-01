const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'status',
      description: "sets the status of the bot",
      usage: "<actvity>",
      cooldown: 4,
      aliases: [""],
      async execute(message, args, bot, config){
        if(!args || !args[0]) return message.reply("Please specify the activity!");

        client.user.setActivity(`?help || ${message.content}`, { type: "PLAYING" })
          
      }
 };