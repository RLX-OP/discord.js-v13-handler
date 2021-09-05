const { MessageEmbed } = require("discord.js");

module.exports = {

    name : "ping",
    run : async (client, message, args)=> {

message.channel.send({ embeds: [new MessageEmbed().setColor("RANDOM"). setDescription(`${client.ws.ping} ms`)] })  
    }
}
