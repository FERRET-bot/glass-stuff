const Discord = require('discord.js');
module.exports = {
	name: 'messageDelete',
	once: false,
	execute(client,msg) {
        var fchn = msg.guild.channels.cache.find(channel => channel.name.toLowerCase() === 'glass-logs');
        if(fchn){
            const dt = new Date();
            const msg = new Discord.MessageEmbed()
            .setColor([219, 29, 73])
            .setTitle("Bot detected a new deleted message!")
            .setDescription(msg.content)
            fchn.send(msg);
        }
	},
};