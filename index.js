const { Client, Collection } = require("discord.js");
require("dotenv");
const client = new Client({
  intents: 32767
});

client.config = require("./config.json");
require("./database/mongoose")();
client.commands = new Collection();
client.aliases = new Collection();
client.slashCmds = new Collection();

["commands", "events", "slashCmds"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login(process.env.TOKEN)