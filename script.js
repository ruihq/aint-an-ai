const conversation = [];

function askQuestion() {
    const inputField = document.getElementById('question');
    const question = inputField.value.trim();
    
    // Check if the input field is not empty
    if (question === '') {
        return;
    }

    // Clear the input field
    inputField.value = '';

    // Send the question to the API
    fetch(`https://hercai.onrender.com/v2/hercai?question="${question}"`)
        .then(response => response.json())
        .then(data => {
            const chatBody = document.getElementById('chat-body');
            const userMessage = `<div class="message user-message">${question}</div>`;
            const botMessage = `<div class="message bot-message">${data.content}</div>`; // Extracting the response text from the API data
            conversation.push({ user: question, bot: data.content }); // Storing only the response text in the conversation history
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
        const botMessage = `<div class="message bot-message">${item.bot}</div>`;
        chatBody.innerHTML += userMessage + botMessage;
    });
    chatBody.scrollTop = chatBody.scrollHeight;
}
