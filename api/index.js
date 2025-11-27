const express = require('express');
const app = express();

// Middleware para leer JSON del body
app.use(express.json());

// Rutas de la API
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Jorge Chaparro con Node y Express en Vercel');
});

app.get('/usuarios', (req, res) => {
  res.json([
    { id: 1, nombre: 'Mario' },
    { id: 2, nombre: 'Jorge' }
  ]);
});

app.post('/usuarios', (req, res) => {
  const nuevoUsuario = req.body;
  res.json({ mensaje: 'Usuario recibido', data: nuevoUsuario });
});

// Ruta GET para Misión ULSA
app.get('/mision-ulsa', (req, res) => {
  res.json({
    mision: "Somos una institución que forma parte de una red global de inspiración cristiana lasallista; comprometida con la educación profesional y formación integral de las personas quienes, con su acción transformadora, trasciendan al coadyuvar en la construcción de una ciudadanía responsable y solidaria, en el cambio social y el cuidado de la Casa Común"
  });
});


// Exportamos la app en lugar de ejecutar listen
module.exports = app;
