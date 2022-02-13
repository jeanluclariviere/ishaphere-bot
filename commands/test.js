const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('t')
	.setDescription('Ishaphere command')
// Variants Group
    .addSubcommandGroup(group =>
        group
        .setName('variants')
        .setDescription('Variant subcommand group')
// Magic Variants
        .addSubcommand(subcommand =>
            subcommand
                .setName('example')
                .setDescription('List of magic variants'))),
    async execute(subcommand, interaction) {
        await interaction.deferReply();
        interaction.reply("Test")
        console.log(subcommand)


    },
};