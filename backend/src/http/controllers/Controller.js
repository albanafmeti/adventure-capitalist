const ResponseService = require('../../services/ResponseService');

class Controller {

    responseService(response = null) {
        return ResponseService.setResponse(response);
    }
}

module.exports = Controller;
