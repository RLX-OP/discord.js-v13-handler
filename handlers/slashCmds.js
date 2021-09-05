let slashCmds = []
const { readdirSync } = require("fs");
const ascii = require("ascii-table");

// Create a new Ascii table
let table = new ascii("Slash Commands");
table.setHeading("Commands", "Load status");
module.exports = (client) => {
    readdirSync("./SlashCommands/").forEach(dir => {
        const commands = readdirSync(`./SlashCommands/${dir}/`).filter(file => file.endsWith(".js"));
    
        for (let file of commands) {
            let pull = require(`../SlashCommands/${dir}/${file}`);
    
            if (pull.name) {
                client.slashCmds.set(pull.name, pull);
                slashCmds.push(pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
                continue;
            }
    
            }
    });
    
    console.log(table.toString());


client.on("ready", async ()=> {

//registering slash commands
await client.application.commands.set(slashCmds)

})

}
