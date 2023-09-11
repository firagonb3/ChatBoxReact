export default function initSocket({ server }) {
    return process.env.NODE_ENV === 'development' ? io(server, { transports: ['websocket'] }) : io();
}

export function socketEmit({ socket, message }) {
    socket.emit('chat message', message);
} 

export function socketReceived({ socket, func }) {
    socket.on('chat message', func);
}