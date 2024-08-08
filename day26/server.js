const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
    console.log('Client connected');

    socket.on('message', message => {
        try {
            const messageObject = JSON.parse(message);
            server.clients.forEach(client => {
                if (client !== socket && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(messageObject));
                }
            });
        } catch (e) {
            console.error('Error parsing message:', e);
        }
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
