const ResponseService = require('../../services/ResponseService');


const errorHandler = (error, request, response, next) => {

    if (error) {

        if (process.env.APP_ENV !== 'production') {
            return ResponseService.setResponse(response).withError(error.message);
        }

        return ResponseService.setResponse(response).withError("Something went wrong.");
    }
};

module.exports = errorHandler;
