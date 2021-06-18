const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'newrole',
      description: "makes a new role, [there must be a / between the name/reason]",
      usage: "<name>/<reason>",
      cooldown: 30,
      aliases: ["newrole"],
      async execute(message, args, bot, config){

        var passthru = false;
        if(config.devs.includes(message.author.id.toString())) passthru = true
        if(message.member.hasPermission("MANAGE_ROLES")) passthru = true
        if(!args || !args[0]) return message.reply("Arguments are required for this command")
        

        if(!passthru) return
        
            var content = message.content.slice()
            const arr = content.split('/');


         // Create a new role with data and a reason
message.guild.roles.create({
    data: {
      name: arr[0],
      color: "RANDOM",
    },
    reason: arr[1],
  })
    .catch(console.error);

    message.channel.send('a new role has been created :^]')

          
      }
 };