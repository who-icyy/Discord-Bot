const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('DEMO')
		.setDescription('Replies'),
	async execute(interaction) {
		await interaction.reply('WORKINGGGG');
	},
};