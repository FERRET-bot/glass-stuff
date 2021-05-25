const Discord = require('discord.js'); // used for message embeds, etc

module.exports = {
    name: 'lastaudit',
    description: "Get the last audit entry",
    usage: "",
    cooldown: 5,
    async execute(message, args, bot, config){
        const fetchedLogs = await message.guild.fetchAuditLogs({
            limit: 1
        });
        
        const deletionLog = fetchedLogs.entries.last();
        message.channel.send("Action: "+deletionLog.action+"\nActionType: "+deletionLog.actionType+"\nExecutor: "+deletionLog.executor);
    }
 };