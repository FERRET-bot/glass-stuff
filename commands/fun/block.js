const Discord = require('discord.js'); // used for message embeds, etc

module.exports = {
    name: 'block',
    description: "Turn all characters into blocks",
    usage: "<text>",
    cooldown: 7,
    aliases: [],
    async execute(message, args, bot, config){
        if(!args || !args[0]) return message.reply("Please specify text to send!");
        var txt = args.join(" ");
        var split = txt.split("")
        var endstring = ""
        split.forEach(current=>{
            endstring = endstring+":regional_indicator_"+current.toString().toLowerCase()+": "

        })
        endstring = endstring.replace(/:regional_indicator_ : /g, " ");
        if(endstring.length >= 1018) return message.channel.send(new Discord.MessageAttachment(Buffer.from(endstring, 'utf-8'), Date.now().toString()))
        message.channel.send(`${endstring}`)
        message.channel.send(`rember that symbols dont work here`)
    }
};
