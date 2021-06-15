var express = require('express')
var app = express();
const cmd = require("node-cmd");

app.post('/git', (req, res) => {
// If event is "push"
    if (req.headers['x-github-event'] == "push") {
        cmd.run('chmod 777 git.sh'); /* :/ Fix no perms after updatin */
        cmd.get('./git.sh', (err, data) => {  // Run our script
            if (data) console.log(data);
            if (err) console.log(err);
        });
        cmd.run('refresh');  // Refresh project

        console.log("> [GIT] Updated with origin/master");
    }

    return res.sendStatus(200); // Send back OK status
});