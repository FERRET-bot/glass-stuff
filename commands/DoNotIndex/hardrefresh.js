const Discord = require('discord.js'); // used for message embeds, etc

  module.exports = {
      name: 'hardrefresh',
      description: "Externally refresh the bot; want to git pull? Add --g-pull to your args",
      usage: "[options]",
      cooldown: 5,
      aliases: ["reset"],
      async execute(message, args, bot, config){
          if(!config.devs.includes(message.author.id.toString())) return message.reply("Only my owners can use this command")
          message.channel.send("Initiating CMD module for external use...").then(mes1=>{
              const cmd = require('node-cmd')
              message.channel.send("Done!").then(mes2=>{
                  message.channel.send("Bot will be offline temporarily!").then(mes3=>{
                        var do_gpull = false
                        if(message.content.toLowerCase().match("--g-pull")) do_gpull = true;
                        if(do_gpull){
                            await message.channel.send("Git pulling...")
                            cmd.run("git pull origin")
                        }
                        cmd.run("refresh")
                        message.channel.send("Last message, refresh event has been sent.")
                  })
              })
          })
      }
 };