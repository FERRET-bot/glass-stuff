module.exports = {
    name: 'ferret',
    description: "this is a command for ferret",
    execute(message, Discord){
        const ferretembed = new Discord.MessageEmbed()
            .setColor('#FFA500')
            .setTitle( 'Go the fuck to sleep!')
            .setImage('https://img.freepik.com/free-photo/cute-ferret-is-sleeping_369656-37.jpg?size=626&ext=jpg');
            
            message.channel.send(ferretembed)
        }
};
