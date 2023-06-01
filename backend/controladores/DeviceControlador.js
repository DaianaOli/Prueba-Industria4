// const SerialPort = require('bluetooth-serial-port').BluetoothSerialPort;
// const serial = new SerialPort();


// // Función para obtener todos los dispositivos
// const obtenerDispositivos = async (req, res) => {
//     try {
//         const dispositivos = await serial.list();
//         res.json(dispositivos);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Algo salió mal, esto podría tardar...');
//     }
// }
// // Función para obtener datos de un dispositivo
// const obtenerDatosDispositivo = async (req, res) => {
//     try {
//         const { address } = req.params;
//         const dispositivo = await serial.findSerialPortChannel(address);
//         res.json(dispositivo);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Algo salió mal, esto podría tardar...');
//     }
// }
// // Función para conectar a un dispositivo
// const conectarDispositivo = async (req, res) => {
//     try {
//         const { address } = req.params;
//         const dispositivo = await serial.connect(address, 1);
//         res.json(dispositivo);
//     }
//     catch (error) {
//     console.log(error);
//     res.status(500).send('Algo salió mal, esto podría tardar...');
//     }
// }
// // Función para desconectar un dispositivo
// const desconectarDispositivo = async (req, res) => {
//     try {
//         const { address } = req.params;
//         const dispositivo = await serial.disconnect();
//         res.json(dispositivo);
//     }
//     catch (error) {
//     console.log(error);
//     res.status(500).send('Algo salió mal, esto podría tardar...');
//     }
// }
// // Función para escribir datos en un dispositivo
// const escribirDispositivo = async (req, res) => {
//     try {
//         const { address } = req.params;
//         const { data } = req.body;
//         const dispositivo = await serial.write(Buffer.from(data, 'utf-8'));
//         res.json(dispositivo);
//     }
//     catch (error) {
//     console.log(error);
//     res.status(500).send('Algo salió mal, esto podría tardar...');
//     }
// }
// // Función para leer datos de un dispositivo
// const leerDispositivo = async (req, res) => {
//     try {
//         const { address } = req.params;
//         const dispositivo = await serial.on('data', (buffer) => {
//             console.log(buffer.toString('utf-8'));
//         });
//         res.json(dispositivo);
//     }
//     catch (error) {
//     console.log(error);
//     res.status(500).send('Algo salió mal, esto podría tardar...');
//     }
// }
// // Función para obtener el estado de un dispositivo
// const estadoDispositivo = async (req, res) => {
//     try {
//         const { address } = req.params;
//         const dispositivo = await serial.isOpen();
//         res.json(dispositivo);
//     }
//     catch (error) {
//     console.log(error);
//     res.status(500).send('Algo salió mal, esto podría tardar...');
//     }
// }

// module.exports = {
//     obtenerDispositivos,
//     obtenerDatosDispositivo,
//     conectarDispositivo,
//     desconectarDispositivo,
//     escribirDispositivo,
//     leerDispositivo,
//     estadoDispositivo
// }

