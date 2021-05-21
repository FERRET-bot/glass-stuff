const Discord = require('discord.js');
var fs = require('fs');
var config = require('../config')
module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
        config.loaded = false;
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
        await getter.send(msg);
        async function testping(iterations){
            for(var control = 0;control<iterations;control++){
                var base = Date.now();
                var fm = await getter.send("Ping msg...");
                var tm = fm.createdTimestamp - base;
                console.log(tm);
                await fm.delete();
            }
        }
        setTimeout(() => {
            testping(8);
        }, 1000);
        await setTimeout(() => {
            testping(8);
            config.loaded = true;
        }, 1000);
	},
};