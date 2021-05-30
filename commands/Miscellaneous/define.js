const Discord = require('discord.js'); // used for message embeds, etc
const fetch = require('node-fetch')

module.exports = {
    name: 'define',
    description: "Define something",
    usage: "<word>",
    cooldown: 5,
    aliases: ["whatis"],
    async execute(message, args, bot, config){
        if(!args || !args[0]) return message.reply("invalid form")
        if(args[1]) return message.reply("can only process one definition at a time")
        fetch("https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+arg[0]+"?key=79f8bbe7-4088-4a17-83c4-22fc1dede66e").then(meta=>{
            meta = meta.json();
            var mdb = new Discord.MessageEmbed()
            .setTitle(meta.hwi.hw.replace("*","-"))
            .setDescription("Stems:\n"+meta.meta.stems+"\n\n"+meta.hwi.fl+"\n\n"+meta.shortdef)
        })
    }
};