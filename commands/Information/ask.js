const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'ask',
      description: `ask the devs a question`,
      usage: "<question>",
      cooldown: 120,
      aliases: ["ask"],
      async execute(message, args, bot, config){
        const asker = message.author
        const username = message.author.username
        message.channel.send(`${asker} your question has been asked`);
        
        const question = args.join().replace(/,/g, " ");


            const askembed = new Discord.MessageEmbed()
            .setTitle(`${username} has asked (${asker})`)
            .setDescription(question)
            var channels = bot.channels
            var cache = channels.cache
            var getter = cache.get("842450641769988173")
            getter.send(askembed)









        }

    }