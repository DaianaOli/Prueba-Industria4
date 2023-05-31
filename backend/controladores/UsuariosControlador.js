const {Usuario} = require('../database');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Ruta para el registro de usuarios
async function crearUsuario(req, res) {
    // Validar datos
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Faltan datos' });
    }
  
    try {
      // Verificar si ya existe un usuario con el mismo username
      const existingUser = await Usuario.findOne({ where: { username } });
      if (existingUser) {
        return res.status(409).json({ message: 'El username ya está en uso' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      await Usuario.create({
        username,
        password: hashedPassword,
      });
      res.json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al registrar el usuario' });
    }
  }
  

// Ruta para el inicio de sesión
async function loginUsuario (req,res){
    // Validar datos
    const { username, password } = req.body;
    if(!username || !password){
        return res.status(400).json({message: 'Faltan datos'});
    }
    try {
        const usuario = await Usuario.findOne({ username });
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        const validPassword = await bcrypt.compare(password, usuario.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
        const token = jwt.sign({ id: usuario._id }, 'secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
}

module.exports = {
    crearUsuario,
    loginUsuario
}