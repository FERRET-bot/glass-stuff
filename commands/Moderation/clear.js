const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'clear',
      description: "clear a set number of messages",
      usage: "<number>",
      cooldown: 5,
      aliases: ['purge'],
      async execute(message, args, bot, config){
        
        var passthru = false;
        if(config.devs.includes(message.author.id.toString())) passthru = true
        if(message.member.hasPermission("BAN_MEMBERS")) passthru = true
        

        if(!passthru) return
        const value = args[0]

        if (value >= 100){return message.channel.send(`Value is to large, value = ${value} `);}
        message.delete()
        message.channel.bulkDelete(value).then(promise => {message.channel.send("done!")})





    
    
    
    
    
    }
 };