const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticación requerido' });
  }

  jwt.verify(token, process.env.AUTH0_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token de autenticación inválido' });
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
