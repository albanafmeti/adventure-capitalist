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
                ]
            });
        }

        return Business.findAll();
    }

    static getManagers(where = {}) {
        return Manager.findAll({where: where});
    }
}

module.exports = BusinessRepository;
