const Discord = require('discord.js'); // used for message embeds, etc
const sqlite3 = require('sqlite3').verbose();

module.exports = {
  name: 'dev',
  description: `ask the devs a question/give feedback!`,
  usage: "<question/feedback>",
  cooldown: 120,
  async execute(message, args, bot, config){
    var created = bot.uuid.v4();
    var fs = require('fs')

    let db = new sqlite3.Database('reports.db',sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to the reports database.');
    });

    db.serialize(() => {
      // Queries scheduled here will be serialized.
      db.run(`CREATE TABLE '`+created+`'(
        creatorid text,
        message text,
        status text
      )`)
        .run(`INSERT INTO \``+created+`\`(creatorid)
              VALUES("${message.author.id.toString()}")`)
        .run(`INSERT INTO \``+created+`\`(message)
              VALUES('${args.join(" ")}')`)
        .run(`INSERT INTO \``+created+`\`(status)
              VALUES("open")`)
        .all(`SELECT * FROM \``+created+`\``, function(err, rows) {  
          rows.forEach(function (row) {  
              console.log(row);    // and other columns, if desired
          })  
      });
    });

    const asker = message.author
    const username = message.author.username
    var nowtime_t = Date.now();
    var nowtime_d = new Date();
    message.channel.send(`${asker} your message has been sent to the devs, thank you!!\nYour unique UUID is ${created.toString()}`);
    
    const question = args.join().replace(/,/g, " ");


    const askembed = new Discord.MessageEmbed()
    .setTitle(`${username}  (${asker}) - ${nowtime_d.toString()}`)
    .setDescription(question)
    .setColor([219, 29, 73])
    var channels = bot.channels
    var cache = channels.cache
    var getter = cache.get("842450641769988173")
    getter.send(askembed)
    }
}