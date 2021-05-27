const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'userinfo',
      description: "gets the info of a user",
      usage: "[user]",
      cooldown: 5,
      aliases: [],
      async execute(message, args, bot, config){

        if (!message.mentions.users.first()){
            member = message.author
            
        }else{member = message.mentions.user.first()

      const embed = new MessageEmbed()
      .setTitle(`${member.displayName}'s Info`)
      .setThumbnail(member.user.displayAvatarURL({
          dynamic: true
      }))
      .addField('User', member, true)
      .addField('Discriminator', `\`#${member.user.discriminator}\``, true)
      .addField('ID', `\`${member.id}\``, true)
      .addField('Status', statuses[member.presence.status], true)
      .addField('Bot', `\`${member.user.bot}\``, true)
      .addField('Color Role', member.roles.color || '`None`', true)
      .addField('Highest Role', member.roles.highest, true)
      .addField('Joined server on', `\`${moment(member.joinedAt).format('MMM DD YYYY')}\``, true)
      .addField('Joined Discord on', `\`${moment(member.user.createdAt).format('MMM DD YYYY')}\``, true)
      .setFooter(message.member.displayName, message.author.displayAvatarURL({
          dynamic: true
      }))
      .setTimestamp()
      .setColor(member.displayHexColor);
  if (activities.length > 0) embed.setDescription(activities.join('\n'));
  if (customStatus) embed.spliceFields(0, 0, {
      name: 'Custom Status',
      value: customStatus
  });
  if (userFlags.length > 0) embed.addField('Badges', userFlags.map(flag => flags[flag]).join('\n'));
  message.channel.send(embed);
}
}};
