const Discord = require("discord.js");

module.exports = {
    name: "terms",
    description: "shows rules",
    async execute (message, args) {
        
        const tEmbed = new Discord.RichEmbed()
            .setColor("42C0FB")
            .setDescription(`Please read #terms-of-service for now!`)
            .setFooter('© Aevum Studios', 'https://media.discordapp.net/attachments/425141295648866304/497827096211750922/image0.jpg?width=270&height=270')
            .setTimestamp(message.timestamp)
        
        message.channel.send(tEmbed);

}
}
