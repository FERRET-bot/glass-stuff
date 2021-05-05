module.exports = {
    name: 'nick',
    description: "this is a command thats changes your nickname!",
    execute(message, args, Discord){
        if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`)
        }
        if (!message.mentions.users.first()){
            target = message.author
        }
        else{
            target = message.mentions.users.first()
            args.shift()
        }
        
        const member = message.guild.members.cache.get(target.id)

        const nickname = args.join(' ')


        member.setNickname(nickname)
    
    message.reply("nickname changed");
    }
};
