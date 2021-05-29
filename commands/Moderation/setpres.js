const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'presence',
      description: `sets the presence of the bot(thw type will be PLAYING)`,
      usage: "<activity>",
      aliases: ["pre"],
      cooldown: 15,
      async execute(message, args, bot, config){
          var status = message.shift()


          bot.user.setActivity(status, {
            type: "PLAYING",
          });


      }

 }; 
