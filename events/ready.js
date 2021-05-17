const Discord = require('discord.js');
module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
        var os = require('os');
        var sysinfo = {};

        sysinfo.hostname = os.hostname();
        sysinfo.os = {};
        sysinfo.os.release          = os.release();
        sysinfo.os.platform         = os.platform();
        sysinfo.os.arch             = os.arch();
		const dt = new Date();
        const msg = new Discord.MessageEmbed()
        .setTitle("Bot Started")
        .setDescription("Started on "+dt.toString()+"\n``PRIVATE_INFO``|``"+sysinfo.os.release.toString()+"``|``"+sysinfo.os.platform.toString()+"``|``"+sysinfo.os.arch.toString()+"``")
        var channels = client.channels
        var cache = channels.cache
        var getter = cache.get("841008670125064223")
        getter.send(msg)
        await client.mcclient.connect(err => {
            const collection = client.mcclient.db("test").collection("devices");
            // perform actions on the collection object
        });
        getter.send("Correctly conneted to MongoDB on Atlas dr")
	},
};