// scripts.js

let loggedInUser = null;
const canvas = document.getElementById('canvasContainer');

// Create 1000x1000px canvas grid
for (let i = 0; i < 1000; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('click', () => {
        if (loggedInUser) {
            const color = prompt('Enter a color in hex format (e.g., #ff0000):');
            if (color) pixel.style.backgroundColor = color;
        } else {
            alert('Please log in to edit the canvas.');
        }
    });
    canvas.appendChild(pixel);
}

// Show login modal
function showLoginForm() {
    document.getElementById('loginModal').style.display = 'block';
}

// Show register modal
function showRegisterForm() {
    document.getElementById('registerModal').style.display = 'block';
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Dummy login function
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    // Normally, you'd send this data to your server to verify the user
    if (username && password) {
        loggedInUser = { username: username };
        document.getElementById('loginMessage').innerText = `Welcome, ${username}`;
        closeModal('loginModal');
    }
}

// Dummy register function
function register() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    // Normally, you'd send this data to your server to create the user
    if (username && email && password) {
        alert('Registration successful. Please log in.');
        closeModal('registerModal');
    }
}

// Chat functionality
const chatMessages = [];
function sendMessage() {
    const message = document.getElementById('chatInput').value;
    if (message && loggedInUser) {
        chatMessages.push({ user: loggedInUser.username, message: message });
        updateMessages();
        document.getElementById('chatInput').value = '';  // clear input
    } else {
        alert('Please log in to send messages.');
    }
}

function updateMessages() {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = '';
    chatMessages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.innerText = `${msg.user}: ${msg.message}`;
        messagesDiv.appendChild(messageElement);
    });
}
