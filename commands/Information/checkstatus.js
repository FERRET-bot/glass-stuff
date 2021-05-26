const Discord = require('discord.js'); // used for message embeds, etc
const sqlite3 = require('sqlite3').verbose();

module.exports = {
    name: 'status',
    description: "Status on a report ticket thread",
    usage: "<UUID>",
    cooldown: 5,
    async execute(message, args, bot, config){
        let db = new sqlite3.Database('reports.db',sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Connected to the reports database.');
        });
        let sql = `SELECT uuid id,
                            Status status
                    FROM '`+args[0]+`'
                    WHERE uuid  = ?`;
        let playlistId = args[0];

        db.get(sql, [playlistId], (err, row) => {
            if (err) {
                return console.error(err.message);
            }
            return row
            ? console.log(row.status)
            : console.log(`No playlist found with the id ${playlistId}`);
        });
          
        // close the database connection
        db.close();
    }
};