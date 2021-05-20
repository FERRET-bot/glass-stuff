const Discord = require('discord.js'); // used for message embeds, etc

module.exports = {
    name: 'addrole',
    description: "Add a role to a user",
    usage: "<user> <role>",
    cooldown: 5,
    aliases: ["addr"],
    async execute(message, args, bot, config){
        if(args.length <= 1) return message.reply("Please use the correct command format!");
        const usertoadd = message.mentions.members.first();
        const role = message.mentions.roles.first();
        if(!usertoadd || !role) return message.reply("Please use the correct command format!");
        usertoadd.roles.add(role).then(promise=>{
            message.reply("Added role "+role.name+" to "+usertoadd.user.username)
        })
    }
 };