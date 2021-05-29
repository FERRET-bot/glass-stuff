const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'presence',
      description: `sets the presence of the bot(the type will be WATCHING)`,
      usage: "<activity>",
      aliases: ["pre"],
      cooldown: 15,
      async execute(message, args, client, config){

          client.user.setActivity(message.shift(), {
            type: "WATCHING",
          }).then(message.channel.send(`the status has been changed`))


      }

 }; 
