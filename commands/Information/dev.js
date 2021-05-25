const Discord = require('discord.js'); // used for message embeds, etc

module.exports = {
  name: 'dev',
  description: `ask the devs a question/give feedback!`,
  usage: "<question/feedback>",
  cooldown: 120,
  async execute(message, args, bot, config){
    const asker = message.author
    const username = message.author.username
    var nowtime_t = Date.now();
    var nowtime_d = new Date();
    message.channel.send(`${asker} your message has been sent to the devs, thank you!!`);
    
    const question = args.join().replace(/,/g, " ");


    const askembed = new Discord.MessageEmbed()
    .setTitle(`${username}  (${asker}) - ${nowtime_d.toString()}`)
    .setDescription(question)
    .setColor([219, 29, 73])
    var channels = bot.channels
    var cache = channels.cache
    var getter = cache.get("842450641769988173")
    getter.send(askembed)
    }
}