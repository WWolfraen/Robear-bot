const {token} = require("./botconfig.json");
const colours = require("./colours.json");
const {Collection, Client} = require("discord.js");
const bot = new Client({disableMentions: 'all'});
const superagent = require("superagent");

bot.on("ready", async () =>{
    console.log(`${bot.user.username} online van`)
    bot.user.setActivity("Fejlesztés alatt", {type: "PLAYING"});
})

var coms = ["commands", "aliases"];
coms.forEach(x => bot[x] = new Collection());

var coms2 = ["command", "event", "console"];

coms2.forEach(x => new require(`./handlers/${x}`)(bot));


bot.login(process.env.BOT_TOKEN);
