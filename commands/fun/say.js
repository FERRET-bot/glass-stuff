const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'say',
      description: "repeats the message",
      usage: "<message>",
      cooldown: 5,
      aliases: [],
      async execute(message, args, bot, config){
  
    let sentence = msg.content.split(" ");
    
    sentence.shift();

    sentence = sentence.join(" ");

    message.channel.send(sentence);

}};