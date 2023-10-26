const conversation = [];

function askQuestion() {
    const question = document.getElementById('question').value;
    fetch(`https://hercai.onrender.com/v2/hercai?question="${question}"`)
        .then(response => response.json())
        .then(data => {
            const chatBody = document.getElementById('chat-body');
            const userMessage = `<div class="message user-message">${question}</div>`;
            const botMessage = `<div class="message bot-message">${JSON.stringify(data)}</div>`;
            conversation.push({ user: question, bot: data });
            chatBody.innerHTML += userMessage + botMessage;
            chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom of the chat
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayConversation() {
    const chatBody = document.getElementById('chat-body');
    chatBody.innerHTML = '';
    conversation.forEach(item => {
        const userMessage = `<div class="message user-message">${item.user}</div>`;
        const botMessage = `<div class="message bot-message">${JSON.stringify(item.bot)}</div>`;
        chatBody.innerHTML += userMessage + botMessage;
    });
    chatBody.scrollTop = chatBody.scrollHeight;
}
