const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize}  = require('./database');
const authRoutes = require('./routes/auth');
const authenticateToken = require('./middleware/auth');
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

// Rutas principales
app.use('/auth', authRoutes);

// Ruta protegida
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Ruta protegida' });
});

// Manejador de errores genérico
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal, esto podría tardar...');
});

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: '6pZA0XY164ly7cd1assdA7fe5LB5G34I',
  issuerBaseURL: 'https://dev-oppodk-5.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// Conectamos a la base de datos y arrancamos el servidor
sequelize.sync({ force: false }).then(() => {
  app.listen(3000, () => {
    console.log('Servidor andando...');
  });
});
