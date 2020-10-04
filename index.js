const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const PREFIX = '%';

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.TOKEN);