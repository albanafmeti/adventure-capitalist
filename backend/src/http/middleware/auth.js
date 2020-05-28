const User = require('../../models').User;
const ResponseService = require('../../services/ResponseService');

const auth = async (request, response, next) => {

    const accessToken = request.accessToken;

    if (!accessToken) {
        return ResponseService.setResponse(response).withError("You need to login.", 401);
    }

    const user = await User.findOne({where: {token: accessToken}});

    if (user) {
        request['user'] = user;
        return next();
    }

    return ResponseService.setResponse(response).withError("You need to login.", 401);
};

module.exports = auth;
