const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'presence',
      description: `sets the presence of the bot (seperate the type and activity with a /)  \n the type of activity will always be ${config.type}`,
      usage: "<activity>",
      cooldown: 15,
      async execute(message, args, bot, config){
        var txt = args.join(" ");
        var split = txt.split("")

        bot.user.setActivity(split, {
            type: config.type,
          });
          
      }
 };