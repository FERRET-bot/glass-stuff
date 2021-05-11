const Discord = require('discord.js'); // used for message embeds, etc

module.exports = {
    name: 'gif',
    description: "Get a random gif",
    usage: "",
    cooldown: 15,
    async execute(message, args, bot, config){
        const giphy = require("giphy-api")(config.giphykey) // config.giphykey
        giphy.random({
            tag: 'ferret',
            rating: 'pg-13',
            fmt: 'json'
        }, function (err, res) {
            const embed = new Discord.MessageEmbed()
            .setTitle("Random giphy gif")
            .setImage(res.url.toString())
        });
    }
 };