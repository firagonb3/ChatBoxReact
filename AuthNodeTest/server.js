const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // Para trabajar con tokens JWT

const app = express();

// Middleware para verificar la autenticación
function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.sendStatus(401); // Unauthorized

    jwt.verify(token, 'GH9bWXmzQf0FK60vxxm7LNtbdiou82XNC_Rjdf2VcSmniL-o28R2iOEk5xEXPEvx', (err, user) => {
        console.error('Error de verificación de token:', err);
        if (err) return res.sendStatus(403); // Forbidden

        req.user = user;
        next();
    });
}

app.use(express.static(__dirname + '/ChatReact/dist'));
const corsOptions = {
    origin: ['http://localhost:5173'],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// Ruta protegida para obtener datos del usuario autenticado
app.get('/api/secure-data', authenticateToken, (req, res) => {
    // En este ejemplo, req.user contiene los datos del usuario autenticado
    res.json({ message: 'Acceso a datos protegidos', user: req.user });
});

app.listen(3000, () => {
    console.log('Servidor en funcionamiento en el puerto 3000');
});