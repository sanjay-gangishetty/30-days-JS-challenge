const socket = new WebSocket('ws://localhost:8080');

const usernameContainer = document.getElementById('username-container');
const usernameInput = document.getElementById('username-input');
const joinButton = document.getElementById('join-button');
const chatContainer = document.getElementById('chat-container');
const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

let username = '';

joinButton.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (username !== '') {
        usernameContainer.style.display = 'none';
        chatContainer.style.display = 'flex';
    }
});

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        const messageObject = { username, message };
        socket.send(JSON.stringify(messageObject));
        displayMessage(`You: ${message}`, 'you');
        messageInput.value = '';
    }
});

messageInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

socket.addEventListener('message', event => {
    try {
        const { username: sender, message } = JSON.parse(event.data);
        const messageClass = sender === username ? 'you' : 'other';
        displayMessage(`${sender}: ${message}`, messageClass);
    } catch (e) {
        console.error('Error parsing message:', e);
    }
});

socket.addEventListener('open', () => {
    console.log('Connected to the WebSocket server');
});

socket.addEventListener('close', () => {
    console.log('Disconnected from the WebSocket server');
});

const displayMessage = (message, className) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.className = `message ${className}`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
};
