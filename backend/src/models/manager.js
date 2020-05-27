'use strict';
module.exports = (sequelize, DataTypes) => {
    const Manager = sequelize.define('Manager', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        businessType: DataTypes.STRING,
        image: DataTypes.STRING,
        cost: DataTypes.BIGINT
    }, {
        tableName: 'managers',
        underscored: true
    });

    Manager.associate = function (models) {
        // associations can be defined here
    };

    return Manager;
};
