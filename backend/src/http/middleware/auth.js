const User = require('../../models').User;

const auth = async (request, response, next) => {

    const accessToken = request.accessToken;

    const user = await User.findOne({where: {token: accessToken}});

    if (user) {
        request['user'] = user;
        next();
    }

    return false;
};

module.exports = auth;
