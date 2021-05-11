const fetch = require('node-fetch');
const Discord = require('discord.js');
module.exports = {
    
    name: 'ferret',
    description: "this is a command for random ferret",
    usage: "",
    cooldown: 10,
    execute(message, args, bot){
        fetch("https://polecat.me/api/ferret")
        .then(function (response) {
          return response.json()
        })
        .then(function (rere) {
          const ferretembed = new Discord.MessageEmbed()
          .setTitle("Random Ferret")
          .setURL(rere.url)
          .setImage(rere.url)
          message.channel.send(ferretembed)
        })
        .catch(function (error) {
          console.log(error)
          message.channel.send("An error has occured whilst trying to retreive a random ferret.")
        });
    
    }
};
