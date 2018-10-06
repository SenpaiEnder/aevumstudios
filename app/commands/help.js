const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: "shows help guide",
    async execute (message, args) {
        const embed = new Discord.RichEmbed()
        .setColor("42C0FB")
        .setTitle("**Command Guide**")
        .addField(" `-new` - Creates a ticket!\n `-rules` - Displays the current rules  of the server!\n `-terms` - Displays the terms of service!\n `-add [@name] [#yourticket]` - Adds member to your ticket!")
        .setFooter('© Aevum Studios', 'https://media.discordapp.net/attachments/425141295648866304/497827096211750922/image0.jpg?width=270&height=270')
        .setTimestamp(message.timestamp)
        
        
        message.channel.send(embed);
}
}
