const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('math', 'Math');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('MzA5MDkzMTI0MzM0OTQ0MjU4.C-qY9g.LoINmWgIah4r2ee10gTh9A0D8HU');
