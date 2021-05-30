const Discord = require('discord.js'); // used for message embeds, etc
const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI('PXKTUY-Q5HQGYWXYK');


module.exports = {
    name: 'wolfram',
    description: "Use WOLFRAM||ALPHA",
    usage: "<word(s)>",
    cooldown: 5,
    aliases: ["define"],
    async execute(message, args, bot, config){
        if(!args || !args[0]) return message.reply("invalid form")
        waApi.getFull(args.join(' ')).then(console.log).catch(console.error);
    }
};