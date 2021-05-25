const Discord = require('discord.js');
module.exports = {
    name: 'grammer',
    description: "this is a grammer command",
    usage: "",
    cooldown: 10,
    aliases: [],
    execute(message, args, bot){
    const grammerembed = new Discord.MessageEmbed()
        grammerembed.setColor('#FFA500')
        grammerembed.setTitle('check your grammer you litle carrot')
        grammerembed.setDescription('you beter change you grammer before i spenk you')
        grammerembed.setImage('https://polecat.me/ferrets/ab8vzj27jgq11.jpg');

        
        message.channel.send(grammerembed)
    }
};
