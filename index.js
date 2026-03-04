const app = express();
const PORT = 3000;

app.use(express.static('public'));
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