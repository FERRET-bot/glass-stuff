module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args, Discord){
    const pingembed = new Discord.MessageEmbed()
        .setColor('#FFA500')
        .setTitle('PONG!')
        .setDescription('you have tested the timeing of this ferret')
        .setImage('https://cdn.onlinewebfonts.com/svg/img_531810.png');

        message.channel.send(pingembed)

    }
};