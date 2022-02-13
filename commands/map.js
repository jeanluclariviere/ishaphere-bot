const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('map')
		.setDescription('Map of Ishaphere'),
	async execute(interaction) {
        await interaction.deferReply();

        try{
            const messageEmbed = new MessageEmbed()
            .setTitle('Ishaphere')
            .setColor('#9013fe')
            .setImage('https://i.imgur.com/zIxTwLO.jpg')
            
            await interaction.editReply({
                embeds: [ messageEmbed ]
            });
        }
        catch (error) {
            console.log(error)
            interaction.reply("There was an error while executing this command!")
        }
	},
};
