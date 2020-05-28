'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserBusiness = sequelize.define('UserBusiness', {
        userId: DataTypes.INTEGER,
        businessId: DataTypes.INTEGER,
        upgradeCost: DataTypes.DOUBLE,
        upgradeTime: DataTypes.FLOAT,
        upgradeCount: DataTypes.INTEGER,
        upgradePreviousGoal: DataTypes.INTEGER,
        upgradeCountGoal: DataTypes.INTEGER,
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
        UserBusiness.belongsTo(models.Manager, {
            foreignKey: 'manager_id',
            as: 'manager',
        });
    };

    return UserBusiness;
};
