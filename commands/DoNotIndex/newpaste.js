// jaelyn#2129
// notthatkuna
// 8:36 PM EST @ 5/8/21

const fetch = require('node-fetch');

module.exports = {
    
    name: 'newgist',
    description: "create a new github gist",
    async execute(message, args, bot){
        var config = require("../../config.json")
		fetch('https://pastebin.com/api/api_post.php', { method: 'POST', headers: {
			"api_dev_key": config.jaelyndevkey,
			"api_option": "paste",
			"api_paste_code": args.slice(1).join(" ")
		} })
		.then(res => res.json()) // expecting a json response
		.then(json => message.reply(json));
    }
};
