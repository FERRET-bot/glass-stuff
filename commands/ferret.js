const { MessageAttachment } = require('discord.js');
module.exports = {
    
    name: 'ferret',
    description: "this is a command for ferret",
    execute(message, Discord){
        if (!message.mentions.users.first()){
            target = message.author
        }
        else{
            target = message.mentions.users.first()
        }
    
        const attachment = new MessageAttachment('https://img.freepik.com/free-photo/cute-ferret-is-sleeping_369656-37.jpg?size=626&ext=jpg');
       
        message.delete()
    message.channel.send(`${target}, go the fuck to sleep!`, attachment)
    
    }
};
