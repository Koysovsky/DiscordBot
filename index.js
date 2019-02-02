const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("Bot is now ready!");
});
 
client.on("message", message =>{
    if(message.content.toLocaleLowerCase() == "bottest"){
        message.reply("Bot is working!");
    }
});
 
client.login(TOKEN);
