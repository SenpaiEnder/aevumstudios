const Discord = require("discord.js");

module.exports = {
    name: "close",
    description: "closes an open ticket",
    async execute (message, args) {
        if(!message.channel.name.startsWith("ticket-")){
            const errorEmbed = new Discord.RichEmbed()
            .setColor("ffcc00")
            .setTitle("Error! ❌")
            .setDescription("You cannot execute this command outside of a ticket channel!")
            .setFooter('© Aevum Studios', 'https://media.discordapp.net/attachments/425141295648866304/497827096211750922/image0.jpg?width=270&height=270')
            .setTimestamp(message.timestamp)
        
            return message.channel.send(errorEmbed);
}

if(!message.member.hasPermission("MANAGE_MESSAGES")){
    const errorEmbed = new Discord.RichEmbed()
    .setColor("ffcc00")
    .setTitle("Error! ❌")
    .setDescription("You do not have permission to close this ticket!")
    .setFooter('© Aevum Studios', 'https://media.discordapp.net/attachments/425141295648866304/497827096211750922/image0.jpg?width=270&height=270')
    .setTimestamp(message.timestamp)
        
    return message.channel.send(errorEmbed);          
}

const warnEmbed = new Discord.RichEmbed()
.setColor("ff2600")
.setTitle("Warning! ⚠️")
.setDescription("Are you absolutely sure you want to delete this ticket? To confirm and proceed with this action, please type `-confirm`.")
.setFooter('© Aevum Studios', 'https://media.discordapp.net/attachments/425141295648866304/497827096211750922/image0.jpg?width=270&height=270')
.setTimestamp(message.timestamp)
        
message.channel.send(warnEmbed)   
.then((m) => {
    message.channel.awaitMessages(response => response.content === '-confirm', {
        max: 1,
        time: 10000,
        errors: ['time'],
    })
    .then((collected) => {
        message.channel.delete();
    })
      .catch(() => {
          m.edit('Ticket close-confirmation timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
      });
});
}
}
