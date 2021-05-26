const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'tea',
      description: "how to make a cup of tea",
      usage: "",
      cooldown: 100,
      aliases: [],
      async execute(message, args, bot, config){
        let teaembed = new Discord.Messageembed

        var thingstoadd = ["milk", "suger", "cold water", "hot water", "lava water", "a tea bag", "ice"]
        var one =  Math.floor(thingstoadd.length * Math.random())
        var two =  Math.floor(thingstoadd.length * Math.random())
        var three =  Math.floor(thingstoadd.length * Math.random())
        var four =  Math.floor(thingstoadd.length * Math.random())
       
       
       
        teaembed.settitle(`how to make a cup of tea`)
        teaembed.setdescription(`first add ${one} into tha cup\n\n then add ${two} to the cup\n\n after stir for around 5 seconds\n\n when you have finnished stiring add ${three}, the content may look weird but trust the proces\n\n whemn you are done with all that finnaly add ${four}\n\n\n and there you go\n a nice cup of whatever that thing is \n\n :)`)
        teaembed.setColor('RANDOM')
        

        message.channel.send(teaembed)




          
      }
 };