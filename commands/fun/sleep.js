const { MessageAttachment } = require('discord.js');
const Discord = require('discord.js');
module.exports = {
    
    name: 'sleep',
    description: "this is a command for sleep",
    usage: "[user] <name> / []",
    cooldown: 15,
    aliases: [],
    execute(message, args, client){
        if (!message.mentions.users.first()){
            target = message.author
        }
        else{
            target = message.mentions.users.first()
        }
    
        const attachment = new MessageAttachment('https://img.freepik.com/free-photo/cute-ferret-is-sleeping_369656-37.jpg?size=626&ext=jpg');
       
        message.delete()
    message.channel.send(`${target}, please go to sleep or i will make you! :)`, attachment)
    
    }
};
