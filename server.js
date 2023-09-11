const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/ChatReact/dist'));
const corsOptions = {
  origin: ['http://localhost:5173'],
  optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));


io.on('connection', (socket) => {
  console.log('Usuario conectado:', socket.id);

  socket.on('chat message', (message) => {
    socket.broadcast.emit('chat message', message);
    console.log(message)
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado:', socket.id);
  });

  socket.on('error', (error) => {
    console.error('Error de conexión:', error);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});