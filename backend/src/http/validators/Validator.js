const {validationResult} = require('express-validator');
const ResponseService = require('../../services/ResponseService');
const inArray = require('../../helpers').inArray;

const customValidationResult = validationResult.withDefaults({
    formatter: (error) => {
        return {
            field: error.param,
            message: error.msg,
        };
    }
});

class Validator {

    static apply(validator) {

        return async (request, response, next) => {

            if (validator.authorize) {
                const isAuthorized = validator.authorize(request);
                if (!isAuthorized) {
                    return ResponseService.setResponse(response).withError("You are not authorized.", 403);
                }
            }

            const validations = validator.rules(request);

            await Promise.all(validations.map(validation => validation.run(request)));

            const errors = customValidationResult(request);

            if (!errors.isEmpty()) {

                return ResponseService.setResponse(response).withError("The given data was invalid.", 422, null, null, errors.array());
            }

            next();
        }
    }
}

module.exports = Validator;
