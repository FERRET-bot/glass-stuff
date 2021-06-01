const Discord = require('discord.js');function fm(lsasarray){var s = "";lsasarray.forEach(item=>{s=s+"• "+item.toString()});return s;}module.exports = {name: 'list',description: 'format your list',usage: "[list]",cooldown: 5,aliases: ['ls', 'formatlist'],
execute(message,args,client,config){
    if(!args || !args[0]) return message.channel.send(fm(['Bacon','Milk','Eggs']))
    message.channel.send(fm(args))
}}