const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const { domain, audience } = require('../config/env.dev');

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://dev-njufz051.us.auth0.com/.well-known/jwks.json`,
    }),

    audience: "https://express.pizza",
    issuer: `https://dev-njufz051.us.auth0.com/.well-known/jwks.json`,
    algorithms: ['RS256'],
});

module.exports = {
    checkJwt,
};
