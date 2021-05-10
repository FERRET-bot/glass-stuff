// jaelyn#2129
// notthatkuna
// 8:36 PM EST @ 5/8/21

const fetch = require('node-fetch');

module.exports = {
    
    name: 'newgist',
    description: "create a new github gist",
    async execute(message, args, bot){
        message.channel.send("Hello, this command is currently unavailable as it is not working as it is intended to.")
    }
};
