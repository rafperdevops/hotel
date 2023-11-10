const express = require('express');
const mongoose = require('mongoose');
const roomRoutes = require('./routes/roomRoutes');

const app = express();
const PORT = 3000;

// mongoose.connect('mongodb://mongo_server:27017/reservas', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
// db.once('open', () => {
//   console.log('Conexión exitosa a la base de datos');
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/rooms', roomRoutes);

app.listen(PORT, () => {
  console.log(`Corriendo servidor en el puerto ${PORT}`);
});
