const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'nick',
    description: "this is a command thats changes your nickname!",
    execute(message, args, Discord){
        
        if (!message.mentions.users.first()){
            target = message.author
        }
        else{
            if (message.member.hasPermission("MANAGE_NICKNAMES")){
                target = message.mentions.users.first()
                args.shift()
                }
                else{
                 message.channel.send("You lack persmissions to use this command")
                 return 0
                }
           
        }
        if (!args.length) {
			message.channel.send(`You didn't provide any arguments, ${message.author}!`)
            return 0
        }
      
        const member = message.guild.members.cache.get(target.id)

        const nickname = args.join(' ')

       
           member.setNickname(nickname).then(() => {
            message.reply('nickname changed');
        })
        .catch(err => {
            message.reply('i was unable to change the nickname of that user');
        })

    }
};
