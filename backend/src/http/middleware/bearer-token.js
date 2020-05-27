const bearerToken = (req, res, next) => {
    let token;

    if (req.headers) {
        if (req.headers.authorization) {
            const parts = req.headers.authorization.split(' ');
            if (parts.length === 2 && parts[0] === 'Bearer') {
                token = parts[1];
            }
        }
    }

    req['accessToken'] = token;
    next();
};

module.exports = bearerToken;
