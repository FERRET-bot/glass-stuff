const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'ban',
      description: "ban someone from the server",
      usage: "<name>",
      aliases: [],
      async execute(message, args, bot, config){
        var passthru = false;
        if(config.devs.includes(message.author.id.toString())) passthru = true
        if(message.member.hasPermission("BAN_MEMBERS")) passthru = true
        
        const victim = message.mentions.users.first();

        if(!passthru) return

        message.guild.member(victim).ban().then(promise =>{
          message.channel.send(`${victim} has been banned from the server`)
        }).catch(err=>{message.reply(err)})

         
    
    
    
    
    }
 };