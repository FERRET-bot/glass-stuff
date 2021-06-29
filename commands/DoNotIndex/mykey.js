const Discord = require('discord.js'); // used for message embeds, etc

module.exports = {
    name: 'mykey',
    description: "Get your key",
    usage: "",
    cooldown: 5,
    async execute(message, args, bot, config){
        if(!config.devs.includes(message.author.id.toString())) return message.reply("u cant use this lol")
        fs.readFile('/app/keys.txt', 'utf8', function(err, data) {
            if (err) throw err;
            var lines = data.split("\n")
            var ret = ""
            lines.forEach(line=>{
                splitLine = line.split(";")
                id = splitLine[0]
                key = splitLine[1]
                if(id.toString() == message.author.id.toString()){
                    return message.reply(`your key is: ||${key}||\nMake sure no one else gets this key!\nIf you think someone has your key, DM jaelyn or ferret to get it changed ASAP`)
                }
            })
            message.channel.send(ret)
        });
    }
 };