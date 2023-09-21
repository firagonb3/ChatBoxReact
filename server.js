const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const users = {};

app.use(express.static(__dirname + '/ChatReact/dist'));

const corsOptions = {
  origin: ['http://localhost:5173'],
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

io.on('connection', (socket) => {
  console.log('Usuario conectado:', socket.id);

  socket.on('set-user-id', (userId) => {
    if (!users.hasOwnProperty(userId)) {
      users[userId] = socket.id;
    } else {
      console.log(`El usuario ${userId} ya tiene un ID asignado.`);
    }
    console.log(socket +": "+ users[userId])
    console.log(users)
  });

  socket.on('private-message', ({ toUserId, message }) => {
    const toSocketId = users[toUserId];

    if (toSocketId) {
      io.to(toSocketId).emit('private-message', message);
    }
  });

  socket.on('disconnect', () => {
    for (const userId in users) {
      if (users[userId] === socket.id) {
        console.log('Usuario desconectado:', socket.id);
        delete users[userId];
        console.log(users)
        break;
      }
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto http://localhost:${PORT}`);
});