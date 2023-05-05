const basicAuth = (req, res, next) => {
    console.log(req)
    console.log(req.headers.authorization)

    if (req.path === '/users/validateAndGetUser') {
        return next();
    }

    // check for basic auth header
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({ message: 'Missing Authorization Header' });
    }

    // verify auth credentials
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [userName, password] = credentials.split(':');
    if (!(userName === 'testing' && password === 'testing')) {
        return res.status(401).json({ message: 'Invalid Authentication Credentials' });
    }
    next();
}

module.exports = basicAuth;

//https://jasonwatmore.com/post/2018/09/24/nodejs-basic-authentication-tutorial-with-example-api
//dGVzdGluZzp0ZXN0aW5n