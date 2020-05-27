'use strict';

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        token: DataTypes.STRING,
        credits: DataTypes.INTEGER,
    }, {
        tableName: 'users',
        underscored: true
    });

    User.associate = function (models) {

        User.belongsToMany(models.UserBusiness, {
            foreignKey: 'user_id',
            through: 'user_business',
            as: 'businesses',
        });
    };

    return User;
};
