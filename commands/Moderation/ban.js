const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'ban',
      description: "ban someone from the server",
      usage: "<name>",
      cooldown: 10,
      aliases: ["ban"],
      async execute(message, args, bot, config){
        var passthru = false;
        if(config.devs.includes(message.author.id.toString())) passthru = true
        if(message.member.hasPermission("BAN_MEMBERS")) passthru = true
        if(!args || !args[0]) return message.reply("Arguments are required for this command")
        
        const victim = message.mentions.users.first();

        if(!passthru) return
        if(victim.id == message.author.id) return message.reply("You can't ban yourself!")
        message.guild.member(victim).ban().then(promise =>{
          message.channel.send(`${victim} has been banned from the server`)
        }).catch(err=>{message.reply(err)})
    
    
    }
 };