const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'ban',
      description: "ban someone from the server",
      usage: "<name>",
      aliases: [],
      async execute(message, args, bot, config){
          
        if (!config.devs.includes(message.author.id.toString())||message.member.hasPermission("BAN_MEMBERS")){return message.reply("Only my owners can use this command")}
        const victim = message.mentions.users.first();



        message.guild.member(victim).ban().then(promise =>{
          message.channel.send(`${victim} has been banned from the server`)
        }).catch(err=>{message.reply(err)})
    
    
    
    
    
    }
 };