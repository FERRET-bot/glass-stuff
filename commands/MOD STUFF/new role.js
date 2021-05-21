const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'newrole',
      description: "makes a new role, [there must be a / between the name/reason]",
      usage: "<name>/<reason>",
      cooldown: 30,
      aliases: ["newrole"],
      async execute(message, args, bot, config){

        if (message.member.hasPermission("MANAGE_ROLES")){

            const arr = message.content.split('/');


         // Create a new role with data and a reason
message.guild.roles.create({
    data: {
      name: arr[1],
      color: "RANDOM",
    },
    reason: arr[2],
  })
    .catch(console.error);

    message.channel.send('a new role has been created :^]')

          
      }}
 };