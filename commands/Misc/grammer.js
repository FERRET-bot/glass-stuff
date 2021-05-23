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
        grammerembed.setImage('https://cdn.discordapp.com/attachments/838500668696166471/838704894340628530/ferret_god.jpg');

        
        message.channel.send(grammerembed)
    }

};
