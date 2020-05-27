const {body} = require('express-validator');

class LoginValidator {

    authorize(request) {
        return true;
    }

    rules(request) {
        return [
            body('username').not().isEmpty().withMessage('Username is required.'),
            body('password').not().isEmpty().withMessage('Password is required.'),
        ];
    }
}

module.exports = new LoginValidator();
