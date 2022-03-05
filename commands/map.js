const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('map')
		.setDescription('Map of Ishaphere'),
	async execute(interaction) {

        await interaction.deferReply({
            ephemeral: true
        });

        const messageEmbed = new MessageEmbed()
        .setTitle('Ishaphere')
        .setImage('https://i.imgur.com/zIxTwLO.jpg')

        await interaction.editReply({
            embeds: [ messageEmbed ],
            ephemeral: true,
        })
	},
};