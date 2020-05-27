'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('businesses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            image: {
                type: Sequelize.STRING,
                allowNull: false
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false
            },
            initial_cost: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            coefficient: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            initial_time: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            initial_revenue: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            created_at: {
                allowNull: true,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('businesses');
    }
};
