const Discord = require('discord.js'); // used for message embeds, etc

module.exports = {
    name: 'scrape',
    description: "Scrape a web page for information",
    usage: "<webpage> <search-for string>",
    cooldown: 5,
    aliases: ["webscrape"],
    async execute(message, args, bot, config){
        if(!args || !args[0]) return message.reply("This command needs arguments")
        message.reply("Working on it!")
        var webpage = args[0]
        args.shift()
        var keeptrack = args.join(" ")
        rp(webpage)
        .then(function(html){
            var matchcase = html.find(keeptrack)
            if(!matchcase) return message.reply("Could not find anything for that match case")
            return message.reply(matchcase)
        })
        .catch(function(err){
            return message.reply("Web page not found!")
        });
    }
};