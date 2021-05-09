// deriv from void_backup_05252020\index.js
// command wrapper

const Discord = require('discord.js');
const client = new Discord.Client();
const bot = client;
bot.commands = new Discord.Collection();
var config = require('./config.json')
 
const prefix = config.prefix;
 
const fs = require('fs');

global.chalk = require('chalk');

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
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift();
    if (message.author.bot) return;
    if (message.author.bot && message.content.startsWith(prefix)) return;
    if (!message.content.startsWith(prefix)) return;
    let cmd = bot.commands.get(command.toLowerCase());
    if (cmd) {
        cmd.execute(message, args, bot, config);
    }
});

client.login(config.token)