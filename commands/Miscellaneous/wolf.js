const Discord = require('discord.js'); // used for message embeds, etc
const wajs = require('wajs');
var waAppId = "PXKTUY-Q5HQGYWXYK"
var waClient = new wajs(waAppId)


module.exports = {
    name: 'express',
    description: "Use WOLFRAM||ALPHA",
    usage: "<expression>",
    cooldown: 5,
    aliases: ["define"],
    async execute(message, args, bot, config){
        if(!args || !args[0]) return message.reply("invalid form")
        var queryString = args.join(" ")
        var queryOptions = {
            format: 'image',
            units: 'metric'
        }
        waClient.query(queryString, queryOptions)
        .then(function(resp) {
            resp = JSON.parse(resp.toJson());
            var embd = new Discord.MessageEmbed()
            .setImage(resp.pod[0].subpod[0].img[0].src)
            message.channel.send(embd);
        })
        .catch(function(err) {
            message.reply("There was an error fetching your query:\n"+err.toString())
        })
    }
};