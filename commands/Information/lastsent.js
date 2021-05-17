const Discord = require('discord.js'); // used for message embeds, etc

module.exports = {
    name: 'getlast',
    description: "Get your last message time",
    usage: "",
    cooldown: 3,
    async execute(message, args, bot, config){
        message.channel.send("Fetching DataBase...").then(m=>{
            const db = bot.mcclient.db("Leveling");
            // Use the collection "people"
            const col = db.collection("levels")
            m.edit("Indexing DataBase...").then(m2=>{
                col.findOne({id: message.author.id.toString()}).then(fnd=>{
                    if (fnd){
                        message.channel.send("Found an indexed document!\nLast sent message time: "+fnd.level.toString())
                    }else{
                        message.channel.send("Failed to find a document registered with your UserID. This may be because this is your first message and our servers are taking a while to update. Please try again later.")
                    }
                })
            })
        })
    }
};