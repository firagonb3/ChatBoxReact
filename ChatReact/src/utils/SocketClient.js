export default function initSocket({ server }) {
    return process.env.NODE_ENV === 'development' ? io(server, { transports: ['websocket'] }) : io();
}

export function socketID({ socket, id }) {
    socket.emit('set-user-id', id);
}

export function socketEmit({ socket, toUserId, message }) {
    socket.emit('private-message', { toUserId, message });
} 

export function socketReceived({ socket, func }) {
    socket.on('private-message', func);
}