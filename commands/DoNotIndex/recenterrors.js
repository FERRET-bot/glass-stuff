const Discord = require('discord.js'); // used for message embeds, etc

module.exports = {
    name: 'errors',
    description: "Generate a pastebin of the latest DISCORDAPI related errors while the bot instance has been running, good for remote debugging with a cap limit of 100 errors.",
    usage: "",
    cooldown: 5,
    async execute(message, args, bot, config){
        var PastebinAPI = require('pastebin-js'),
        pastebin = new PastebinAPI({
            'api_dev_key' : config.pastekey.toString(),
            'api_user_name' : 'jaelyn',
            'api_user_password' : 'francis215367'
        });
        var st = "Generated at "+Date.now().toString()+"\n\n"
        var counter = 0;
        bot.recenterrors.each(err=>{
            counter = counter + 1;
            if(counter >= 100){
                break;
            }else{
                st = st + err.toString() + "\n\n"
            }
        })
        pastebin // base
        .createPaste(st,Date.now().toString())
    }
};