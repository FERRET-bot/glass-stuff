const Discord = require('discord.js'); // used for message embeds, etc
const fetch = require('node-fetch')
const firstendpoint = "lemmas";
const secondendpoint = "entries"
const languagecode = "en-us"



module.exports = {
    name: 'define',
    description: "Define something",
    usage: "<word>",
    cooldown: 5,
    aliases: ["whatis"],
    async execute(message, args, bot, config){
        if(!args || !args[0]) return message.reply("invalid form")
        if(args[1]) return message.reply("can only process one definition at a time")
        var url = `https://od-api.oxforddictionaries.com/api/v2/${firstendpoint}/${languagecode}/${args[0]}`
        fetch(url, {method: 'GET', headers: {"app_id": config.oxfID, "app_key": config.oxfKEY}}).then(res=>{
            res = res.json();
            console.log(res.text)
            url = `https://od-api.oxforddictionaries.com/api/v2/${secondendpoint}/${languagecode}/${res.text}`
            fetch(url, {method: 'GET', headers: {"app_id": config.oxfID, "app_key": config.oxfKEY}}).then(res2=>{
                res2 = res2.json();
                console.log(res2)
                var mbed = new Discord.MessageEmbed()
                .setTitle(res)
                .setDescription(res2.text)
                message.channel.send(mbed)
            })
        })
    }
};