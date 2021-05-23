const Discord = require('discord.js'); // used for message embeds, etc
const fetch = require('node-fetch')

module.exports = {
    name: 'crypto',
    description: "Get current dogecoin crypto stats",
    usage: "",
    cooldown: 5,
    aliases: ["dogecoin"],
    async execute(message, args, bot, config){
        console.log("used crypto")
        fetch("https://sochain.com//api/v2/get_price/DOGE/USD")
        .then(res => res.json())
        .then(json => {
            if(!json.status === "success"){
                message.reply("Something happened that isn't on our end! Please try again later.")
            }
            const membed = new Discord.MessageEmbed()
            .setTitle("dogeCrypto information as of current")
            var st = "Network: "+json.data.network.toString()+"\n\n"
            json.data.prices.forEach(cp=>{
                st = st + "Price: "+cp.price.toString();
                st = st + "\nPrice base: "+cp.price_base.toString();
                st = st + "\nExchange: "+cp.exchange.toString();
                st = st + "\nTime (raw): "+cp.time.toString();
                st = st + "\nTime (seconds): "+Math.floor(cp.time / 60000).toString();
                st = st + "\n\n"
            })
            membed.setDescription(st.toString());
            message.channel.send(membed)
        }).catch(err=>{
            console.log(err)
        })
    }
};