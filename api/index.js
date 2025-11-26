const express = require('express');
const app = express();

// Middleware para leer JSON del body
app.use(express.json());

// Rutas de la API
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API con Node y Express en Vercel');
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

// Exportamos la app en lugar de ejecutar listen
module.exports = app;
