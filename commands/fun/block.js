const Discord = require('discord.js'); // used for message embeds, etc

module.exports = {
    name: 'annoy',
    description: "Turn all characters into spoilers (may make your friends hate you)",
    usage: "<text>",
    cooldown: 7,
    aliases: ["spoilers"],
    async execute(message, args, bot, config){
        if(!args || !args[0]) return message.reply("Please specify text to send!");
        var txt = args.join(" ");
        var split = txt.split("")
        var endstring = ""
        split.forEach(current=>{
            endstring = endstring+":regional_indicator_"+current.toString()+":"
        })
        if(endstring.length >= 1018) return message.channel.send(new Discord.MessageAttachment(Buffer.from(endstring, 'utf-8'), Date.now().toString()))
        message.channel.send(`\`\`${endstring}\`\``)
    }
};