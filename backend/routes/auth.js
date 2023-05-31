// routes/auth.js
const express = require('express');
const router = express();
const { crearUsuario, loginUsuario } = require('../controladores/UsuariosControlador');

router.post('/registro', crearUsuario);
router.post('/login', loginUsuario);



module.exports = router;
