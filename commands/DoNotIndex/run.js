const Discord = require('discord.js'); // used for message embeds, etc
const { exec } = require("child_process");

module.exports = {
    name: 'run',
    description: "Run commands inside of a bash terminal",
    usage: "<bash>",
    cooldown: 1,
    async execute(message, args, bot, config){
        if(!config.devs.includes(message.author.id.toString())) return message.reply("u cant use this lol")
        if(!args || !args[0]) return message.reply("use args u clown.");
        exec(args.join(" "), (error, data, getter) => {
            if(error){
                console.log("error",error.message);
                return;
            }
            if(getter){
                message.channel.send(getter);
                return;
            }
            console.log("data",data);

        });
    }
};