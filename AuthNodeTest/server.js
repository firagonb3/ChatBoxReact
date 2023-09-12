const express = require('express');
const cors = require('cors');
const app = express();
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');

const corsOptions = {
  origin: ['http://localhost:5173'],
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
    audience: 'https://dev-l7owe0cd4jlvwoe1.us.auth0.com/api/v2/',
    issuerBaseURL: `https://dev-l7owe0cd4jlvwoe1.us.auth0.com/`,
});

// This route doesn't need authentication
app.get('/api/public', function (req, res) {
    res.json({
        message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
    });
});

// This route needs authentication
app.get('/api/private', checkJwt, function (req, res) {
    res.json({
        message: 'Hello from a private endpoint! You need to be authenticated to see this.'
    });
});

const checkScopes = requiredScopes('read:messages');

app.get('/api/private-scoped', checkJwt, checkScopes, function (req, res) {
    res.json({
        message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
    });
});

app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});


