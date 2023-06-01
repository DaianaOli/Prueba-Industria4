const express = require('express');
const router = express();
const { crearUsuario, loginUsuario } = require('../controladores/UsuariosControlador');
// const { conectarDispositivo,desconectarDispositivo,escribirDispositivo,estadoDispositivo,leerDispositivo,obtenerDatosDispositivo, obtenerDispositivos } = require('../controladores/DeviceControlador')

router.post('/registro', crearUsuario);
router.post('/login', loginUsuario);
// router.get('/dispositivos', obtenerDispositivos);
// router.get('/dispositivos/:address', obtenerDatosDispositivo);
// router.get('/conectar/:address', conectarDispositivo);
// router.get('/desconectar/:address', desconectarDispositivo);
// router.post('/escribir/:address', escribirDispositivo);
// router.get('/leer/:address', leerDispositivo);
// router.get('/estado/:address', estadoDispositivo);




module.exports = router;
