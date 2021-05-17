// deriv from void_backup_05252020\index.js
// command wrapper

const Discord = require('discord.js');
var client = new Discord.Client();
client.MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://glassJaelyn:francis215367@cluster0.n228b.mongodb.net/Leveling?retryWrites=true&w=majority";
client.mcclient = new client.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var bot = client;
bot.commands = new Discord.Collection();
bot.cooldowns = new Discord.Collection();
bot.notracebackmode = false
var config = require('./config.json')


  
const fs = require('fs');

function checker(value) {
    var prohibited = ['banana', 'apple'];
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
    if (bot.notracebackmode === true && message.author.id === bot.user.id){
        setTimeout(() => {
            message.delete();
        }, config.notracebacktimeout);
    }
    const args = message.content.slice(1).split(/ +/);
    const command = args.shift();
    if (message.author.bot) return;
    var results = checker(message.content.slice(1,1))
    if (message.author.bot && results == false) return;
    if (!results == true) return;
    const db = client.mcclient.db("Leveling");
    // Use the collection "people"
    const col = db.collection("levels");
    if(!col.find(message.author.id.toString())){
        // Construct a document                                                                                                                                                              
        let personDocument = {
            "id": message.author.id.toString(),
            "level": 1
        }
        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(personDocument);
        // Find one document
        const myDoc = await col.findOne();
        // Print to the console
        console.log(myDoc);
    }else{
        col.updateOne({id:message.author.id.toString()}, {$set: {level: Date.now().toString()}});
    }
    var pref = undefined;
    config.prefixes.forEach(prfx=>{
        if (message.content.startsWith(prfx)) pref = prfx;
    })
    if (!pref) return;
    let cmd = bot.commands.get(command.toLowerCase() || bot.commands.find(cmcd => cmcd.aliases && cmcd.aliases.includes(command.toLowerCase())));
    if (cmd) {

        if (!bot.cooldowns.has(cmd.name.toString())) {
            bot.cooldowns.set(cmd.name.toString(), new Discord.Collection());
        }

        const now = Date.now();
        const timestamps = bot.cooldowns.get(cmd.name);
        const cooldownAmount = (cmd.cooldown || config.defaultcooldown) * 1000;

        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${cmd.name}\` command.`);
            }
        }
        cmd.execute(message, args, bot, config);
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }
});

client.login(config.token)