const commando = require('discord.js-commando');

class diceRollCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'roll',
      group: 'math', 
      memberName: 'roll',
      description: 'rolls a die',
      args: [
				{
					key: 'numbers',
					label: 'number',
					prompt: 'What sided die would you like to roll?',
					type: 'float',
					infinite: true
				}
			],
      examples: ['!roll', '!roll 20'],
    });
  }

  async run(message, args) {
    var roll;
    roll = Math.floor(Math.random() * args.numbers) + 1;
    message.reply('You rolled a '+roll);
  }
}

module.exports = diceRollCommand;