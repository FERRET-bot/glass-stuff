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
    } if (command == 'eval'){
        client.commands.get('eval').execute(message, args, client);
    } if (command == 'grammer'){
        client.commands.get('grammer').execute(message,  Discord);
    } if(command === 'ferret') {
        client.commands.get('ferret').execute(message, Discord);
    } if(command === 'sleep') {
            client.commands.get('sleep').execute(message, Discord);
    }if(command === 'numba') {
        const list = client.guilds.cache.get("822603629814743071").members
var i = 1
try{
  list.cache.forEach(member => setTimeout(function(){ member.setNickname(i).catch(err =>{i = i - 1}); i = i + 1;}, 1000))
}catch(err){
  console.log(err)
}
    } if(command === 'msgdelete') {
        if (message.member.hasPermission("ADMINISTRATOR")){
            if (parseInt(args)){
            message.channel.bulkDelete(parseInt(args))
            }
        }
        else{
            message.channel.send("You lack persmissions to use this command")
        }
    } if (command === 'newpaste') {
        client.commands.get('newpaste').execute(message, args);
    }
});
 
client.login('ODM5MTExMDM5MTc3MDY0NDU5.YJE5DQ.WLWS05gBC47APO_epxE38wV7pO0');
