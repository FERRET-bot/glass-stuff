// this is compressed so good luck trying to read this shit LMAOO
const Discord = require('discord.js');function fm(lsasarray){var s = "";lsasarray.forEach(item=>{s=s+"• "+item.toString()+"\n"});return s;}module.exports = {name: 'list',description: 'format your list',usage: "[list]",cooldown: 5,aliases: ['ls', 'formatlist'],
execute(message,args,client,config){
    args = args.join(" ").split(",");if(!args || !args[0]) return message.channel.send(fm(['Bacon','Milk','Eggs']));message.channel.send(fm(args))
}}