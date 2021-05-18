const Discord = require('discord.js'); // used for message embeds, etc

module.exports = {
    name: 'gif',
    description: "Get a random gif",
    usage: "[SearchQuery]",
    aliases: ['giphy'],
    cooldown: 3,
    async execute(message, args, bot, config){
        if (args.length >= 1){
            const giphy = require("giphy-api")(config.giphykey) // config.giphykey
            giphy.random({
                tag: args.join(" ").toString(),
                rating: 'g',
                fmt: 'json'
            }).then(res => {
                message.channel.send(res.data.url.toString())
            })
        }else{
            const giphy = require("giphy-api")(config.giphykey) // config.giphykey
            giphy.random({
                tag: 'ferret ',
                rating: 'g',
                fmt: 'json'
            }).then(res => {
                message.channel.send(res.data.url.toString())
            })
        }
    }
 };
  