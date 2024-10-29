const { Client } = require('pg');

const client = new Client({
    user: 'tu_usuario',          // Cambia esto por tu nombre de usuario
    host: 'localhost',           // Usa 'localhost' si está en tu máquina
    database: 'tu_base_de_datos', // Cambia esto por el nombre de tu base de datos
    password: 'tu_contraseña',   // Cambia esto por tu contraseña
    port: 5432,                  // Este es el puerto por defecto de PostgreSQL
});

client.connect()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.error('Error de conexión', err.stack));

module.exports = client; // Esto permite que otros archivos usen esta conexión

