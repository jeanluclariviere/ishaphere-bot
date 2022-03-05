const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sigils')
		.setDescription('Sigils for the various Deities')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Sigils for the various Deities')
                .setRequired(true)
                .addChoice('Major Goddesses', 'major')
                .addChoice('Minor Gods', 'minor')),
	async execute(interaction) {
        await interaction.deferReply({
            ephemeral: true
        });


        var i = interaction.options.getString('input')
        if (i == "major") {
            const messageEmbed = new MessageEmbed()
            .setTitle('Major Goddesses')
            .setImage('https://i.imgur.com/pNsQ9hl.png')

            await interaction.editReply({
                embeds: [ messageEmbed ],
                ephemeral: true,
            })
        } else {
            const messageEmbed = new MessageEmbed()
            .setTitle('Minor Gods')
            .setImage('https://i.imgur.com/NRPP0yc.png')
            
            await interaction.editReply({
                embeds: [ messageEmbed ],
                ephemeral: true,
            })
        }
	},
};