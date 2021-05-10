const Discord = require('discord.js');
var fs = require('fs');
const { version } = require('os');
const { config } = require('process');
module.exports = {
    name: "info",
    desc: "Shows info about the bot.",
    usage: "info",
    cooldown: 5,
    execute: async (message, args, bot) => {
      let prefix = "!"
      message.channel.send("My prefix is \""+prefix+"\"")

      let info = new Discord.MessageEmbed
      info.setTitle('the current info about the bot')
      info.setThumbnail("https://www.bing.com/images/blob?bcid=RBE-Tm.CxroC5NvTZVNmjsTFKyOl.....88")
      info.setColor('#28ff00')
      info.setDescription('the info seen below is the newest info about the bot')
      info.addField(`verson`, `1.3.0` )
    
    
    message.channel.send(info)
    }}
