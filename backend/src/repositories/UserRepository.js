const Repository = require('./Repository');
const User = require('../models').User;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

class UserRepository extends Repository {

    static async createUser(request) {

        const requestData = request.body;
        let token = crypto.randomBytes(64).toString('hex');
        const hash = bcrypt.hashSync(requestData.password, bcrypt.genSaltSync(10));

        return User.create({
            username: requestData.username,
            password: hash,
            token: token,
            credits: 0,
        });
    }

    static async updateToken(user) {
        let token = crypto.randomBytes(64).toString('hex');

        return user.update({
            token: token
        });
    }

    static findByUsername(username, excludeId = null) {

        let conditions = {username: username};

        if (excludeId) {
            conditions.id = {[Op.not]: excludeId};
        }

        return User.findOne({
            where: conditions,
        });
    }

    static findByToken(token) {
        return User.findOne({
            where: {token: token},
        });
    }
}

module.exports = UserRepository;
