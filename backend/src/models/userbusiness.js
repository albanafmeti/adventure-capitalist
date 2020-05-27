'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserBusiness = sequelize.define('UserBusiness', {
        userId: DataTypes.INTEGER,
        businessId: DataTypes.INTEGER,
        upgradeCost: DataTypes.BIGINT,
        upgradeTime: DataTypes.INTEGER,
        upgradeCount: DataTypes.INTEGER,
        upgradePreviousGoal: DataTypes.INTEGER,
        upgradeCountGoal: DataTypes.INTEGER,
        token: DataTypes.STRING,
        managerId: DataTypes.INTEGER
    }, {
        tableName: 'user_business',
        underscored: true
    });

    UserBusiness.associate = function (models) {
        UserBusiness.belongsTo(models.Business, {
            foreignKey: 'business_id',
            as: 'business',
        });
        UserBusiness.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user',
        });
    };

    return UserBusiness;
};
