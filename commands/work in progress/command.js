const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'join',
      description: "join the VC the user is in",
      usage: "",
      cooldown: 1,
      aliases: ["join"],
      async execute(message, args, bot, config){

        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();
        } else {
          message.reply('You need to join a voice channel first!');
        }
      }
 };