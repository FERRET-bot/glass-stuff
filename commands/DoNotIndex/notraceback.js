const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'notraceback',
      description: "Leaves no trace of the bot for any messages to come",
      usage: "",
      cooldown: 5,
      aliases: ["ntb"],
      async execute(message, args, bot, config){
          bot.notracebackmode = !bot.notracebackmode;
      }
 };