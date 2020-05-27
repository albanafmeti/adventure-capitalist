class ResponseService {

    constructor() {
        this.response = null;
    }

    /**
     * Set the response object.
     *
     * @param response
     * @returns {ResponseService}
     */
    setResponse(response) {
        this.response = response;
        return this;
    }

    /**
     * Set body which will be sent via response.
     *
     * @param body
     * @param status
     * @param headers
     * @returns {*|Promise<any>}
     */
    withBody(body, status = 200, headers = null) {
        return this.response.status(status).json(body);
    }

    /**
     * Set message, data which will be sent via response with success = true.
     *
     * @param message
     * @param data
     * @param status
     * @param headers
     * @returns {*|Promise<any>}
     */
    withSuccess(message, data = null, status = 200, headers = null) {
        return this.response.status(status).json({
            success: true,
            message: message,
            data: data,
        });
    }

    /**
     * Set message, data that will be sent via response with success = false.
     *
     * @param message
     * @param status
     * @param data
     * @param headers
     * @param errors
     * @returns {*|Promise<any>}
     */
    withError(message, status = 500, data = null, headers = null, errors = null) {

        const respondData = {
            success: false,
            message: message,
            data: data,
        };

        if (errors) {
            respondData.errors = errors;
        }

        return this.response.status(status).json(respondData);
    }
}

module.exports = new ResponseService();
