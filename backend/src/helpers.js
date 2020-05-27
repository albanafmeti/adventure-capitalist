const moment = require('moment');

function simpleResponse(success, message = "", data = null, status = 200) {

    return {
        success,
        message,
        data,
        status
    };
}

function strRandom(length) {
    let result = "";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function inArray(needle, haystack) {

    const length = haystack.length;
    for (let i = 0; i < length; i++) {
        if (haystack[i] === needle) return true;
    }

    return false;
}

function formatDate(timestamp, format = 'YYYY-MM-DD h:m:s') {
    return moment.unix(timestamp).format(format);
}


module.exports = {
    simpleResponse,
    strRandom,
    inArray,
    formatDate,
};
