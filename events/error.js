const Discord = require('discord.js');
module.exports = {
	name: 'error',
	once: true,
	execute(client,errmsg) {
		const dt = new Date();
        const msg = new Discord.MessageEmbed()
        .setTitle("Bot encountered a fatal error")
        .setDescription(errmsg.toString())
        var channels = client.channels
        var cache = channels.cache
        var getter = cache.get("841008670125064223")
        getter.send(msg)
	},
};