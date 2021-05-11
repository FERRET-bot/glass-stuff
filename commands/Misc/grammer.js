const Discord = require('discord.js');
module.exports = {
    name: 'grammer',
    description: "this is a grammer command",
    usage: "",
    cooldown: 10,
    execute(message, args, bot){
    const grammerembed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('check your grammer you litle carrot')
        .setDescription('you beter change you grammer before i spenk you')
        .setImage('https://cdn.discordapp.com/attachments/838500668696166471/838704894340628530/ferret_god.jpg');

        
        message.channel.send(grammerembed)
    }

};
