const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: "add",
    description: "add user to ticket",
    async execute (message, args) {

        let memberd = message.mentions.members.first();
        let chan = message.mentions.channels.first();
        let channeld = args[1];

        const embed = new Discord.RichEmbed()
        .setColor("42C0FB")
        .addField("User Added!", memberd + " added to " + channeld + "!")
        .setFooter('© Aevum Studios', 'https://media.discordapp.net/attachments/425141295648866304/497827096211750922/image0.jpg?width=270&height=270')
        .setTimestamp(message.timestamp)

        message.channel.send(embed);

        let user_id = memberd.id;

        chan.overwritePermissions(memberd.id, {
            'VIEW_CHANNEL': true, 
            'SEND_MESSAGES' : true
        })
}
}
