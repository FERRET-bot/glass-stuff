const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'clear',
      description: "clear a set number of messages",
      usage: "<number>",
      async execute(message, args, bot, config){
          
        if (!config.devs.includes(message.author.id.toString())){return message.reply("Only my owners can use this command")}
        const value = args[0]



        if (value >= "100"){return message.channel.send("Value is to large");}

        message.delete().then(promise => {message.channel.send("done!")})





    
    
    
    
    
    }
 };