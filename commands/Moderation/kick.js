const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'kick',
      description: "kick someone from the server",
      usage: "<name>",
      cooldown: 10,
      aliases: ["kick"],
      async execute(message, args, bot, config){

        var passthru = false;
        if(config.devs.includes(message.author.id.toString())) passthru = true
        if(message.member.hasPermission("KICK_MEMBERS")) passthru = true
        if(!args || !args[0]) return message.reply("Arguments are required for this command")
        

        if(!passthru) return
        const victim = message.mentions.users.first();
        if(victim.id == message.author.id) return message.reply("You can't kick yourself!")
        message.guild.member(victim).kick().then(promise =>{
          message.channel.send(`${victim} has been kicked from the server`)
        })
    
    }
 };