module.exports = {
    name: 'nick',
    description: "this is a command thats changes your nickname!",
    execute(message, args, Discord){
   
    client.setNickname({nick: message.content.replace('nick ', '')})
    
        message.channel.send('nickname has been changed!');
    }
};