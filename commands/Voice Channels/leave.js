const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'leave',
      description: "join the VC the user is in",
      usage: "",
      cooldown: 1,
      aliases: ["leave"],
      async execute(message, args, bot, config){

        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.leave();
        } else {
          message.reply('You need to join a voice channel first!');
        }
    }
 };