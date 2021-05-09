const Discord = require('discord.js');
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		const dt = new Date();
        const msg = new Discord.MessageEmbed()
        .setTitle("Bot Started")
        .setDescription("Started on "+dt.toString())
        var channels = client.channels
        var cache = channels.cache
        var getter = cache.get("841008670125064223")
        getter.send(msg)
	},
};