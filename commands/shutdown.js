module.exports = {
    name: 'shutdown',
    description: "Shuts down the bot",
    execute(message, client, config){
		if (!config.devs.includes(message.author.id)){return message.reply("Only my owners can use this command")}
		var nd = new Date()
		message.channel.send("Shutdown at ``"+nd.toString()+"`` by user ``"+message.author.name.toString()+"`` with ID ``"+message.author.id.toString()+"``")
		console.log("Shutdown at ``"+nd.toString()+"`` by user ``"+message.author.name.toString()+"`` with ID ``"+message.author.id.toString()+"``")
		client.destroy();
	}
};
