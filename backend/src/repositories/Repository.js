const HttpClient = require('../services/HttpClient');

/**
 * Parent repository class.
 */
class Repository {

    /**
     * Set bearer token to the http client.
     * @param token
     */
    static setAccessToken(token) {
        HttpClient.bearerToken(token);
        return Repository;
    }
}

module.exports = Repository;
