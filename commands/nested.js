const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('i')
	.setDescription('Ishaphere command')
// Variants Group
    .addSubcommandGroup(group =>
        group
        .setName('variants')
        .setDescription('Variant subcommand group')
// Magic Variants
        .addSubcommand(subcommand =>
            subcommand
                .setName('magic')
                .setDescription('List of magic variants')
                .addStringOption(option =>
                    option.setName('input')
                        .setDescription('List of magic variants')
                        .setRequired(true)
                        .addChoice('Learning, Preparing, and Casting Spells', 'variants/magic/learning_preparing_casting_spells.txt')
                        .addChoice('Full Caster Progression', 'variants/magic/full_caster_progression.txt')
                        .addChoice('Half Caster Progression', 'variants/magic/half_caster_progression.txt')
                        .addChoice('Third Caster Progression', 'variants/magic/third_caster_progression.txt')
                        .addChoice('Warlock', 'variants/magic/warlock.txt')
                        .addChoice('Wizard', 'variants/magic/wizard.txt')))
// Official Variants
        .addSubcommand(subcommand =>
            subcommand
                .setName('official')
                .setDescription('List of official variants')
                .addStringOption(option =>
                    option.setName('input')
                        .setDescription('List of official variants')
                        .setRequired(true)
                        .addChoice('Healer\'s Kit', 'variants/official/healers_kit.txt')
                        .addChoice('Slow Natural Healing', 'variants/official/slow_natural_healing.txt')
                        .addChoice('Gritty Realism', 'variants/official/gritty_realism.txt')
                        .addChoice('Lingering Injuries', 'variants/official/lingering_injuries.txt')
                        .addChoice('Encumbrance', 'variants/official/encumbrance.txt')
                        .addChoice('Food and Water', 'variants/official/food_and_water.txt')))
// Homebrew Variants
        .addSubcommand(subcommand =>
            subcommand
                .setName('homebrew')
                .setDescription('List of homebrew variants')
                .addStringOption(option =>
                    option.setName('input')
                        .setDescription('List of homebrew variants')
                        .setRequired(true)
                        .addChoice('Death', 'variants/homebrew/death.txt')
                        .addChoice('Bleeding Out', 'variants/homebrew/bleeding_out.txt')
                        .addChoice('Rendering Medical Aid', 'variants/homebrew/redering_medical_aid.txt')
                        .addChoice('Critical Hits', 'variants/homebrew/critical_hits.txt')
                        .addChoice('Grit Your Teeth', 'variants/homebrew/grit_your_teeth.txt')
                        .addChoice('Injured', 'variants/homebrew/injured.txt')
                        .addChoice('Leveling Up', 'variants/homebrew/leveling_up.txt')
                        .addChoice('Potions', 'variants/homebrew/potions.txt'))))
// Character Options
    .addSubcommandGroup(group =>
        group
        .setName('character_options')
        .setDescription('Character Options')
// Races
        .addSubcommand(subcommand =>
            subcommand
            .setName('races')
            .setDescription('Ishapherian races')
            .addStringOption(option =>
                option.setName('input')
                    .setDescription('Ishapherian races')
                    .setRequired(true)
                    .addChoice('Beefolk', 'character_options/races/beefolk.txt')
                    .addChoice('Squirrelfolk', 'character_options/races/squirrelfolk.txt')))
// Subraces
        .addSubcommand(subcommand =>
            subcommand
            .setName('subraces')
            .setDescription('Ishapherian subraces')
            .addStringOption(option =>
                option.setName('input')
                    .setDescription('Ishapherian subraces')
                    .setRequired(true)
                    .addChoice('Irradiated', 'character_options/subraces/irradiated.txt')
                    .addChoice('Wererat', 'character_options/subraces/wererat.txt')
                    .addChoice('Wereracoon', 'character_options/subraces/wereracoon.txt'))))
// Teritories
.addSubcommand(subcommand =>
    subcommand
        .setName('territories')
        .setDescription('List of territories')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The names of territories')
                .setRequired(true)
                .addChoice('Leefside', 'territories/leefside.txt')
                .addChoice('Feyhurst', 'territories/feyhurst.txt')
                .addChoice('Wygate', 'territories/wygate.txt')
                .addChoice('Towe', 'territories/towe.txt')
                .addChoice('Nehrak', 'territories/nehrak.txt')
                .addChoice('Koral Wastes', 'territories/koral_wastes.txt')
                .addChoice('Libon Tundra', 'territories/libon_tundra.txt')
                .addChoice('Squalls End', 'territories/squalls_end.txt')
                .addChoice('Em\'s Depth', 'territories/ems_depth.txt')))
// Organizations
    .addSubcommand(subcommand =>
        subcommand
            .setName('organizations')
            .setDescription('List of organizations')
            .addStringOption(option =>
                option.setName('input')
                    .setDescription('The names of the organizations')
                    .setRequired(true)
                    .addChoice('Archive Syndicate', 'organizations/archive_syndicate.txt')
                    .addChoice('Continental Post', 'organizations/continental_post.txt')
                    .addChoice('Dominion of Valarast', 'organizations/dominion_of_valarast.txt')
                    .addChoice('Wild Tribes', 'organizations/wild_tribes.txt')
                    .addChoice('Cherry Coats', 'organizations/cherry_coats.txt')
                    .addChoice('Dry River Company', 'organizations/dry_river_company.txt')
                    .addChoice('Sugar Bush Adventuring Corp', 'organizations/sugar_bush_adventuring_corp.txt')))
// Time and Seasons
    .addSubcommand(subcommand =>
        subcommand
            .setName('time_and_seasons')
            .setDescription('Time in Ishaphere')
            .addStringOption(option =>
                option.setName('input')
                    .setDescription('Time in Ishaphere')
                    .setRequired(true)
                    .addChoice('Time and Seasons', 'time_and_seasons/time_and_seasons.txt')
                    .addChoice('Days of the Week', 'time_and_seasons/days_of_the_week.txt')
                    .addChoice('Months', 'time_and_seasons/months.txt')))
    // Magical Origins
    .addSubcommand(subcommand =>
        subcommand
            .setName('magical_origins')
            .setDescription('Planes and magical lore')
            .addStringOption(option =>
                option.setName('input')
                    .setDescription('Planes and magical lore')
                    .setRequired(true)
                    .addChoice('Planes', 'magical_origins/planes.txt')
                    .addChoice('Major Goddesses', 'magical_origins/major_goddesses.txt')
                    .addChoice('Minor Gods', 'magical_origins/minor_gods.txt')
                    .addChoice('Secret Lore', 'magical_origins/secret_lore.txt')))
    .addSubcommand(subcommand =>
        subcommand
            .setName('travelling')
            .setDescription('Travelling in Ishaphere')
            .addStringOption(option =>
                option.setName('input')
                    .setRequired(true)
                    .setDescription('Travelling in Ishaphere')
                    .addChoice('Travel Pace Table', 'travelling/travel_pace_tables.txt'))),
    async execute(interaction) {
        await interaction.deferReply();

        try{
            var data = fs.readFileSync('files/' + interaction.options.getString('input')).toString()

            const messageEmbed = new MessageEmbed()
            .setColor('#9013fe')
            .setDescription(data);
            
            await interaction.editReply({
                embeds: [ messageEmbed ]
            });
        }
        catch (error) {
            console.log(error)
            interaction.reply("There was an error while executing this command!")
        }

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