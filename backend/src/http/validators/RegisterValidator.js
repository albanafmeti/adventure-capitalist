const {body} = require('express-validator');
const UserRepository = require('../../repositories/UserRepository');

class RegisterValidator {

    authorize(request) {
        return true;
    }

    rules(request) {
        return [
            body('username').not().isEmpty().withMessage('Username is required.'),
            body('username').custom(this.isUniqueUsername),
            body('password').not().isEmpty().withMessage('Password is required.'),
            body('password').custom(this.passwordConfirmation(request)),
        ];
    }

    isUniqueUsername(username) {
        return UserRepository.findByUsername(username, null).then(user => {
            if (user) {
                return Promise.reject('Username already in use.');
            }

            return true;
        });
    }

    passwordConfirmation(request) {

        return (password) => {

            if (password !== request.body.passwordConfirmation) {
                return Promise.reject('Passwords do not match.');
            }

            return true;
        }
    }
}

module.exports = new RegisterValidator();
