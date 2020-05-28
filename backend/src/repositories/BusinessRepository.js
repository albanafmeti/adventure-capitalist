const Repository = require('./Repository');
const Business = require('../models').Business;
const UserBusiness = require('../models').UserBusiness;
const Manager = require('../models').Manager;

class BusinessRepository extends Repository {

    static getBusinesses(user = null) {


        if (user) {
            return UserBusiness.findAll({
                where: {user_id: user.id},
                include: [
                    {
                        model: Business,
                        as: 'business',
                    },
                    {
                        model: Manager,
                        as: 'manager',
                    },
                ]
            });
        }

        return Business.findAll();
    }

    static findByType(type) {
        return Business.findOne({
            where: {type: type},
        });
    }

    static getManagers(where = {}) {
        return Manager.findAll({where: where});
    }

    static purchaseBusiness(user, businessData) {

        return UserBusiness.create({
            userId: user.id,
            businessId: businessData.id,
            upgradeCost: businessData.upgradeCost ? businessData.upgradeCost : businessData.initialCost,
            upgradeTime: businessData.upgradeTime ? businessData.upgradeTime : businessData.initialTime,
            upgradeCount: businessData.upgradeCount ? businessData.upgradeCount : 1,
            upgradePreviousGoal: businessData.upgradePreviousGoal ? businessData.upgradePreviousGoal : 0,
            upgradeCountGoal: businessData.upgradeCountGoal ? businessData.upgradeCountGoal : 25,
            managerId: businessData.managerId ? businessData.managerId : null,
        });
    }


    static async updateMyBusiness(user, businessData) {

        await UserBusiness.update({
            upgradeCost: businessData.upgradeCost ? businessData.upgradeCost : businessData.initialCost,
            upgradeTime: businessData.upgradeTime ? businessData.upgradeTime : businessData.initialTime,
            upgradeCount: businessData.upgradeCount ? businessData.upgradeCount : 1,
            upgradePreviousGoal: businessData.upgradePreviousGoal ? businessData.upgradePreviousGoal : 0,
            upgradeCountGoal: businessData.upgradeCountGoal ? businessData.upgradeCountGoal : 25,
            managerId: businessData.managerId ? businessData.managerId : null,
        }, {
            where: {businessId: businessData.id, userId: user.id}
        });
    }
}

module.exports = BusinessRepository;
