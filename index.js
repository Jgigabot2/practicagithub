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

app.get('/test', (req, res) => {
    res.json({
        estado: "Exitoso.",
        mensaje: "Datos recibidos desde el backend",
        estudiante: "sorri maniga"
    });
});

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
});