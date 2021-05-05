module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args, Discord){
    const helpembed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('COMMANDS')
        .setDescription('this is a list of command thst are useable')
        .addFields(
        {name: 'ping', value: 'this will test the timing of the ferret and if its active of not.' },
        {name: 'grammer', value: 'make someone check thier grammer'},
        {name: 'nick', value: 'change your nickname faster'}
        )

        message.channel.send(helpembed)

    }
};
