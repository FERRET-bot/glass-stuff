const Discord = require('discord.js');
var fs = require('fs');
module.exports = {
    name: "help",
    desc: "Shows this list.",
    usage: "<command>",
    cooldown: 5,
    execute: async (message, args, bot, config) => {
      let prefix = "!"
      message.channel.send("My prefix is \""+prefix+"\"")
      var ncomands = [];
      let embed = new Discord.MessageEmbed();
      embed.setTimestamp().setFooter(`Ferret`, bot.user.avatarURL)
      embed.setTimestamp();
      embed.setAuthor("Ferret Commands:")
      embed.setThumbnail(bot.user.avatarURL);
      embed.setColor("RANDOM")
      const commandFiles = fs.readdirSync("./commands");
      commandFiles.forEach((folder) => {
        var cnumber = 0;
        if ((folder == "DoNotIndex") && (!config.devs.includes(message.author.id))) return;
        var ccommands = []
        const cate = fs.readdirSync(__dirname + `/../${folder}`);
        ncomands += `\n**${folder}**:\n`
        cate.forEach((file) => {
          cnumber++;
          const command = require(__dirname + `/../${folder}/${file}`);
          ccommands += ` \`${command.name}\``
        })
        embed.addField(`${folder} (${cnumber})`, ccommands.slice(1).replace(/ /g, ", ") + ".")
      });
  
      if (!args[0]) return message.channel.send(embed)
  
      else {
        let hembed = new Discord.MessageEmbed()
        hembed.setColor("RANDOM")
        hembed.setThumbnail(bot.user.avatarURL)
        hembed.setTimestamp().setFooter(`Ferret`, bot.user.avatarURL)
        hembed.setTimestamp()
        hembed.setDescription("Ferret")
        var cmdnumb = 0
        commandFiles.forEach((folder) => {
          if ((folder == "DoNotIndex") && (!config.devs.includes(message.author.id))) return;
          const cate = fs.readdirSync(__dirname + `/../${folder}`);
          cate.forEach((file) => {
            const command = require(__dirname + `/../${folder}/${file}`);
            let usage = `\`${prefix}${command.name} ${command.usage}\``
            if (command.name == args[0].toLowerCase()) {
              cmdnumb++;
              hembed.setAuthor(args[0].toLowerCase())
              hembed.addField("**Command:**", `Name: ${command.name}\nDescription: ${command.desc}\nUsage: \`${usage}\``)
            }
          })
        })
        if (cmdnumb == 0) {
          hembed.setAuthor(`Ferret`)
          hembed.addField(`**__Couldn't Find the command ${args[0]}__**`, `Double check the command list and spelling! If you think there is a problem feel free to report it to NULL`)
        }
        message.channel.send(hembed)
      }
  
    }
  }