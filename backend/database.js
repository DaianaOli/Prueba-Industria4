const Sequelize  = require ('sequelize');
require('dotenv').config();

// Obtenemos las credenciales de la base de datos desde las variables de entorno
const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

// Creamos una nueva instancia de Sequelize
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  port: DB_PORT,
});

// Definimos el modelo
const Usuario = require('./modelos/Usuario')(sequelize,Sequelize)

module.exports = {
  sequelize,
  Usuario
}
