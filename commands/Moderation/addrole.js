const Discord = require('discord.js'); // used for message embeds, etc

module.exports = {
    name: 'addrole',
    description: "Add a role to a user",
    usage: "<user {@MENTION / ID}> <role {@MENTION / ID}>",
    cooldown: 5,
    aliases: ["addr"],
    async execute(message, args, bot, config){
        if(args.length <= 1) return message.reply("Please use the correct command format!");
        var usertoadd = message.mentions.members.first();
        var role = message.mentions.roles.first();
        if(!usertoadd){
            usertoadd = message.guild.members.cache.get(args[0].toString())
            if(!usertoadd){
                return message.reply("Could not find a user via @mention or {ID}, are you using the correct ``cmd`` format?")
            }
        }
        if(!role){
            role = message.guild.roles.cache.get(args[1].toString())
            if(!role){
                return message.reply("Could not find a role via @mention or {ID}, are you using the correct ``cmd`` format?")
            }
        }
        usertoadd.roles.add(role).then(promise=>{
            message.reply("Added role "+role.name+" to "+usertoadd.user.username)
        })
    }
 };