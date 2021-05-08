const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('ferret is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping') {
        client.commands.get('ping').execute(message, Discord);
    } if (command == 'help'){
        client.commands.get('help').execute(message, Discord);
    } if (command == 'nick'){
        client.commands.get('nick').execute(message, args, Discord);
    } if (command == 'grammer'){
        client.commands.get('grammer').execute(message,  Discord);
    } if(command === 'ferret') {
        client.commands.get('ferret').execute(message, Discord);
    } if(command === 'slepp') {
            client.commands.get('sleep').execute(message, Discord);
    }  if(command === 'msgdelete') {
        if (message.member.hasPermission("ADMINISTRATOR")){
            if (parseInt(args)){
            message.channel.bulkDelete(parseInt(args))
            }
        }
        else{
            message.channel.send("You lack persmissions to use this command")
        }
    }
});
 
client.login('ODM5MTExMDM5MTc3MDY0NDU5.YJE5DQ.WLWS05gBC47APO_epxE38wV7pO0');
