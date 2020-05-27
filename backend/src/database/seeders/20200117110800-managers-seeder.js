'use strict';
const formatDate = require('../../helpers').formatDate;
const currentDate = formatDate(Date.now() / 1000);

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('managers', [
            {
                name: "Cabe Johnson",
                description: "Runs Lemonade Stand",
                business_type: "lemonade-stand",
                image: "https://vignette.wikia.nocookie.net/adventure-capitalist/images/9/92/Cabejohnson.jpeg",
                cost: 1000,
                created_at: currentDate,
                updated_at: currentDate,
            },
            {
                name: "Perry Black",
                description: "Runs Newspaper Deliveries",
                business_type: "newspaper-delivery",
                image: "https://vignette.wikia.nocookie.net/adventure-capitalist/images/b/bf/Perryblack.jpeg",
                cost: 15000,
                created_at: currentDate,
                updated_at: currentDate,
            },
            {
                name: "W.W. Heisenbird",
                description: "Runs Car Washes",
                business_type: "car-wash",
                image: "https://vignette.wikia.nocookie.net/adventure-capitalist/images/c/c0/Heisenberg.jpeg",
                cost: 100000,
                created_at: currentDate,
                updated_at: currentDate,
            },
            {
                name: "Mama Sean",
                description: "Runs Pizza Deliveries",
                business_type: "pizza-delivery",
                image: "https://vignette.wikia.nocookie.net/adventure-capitalist/images/3/3b/Mama.jpeg",
                cost: 500000,
                created_at: currentDate,
                updated_at: currentDate,
            },
            {
                name: "Jim Thorton",
                description: "Runs Donut Shops",
                business_type: "donut-shop",
                image: "https://vignette.wikia.nocookie.net/adventure-capitalist/images/6/6e/Jimthorton.jpeg",
                cost: 1200000,
                created_at: currentDate,
                updated_at: currentDate,
            },
            {
                name: "Forest Trump",
                description: "Runs Shrimp Boats",
                business_type: "shrimp-boat",
                image: "https://vignette.wikia.nocookie.net/adventure-capitalist/images/8/81/Foresttrump.jpeg",
                cost: 10000000,
                created_at: currentDate,
                updated_at: currentDate,
            },
            {
                name: "Dawn Cheri",
                description: "Runs Hockey Teams",
                business_type: "hockey-team",
                image: "https://vignette.wikia.nocookie.net/adventure-capitalist/images/0/0e/Dawncherry.jpeg",
                cost: 111111111,
                created_at: currentDate,
                updated_at: currentDate,
            },
            {
                name: "Stefani Speilburger",
                description: "Runs Movie Studios",
                business_type: "movie-studio",
                image: "https://vignette.wikia.nocookie.net/adventure-capitalist/images/9/9f/Sspeilberg.jpeg",
                cost: 555555555,
                created_at: currentDate,
                updated_at: currentDate,
            },
            {
                name: "The Dark Lord",
                description: "Runs Banks",
                business_type: "bank",
                image: "https://vignette.wikia.nocookie.net/adventure-capitalist/images/4/4b/Darklord.jpeg",
                cost: 10000000000,
                created_at: currentDate,
                updated_at: currentDate,
            },
            {
                name: "Derrick Plainview",
                description: "Runs Oil Companies",
                business_type: "oil-company",
                image: "https://vignette.wikia.nocookie.net/adventure-capitalist/images/4/4d/Derrick.jpeg",
                cost: 100000000000,
                created_at: currentDate,
                updated_at: currentDate,
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('managers', null, {});
    }
};
