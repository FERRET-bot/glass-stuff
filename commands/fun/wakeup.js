const { MessageAttachment } = require('discord.js');
const Discord = require('discord.js');
module.exports = {
    
    name: 'wakeup',
    description: "this is a command for waking up",
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
    
        const attachment = new MessageAttachment('https://i.redd.it/lkgmfuj6tvr21.jpg');
       
        message.delete()
    message.channel.send(`${target}, please wake up or this is the last dream you'll ever see :)`, attachment)
    
    }
};
