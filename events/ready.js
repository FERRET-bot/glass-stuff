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

        function arrayAverage(arr){
            //Find the sum
            var sum = 0;
            for(var i in arr) {
                sum += arr[i];
            }
            //Get the length of the array
            var numbersCnt = arr.length;
            //Return the average / mean.
            return (sum / numbersCnt);
        }

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
        var tp1 = undefined;
        var tp2 = undefined;
        async function testping(iterations){
            var pingss = []
            for(var control = 0;control<iterations;control++){
                var base = Date.now();
                var fm = await getter.send("Ping msg...");
                var tm = base - fm.createdTimestamp;
                pingss.push(tm)
                await fm.delete();
            }
            return pingss;
            console.log(pingss)
        }
        setTimeout(async () => {
            tp1 = await testping(8);
        }, 1000);
        await setTimeout(async () => {
            tp2 = await testping(8);
            console.log("average ping time #1: "+Math.abs(arrayAverage(tp1)).toString());
            console.log("average ping time #2: "+Math.abs(arrayAverage(tp2)).toString());
            config.loaded = true;
        }, 1000);
	},
};