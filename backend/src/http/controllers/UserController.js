const Controller = require('./Controller');
const UserRepository = require('../../repositories/UserRepository');
const UserResource = require('../resources/UserResource');
const bcrypt = require('bcryptjs');

class UserController extends Controller {

    async login(request, response) {

        const username = request.body.username;
        const password = request.body.password;

        const user = await UserRepository.findByUsername(username);

        if (!user) {
            return super.responseService(response).withError("User not found.");
        }

        const equal = bcrypt.compareSync(password, user.password);

        if (!equal) {
            return super.responseService(response).withError("Credentials do not match.", 401);
        }

        let userFresh = await UserRepository.updateToken(user);

        return super.responseService(response).withSuccess(`Welcome ${user.username}. Start making money awesomely!`, {
            "user": UserResource.toArray(userFresh),
            "token": userFresh.token,
        });
    }

    async register(request, response) {

        const user = await UserRepository.createUser(request);

        if (!user) {
            return super.responseService(response).withError("User could not be created.");
        }

        return super.responseService(response).withSuccess(`You have been registered successfully! Login and play this awesome game.`, {
            "user": UserResource.toArray(user)
        });
    }

    async currentUser(request, response) {
        const token = request.accessToken;

        const user = await UserRepository.findByToken(token);

        if (!user) {
            return super.responseService(response).withError("User not found.", 401);
        }

        return super.responseService(response).withSuccess("User profile.", {
            "user": UserResource.toArray(user)
        });
    }
}

module.exports = new UserController();
