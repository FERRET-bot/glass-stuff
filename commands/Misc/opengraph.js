const Discord = require('discord.js'); // used for message embeds, etc
const fetch = require("node-fetch")

module.exports = {
    name: 'piglatin',
    description: "Translate to pig latin",
    usage: "",
    cooldown: 5,
    async execute(message, args, bot, config){
        fetch("https://opengraph-io.p.rapidapi.com/api/1.1/sites?url=https%3A%2F%2Fdiscord.com&accept_lang=en-US%2Cen%3Bq%3D0.9&max_cache_age=432000000", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "23876d07-ffa6-49ea-bcad-5d77089821e7",
                "x-rapidapi-host": "opengraph-io.p.rapidapi.com"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
    }
};