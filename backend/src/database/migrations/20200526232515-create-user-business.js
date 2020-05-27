'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('user_business', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'users',
                    },
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            business_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'businesses',
                    },
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            upgrade_cost: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            upgrade_time: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            upgrade_count: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1
            },
            upgrade_previous_goal: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            upgrade_count_goal: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 25
            },
            token: {
                allowNull: true,
                type: Sequelize.STRING
            },
            manager_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'managers',
                    },
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
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
        return queryInterface.dropTable('user_business');
    }
};
