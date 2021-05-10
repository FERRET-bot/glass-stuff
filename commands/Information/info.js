const Discord = require('discord.js');
var fs = require('fs');
const { version } = require('os');
module.exports = {
    name: "info",
    desc: "Shows info about the bot.",
    usage: "",
    cooldown: 5,
    execute: async (message, args, bot, config) => {
      message.channel.send("My prefixes are \""+config.prefixes+"\"")

      let info = new Discord.MessageEmbed
      info.setTitle('the current info about the bot')
      info.setThumbnail("https://www.bing.com/images/blob?bcid=RBE-Tm.CxroC5NvTZVNmjsTFKyOl.....88")
      info.setColor('#28ff00')
      info.setDescription('the info seen below is the newest info about the bot')
      info.addField('owners', "``"+config.devnames+"``")
      info.addField('prefixes', "``"+config.prefixes+"``")
      info.addField('verson', "``"+config.version+"``")

    message.channel.send(info)
    }}
