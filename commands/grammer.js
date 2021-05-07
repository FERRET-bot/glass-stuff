module.exports = {
    name: 'grammer',
    description: "this is a grammer command",
    execute(message, Discord){
    const grammerembed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('check your grammer you little carrot')
        .setDescription('you better change you grammer before i spank you')
        .setImage('https://cdn.discordapp.com/attachments/838500668696166471/838704894340628530/ferret_god.jpg');

        
        message.channel.send(grammerembed)
    }

};
