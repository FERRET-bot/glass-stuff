const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'resetdata',
      description: "resets all data (not really)",
      usage: "<YES / NO>",
      cooldown: 10,
      aliases: [""],
      async execute(message, args, bot, config){

        let filter = m => m.author.id === message.author.id
    message.channel.send(`Are you sure to delete all data? \`YES\` / \`NO\``).then(() => {
      message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
            message.channel.send(`**LMAO** dis you think this would work?`)
          } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
            message.channel.send(`Terminated`)
          } else {
            message.channel.send(`Terminated: Invalid Response`)
          }
        })
        .catch(collected => {
            message.channel.send('Timeout');
        });
    })
          
      }
 };