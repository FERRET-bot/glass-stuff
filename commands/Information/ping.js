const Discord = require('discord.js');
module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    usage: "",
    execute(message, args, client, config){
        message.channel.send("1").then(m => {
            var ping = m.createdTimestamp - message.createdTimestamp;
            message.channel.send("2").then(m2 =>{
                var ping2 = m2.createdTimestamp - message.createdTimestamp;
                message.channel.send("3").then(m3 =>{
                    var ping3 = m3.createdTimestamp - message.createdTimestamp;
                    message.channel.send("4").then(m4=>{
                        var ping4 = m4.createdTimestamp - message.createdTimestamp;
                        const pingembed = new Discord.MessageEmbed()
                        .setColor('#FFA500')
                        .setTitle('PONG!')
                        .setDescription('You have tested the timing of this bot!\nFirst ping: ``'+ping.toString()+' ms``\nSecond ping: ``'+ping2.toString()+' ms``\nThird ping: ``'+ping3.toString()+' ms``\nFourth ping: ``'+ping4.toString()+' ms``')
                        message.channel.send(pingembed);
                        m.delete()
                        m2.delete()
                        m3.delete()
                        m4.delete()
                    })
                })
            })
        });


    }
};
