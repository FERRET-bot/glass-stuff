// jaelyn#2129
// notthatkuna
// 8:36 PM EST @ 5/8/21

module.exports = {
    
    name: 'newgist',
    description: "create a new github gist",
    execute(message, args){
        var config = require("../config.json")
		const { Octokit } = require("@octokit/core"); // used for git requests
		var req = await octokit.request('POST /gists', {
		  files: {
			  "main.txt": args.slice(1).join(" ")
		  }
		}).then(response =>{
			message.reply(reponse.json().url)
		})
    }
};
