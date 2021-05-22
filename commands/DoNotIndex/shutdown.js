const Discord = require('discord.js');
module.exports = {
    name: 'shutdown',
    description: "Shuts down the bot",
	usage: "",
	cooldown: 0,
	aliases: ["kill", "stop"],
    execute(message, args, client, config){
		if (!config.devs.includes(message.author.id.toString())){return message.reply("Only my owners can use this command")}
		var nd = new Date()
		console.log("Shutdown at ``"+nd.toString()+"`` by user ``"+message.author.username.toString()+"`` with ID ``"+message.author.id.toString()+"``")
		message.channel.send("Shutdown at ``"+nd.toString()+"`` by user ``"+message.author.username.toString()+"`` with ID ``"+message.author.id.toString()+"\nIf the bot does not go offline immediately, kill the bot process in the corresponding terminal and/or host.``").then((promise) => {
			client.destroy()
		})
	}
};
