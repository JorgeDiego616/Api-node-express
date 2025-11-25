const express = require('express');   // Importa express
const app = express();                // Crea la aplicación
const port = 3000;                    // Puerto donde correrá la API

// Middleware para leer JSON del body
app.use(express.json());

// Rutas de la API
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API con Node y Express');
});

// Ruta GET para obtener datos
app.get('/usuarios', (req, res) => {
  res.json([
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Maria' }
  ]);
});

// Ruta POST para recibir datos
app.post('/usuarios', (req, res) => {
  const nuevoUsuario = req.body;           // Lee lo que envía el cliente
  res.json({ mensaje: 'Usuario recibido', data: nuevoUsuario });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
