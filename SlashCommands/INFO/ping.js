const { MessageEmbed } = require("discord.js");

module.exports = {

    name : "ping",
        description: "return's bot latency",
    run : async (client, interaction, args)=> {

interaction.followUp({ embeds : [new MessageEmbed().setColor("RANDOM"). setDescription(`${client.ws.ping} ms`)] })  
    }
}
