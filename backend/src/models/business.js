'use strict';
module.exports = (sequelize, DataTypes) => {
    const Business = sequelize.define('Business', {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        type: DataTypes.STRING,
        initialCost: DataTypes.DOUBLE,
        coefficient: DataTypes.FLOAT,
        initialTime: DataTypes.FLOAT,
        initialRevenue: DataTypes.BIGINT
    }, {
        tableName: 'businesses',
        underscored: true
    });

    Business.associate = function (models) {
        // associations can be defined here
    };

    return Business;
};
