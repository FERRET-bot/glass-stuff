const Discord = require('discord.js'); // used for message embeds, etc
var Dictionary = require("oxford-dictionary");
  
var config = {
  app_id : "78aca4e2",
  app_key : "eea23c8621b80e2e1b085aa742414369",
  source_lang : "en-us"
};

var dict = new Dictionary(config);


module.exports = {
    name: 'define',
    description: "Define something",
    usage: "<word>",
    cooldown: 5,
    aliases: ["whatis"],
    async execute(message, args, bot, config){
        if(!args || !args[0]) return message.reply("invalid form")
        if(args[1]) return message.reply("can only process one definition at a time")
        var lookup = dict.find(args[0].toString());
 
        lookup.then(function(res) {
            // stringify JSON object to see full structure in console log
            res = JSON.stringify(res,null,4)
            var tops = "PLACEHOLDER"
            res.results.lexicalEntries.entries.senses.definitions.forEach(e=>{
                tops = tops + ", "+e.toString()
            })
            var mb = new Discord.MessageEmbed()
            .setTitle(args[0])
            .setDescription(`${tops}\n\n${res.results.lexicalEntries.entries.senses.examples}`)
            message.channel.send(mb)
        },
        function(err) {
            message.reply("Sorry but an error has occured.")
        });
    }
};