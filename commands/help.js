module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, Discord){
    const helpembed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('COMMANDS')
        .setDescription('this is a list of command that are useable')
        .addFields(
            {name: 'ping', value: 'this will test the timing of the ferret and if its active of not.' },
            {name: 'grammer', value: 'make someone check thier grammer'},
            {name: 'nick', value: 'change your nickname faster'},
            {name: 'sleep', value: 'tell someone or yourself to go to sleep'},
            {name: 'ferret', value: 'shows random (and extremely cute) ferret'},
        )
        message.channel.send(helpembed)

    }
};
