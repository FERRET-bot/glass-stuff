// deriv from void_backup_05252020\index.js
// command wrapper

const Discord = require('discord.js');
const client = new Discord.Client();
const bot = client;
bot.commands = new Discord.Collection();
var config = require('./config.json')
 
const prefix = config.prefix;
 
const fs = require('fs');

function checker(value) {
    for (var i = 0; i < prohibited.length; i++) {
        if (value.indexOf(prohibited[i]) > -1) {
        return false;
        }
    }
    return true;
}
global.chalk = require('chalk');

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(bot, ...args));
	} else {
		client.on(event.name, (...args) => event.execute(bot, ...args));
	}
}


try {
    console.log(`${chalk.red("Loading Commands...")}`);
    var cnumber = 0;
    let comands = [];
    const commandFiles = fs.readdirSync("./commands");
    commandFiles.forEach((folder) => {
        const cate = fs.readdirSync(`./commands/${folder}`);
        comands += chalk.red(`\n${folder}  `);
        cate.forEach((file) => {
            cnumber++;
            const command = require(`./commands/${folder}/${file}`);
            comands += chalk.green(`${command.name} || `);
            bot.commands.set(command.name, command);
        });
    });
    console.log(`Successfully Loaded ${chalk.blue(cnumber)} Commands!\n` + comands);
} catch (e) {
    console.log(chalk.red(`${e.stack}`));
}

bot.on("message", async (message) => { // client or bot
    if (message.channel.type == "dm") return;
    const args = message.content.slice(1).split(/ +/);
    const command = args.shift();
    if (message.author.bot) return;
    var results = checker(message.content.slice(1,1))
    if (message.author.bot && results == false) return;
    if (!results == true) return;
    let cmd = bot.commands.get(command.toLowerCase());
    if (cmd) {
        cmd.execute(message, args, bot, config);
    }
});

client.login(config.token)