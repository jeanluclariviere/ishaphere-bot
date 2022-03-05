const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('equipment')
	.setDescription('List of equipment')
// Equipment Variants
    .addStringOption(option =>
        option.setName('input')
            .setDescription('List of equipment')
            .setRequired(true)
            .addChoice('Armor 1', 'equipment/armor_1.txt')
            .addChoice('Armor 2', 'equipment/armor_2.txt')
            .addChoice('Simple Weapons 1', 'equipment/simple_weapons_1.txt')
            .addChoice('Simple Weapons 2', 'equipment/simple_weapons_2.txt')
            .addChoice('Martial Weapons 1', 'equipment/martial_weapons_1.txt')
            .addChoice('Martial Weapons 2', 'equipment/martial_weapons_2.txt')
            .addChoice('Martial Weapons Ranged', 'equipment/martial_weapons_ranged.txt')
            .addChoice('Ammunition', 'equipment/ammunition.txt')
            .addChoice('Spellcasting Focus', 'equipment/spellcasting_focus.txt')
            .addChoice('Adventuring Gear [A-C]', 'equipment/adventuring_gear_a_c.txt')
            .addChoice('Adventuring Gear [D-M]', 'equipment/adventuring_gear_d_m.txt')
            .addChoice('Adventuring Gear [N-S]', 'equipment/adventuring_gear_n_s.txt')
            .addChoice('Adventuring Gear [T-Z]', 'equipment/adventuring_gear_t_z.txt')),
    async execute(interaction) {
        await interaction.deferReply({
            ephemeral: true
        });

        var data = fs.readFileSync('files/' + interaction.options.getString('input')).toString()

        const messageEmbed = new MessageEmbed()
        .setDescription(data)

        await interaction.editReply({
            content: data,
            ephemeral: true,
        })

                // fs.readFile('files/' + interaction.options.getString('input'), (err, data) => {    
        //     if (data.length == 0){
        //         console.log("Error - data is empty: " + interaction.options.getString('input'))
        //         interaction.reply("There was an error while executing this command!")
        //     } else if (err) {
        //         console.log(err)
        //         interaction.reply("There was an error while executing this command!")
        //     } else {
        //         interaction.reply(data.toString())
        //     }
        // })

    },
};