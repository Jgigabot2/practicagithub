const express = require('express')
// Importa y ejecuta la función principal de Express para crear una aplicación
const app = express();
// Define el puerto en el que el servidor va a escuchar
const PORT = 3000;

// Sirve archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Permite que el servidor interprete datos en formato JSON
// enviados en el cuerpo (body) de las peticiones HTTP

app.use(express.json());


// Define una ruta GET en '/test'.
// Cuando alguien accede a http://localhost:PORT/test,
// el servidor responde con un objeto JSON.
app.get('/test', (req, res) => {
    res.json({
        estado: "Exitoso.",
        mensaje: "Datos recibidos desde el backend",
        estudiante: "sorri maniga"
    });
});

// Inicia el servidor y lo pone a escuchar en el puerto definido en la variable PORT.
// Se Inicia mediante la consola escribiendo "node index.js"
// Una vez que el servidor está activo, muestra un mensaje en la consola.
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
});