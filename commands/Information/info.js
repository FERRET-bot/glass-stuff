const Discord = require('discord.js');
var fs = require('fs');
const { version } = require('os');
module.exports = {
    name: "info",
    desc: "Shows info about the bot.",
    usage: "",
    aliases: [],
    cooldown: 5,
    execute: async (message, args, bot, config) => {

      message.channel.send("My prefixes are \""+config.prefixes+"\"")

      let info = new Discord.MessageEmbed
      info.setTitle('the current info about the bot')
      info.setThumbnail("https://www.bing.com/images/blob?bcid=RBE-Tm.CxroC5NvTZVNmjsTFKyOl.....88")
      info.setColor('#28ff00')
      info.setDescription('the info seen below is the newest info about the bot \n\n update log,'+config.updatelog)
      info.addField('owners', "``"+config.devnames+"``")
      info.addField('prefixes', "``"+config.prefixes+"``")
      info.addField('version', "``"+config.version+"``")
      info.addField('contact (email)', "``jaelyn@jaedev.net``")
    
      let help = new client.disbut.MessageButton()
      .setStyle('url')
      .setURL('https://discord.gg/U8ser55KqD') 
      .setLabel('My First URL Button!');
  

    message.channel.send(info, help)

    }}
