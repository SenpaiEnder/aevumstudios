const Discord = require('discord.js');
const client = new Discord.Client();

var fs = require('fs');

module.exports = {
    name: "new",
    description: "creates a ticket",
    async execute(message, args) {
        let reason = args.join(" "); 

if (message.guild.channels.exists("name", "Tickets!")){
    const errorEmbed = new Discord.RichEmbed()
    .setColor("ff2600")
    .setTitle("❌ Error ❌")
    .setDescription("You already have a ticket open! If you wish to create another, you must first close/resolve your original ticket.")
    .setFooter('© Aevum Studios', 'https://media.discordapp.net/attachments/425141295648866304/497827096211750922/image0.jpg?width=270&height=270')
    .setTimestamp(message.timestamp)
        
    return message.channel.send(errorEmbed);
}

let cParent = message.guild.channels.find(c => c.name === 'Tickets' && c.type == "category");

if(!cParent){ 
    const errorEmbed1 = new Discord.RichEmbed()
    .setColor("ff2600")
    .setTitle("❌ Error ❌")
    .setDescription("There is no parent category for tickets! Please contact an administrator.")
    .setFooter('© Aevum Studios', 'https://media.discordapp.net/attachments/425141295648866304/497827096211750922/image0.jpg?width=270&height=270')
    .setTimestamp(message.timestamp)

    return message.channel.send(errorEmbed1)
}

const succEmbed1 = new Discord.RichEmbed()
.setColor("17c437")
.setTitle("✅ Ticket Created ✅")
.setDescription(`${message.author}, Your ticket has been made.`)
.setFooter('© Aevum Studios', 'https://media.discordapp.net/attachments/425141295648866304/497827096211750922/image0.jpg?width=270&height=270')
.setTimestamp(message.timestamp)

message.channel.send(succEmbed1);

var read = fs.readFileSync('/app/commands/ticketnumber.txt','utf8');
        
var number1 = parseInt(read)
var numbers = number1 + 1;

fs.writeFile('/app/commands/ticketnumber.txt', numbers, function(){console.log('wrote the number')});

message.guild.createChannel(`"ticket-" + ${message.author.username}` + "-" + numbers, "text")
.then(c => {
    let suppRole = message.guild.roles.find("name", "Support Team");
    let everyone = message.guild.roles.find("name", "@everyone");

    c.setParent(cParent);
    c.overwritePermissions(suppRole, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
    });
    c.overwritePermissions(everyone, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
    });
    c.overwritePermissions(message.author, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
    });

     const tEmbed = new Discord.RichEmbed()
        .setColor("42C0FB")
        .setDescription(`Please read #terms-of-service for now!`)
        .setFooter('© Aevum Studios', 'https://media.discordapp.net/attachments/425141295648866304/497827096211750922/image0.jpg?width=270&height=270')
        .setTimestamp(message.timestamp)

    c.send(tEmbed)
}).catch(console.error)
}

}
