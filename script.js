function askQuestion() {
    const question = document.getElementById('question').value;
    fetch(`https://hercai.onrender.com/v2/hercai?question=${question}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('answer').textContent = data.answer;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
