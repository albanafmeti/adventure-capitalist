const axiosInstance = require('axios').create();

class HttpClient {

    /**
     * Set the base URL for the http client.
     *
     * @param baseUrl
     * @returns {HttpClient}
     */
    baseUrl(baseUrl) {
        axiosInstance.defaults.baseURL = baseUrl;
        return this;
    }

    /**
     * Set bearer token needed for authorization header.
     *
     * @param token
     * @returns {HttpClient}
     */
    bearerToken(token) {

        if (!axiosInstance.defaults.headers) {
            axiosInstance.defaults.headers = {};
        }

        axiosInstance.defaults.headers['Authorization'] = "Bearer " + token;

        return this;
    }

    /**
     * Set basic token needed for authorization header.
     *
     * @param token
     * @returns {HttpClient}
     */
    basicToken(token) {

        if (!axiosInstance.defaults.headers) {
            axiosInstance.defaults.headers = {};
        }

        axiosInstance.defaults.headers['Authorization'] = "Basic " + token;

        return this;
    }

    /**
     * Add a new header to axios instance.
     *
     * @param key
     * @param value
     * @returns {HttpClient}
     */
    addHeader(key, value) {
        axiosInstance.defaults.headers[key] = value;
        return this;
    }

    /**
     * Make a GET request.
     *
     * @param url
     * @param options
     * @returns {*}
     */
    get(url, options = {}) {
        return axiosInstance.get(url, options);
    }

    /**
     * Make a POST request.
     *
     * @param url
     * @param data
     * @param options
     * @returns {*}
     */
    post(url, data, options = {}) {
        return axiosInstance.post(url, data, options);
    }

    /**
     * Make a PUT request.
     *
     * @param url
     * @param data
     * @param options
     * @returns {AxiosPromise<any> | IDBRequest<IDBValidKey> | Promise<void>}
     */
    put(url, data, options = {}) {
        return axiosInstance.put(url, data, options);
    }

    /**
     * Make a DELETE request.
     *
     * @param url
     * @param options
     * @returns {*}
     */
    delete(url, options = {}) {
        return axiosInstance.delete(url, options);
    }

    /**
     * Make a HEAD request.
     *
     * @param url
     * @param options
     * @returns {*}
     */
    head(url, options = {}) {
        return axiosInstance.head(url, options);
    }
}

module.exports = new HttpClient();
