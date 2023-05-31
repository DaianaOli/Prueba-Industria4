// app.js
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
app.use('/', authRoutes);

// Ruta protegida
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Ruta protegida' });
});

// Manejador de errores genérico
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal, esto podría tardar...');
});

// Conectamos a la base de datos y arrancamos el servidor
sequelize.sync({ force: false }).then(() => {
  app.listen(3000, () => {
    console.log('Servidor andando...');
  });
});
