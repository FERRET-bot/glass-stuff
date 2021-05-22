const Discord = require('discord.js'); // used for message embeds, etc
const fetch = require("node-fetch")

module.exports = {
    name: 'piglatin',
    description: "Translate to pig latin",
    usage: "<english>",
    cooldown: 5,
    async execute(message, args, bot, config){
        if(!args || args.length < 1) return message.reply("Please specify something to translate.")
        const PigLatin = require("pig-latinizer").default
 
        if(bot.piglatincache.get(message.content.toString())){
            message.channel.send(bot.piglatincache.get(message.content.toString())).then(m=>{
                m.edit(bot.piglatincache.get(message.content.toString())+"\n``Translation pulled from cache, translation instant``")
            })
        }else{
            const pigLatin = new PigLatin()
            try{
                const translated = pigLatin.translate(args.join(' '))
                var ping = message.createdTimestamp - Date.now();
                message.channel.send(translated).then(a=>{
                    a.edit(translated.toString()+"\n``Time taken to translate: "+ping.toString()+" MS` `")
                });
                bot.piglatincache.set(message.content.toString(),translated.toString())
            }catch(err){
                message.reply(err)
            }
        }
    }
};