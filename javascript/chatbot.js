const qa = [
    { key: "skills", resp: "I know Python and I like to develop web applications." },
    { key: "github", resp: "Check my work at github.com/stamatinmircea00" },
    { key: "contact", resp: "You can email me at mircea.stamatin00@e-uvt.ro" },
    { key: "grade", resp: "You deserve a 10!"},
    { key: "doesn't", resp: "You don't deserve a 4!"}

];

document.getElementById('chat-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('user-input');
    const val = input.value.toLowerCase();
    const window = document.getElementById('chat-window');

    window.innerHTML += `<p><strong>You:</strong> ${val}</p>`;

    const found = qa.find(item => val.includes(item.key));
    const reply = found ? found.resp : "I don't know that yet. Try 'skills'.";
    
    setTimeout(() => {
        window.innerHTML += `<p style="color: #4f8ef7;"><strong>Bot:</strong> ${reply}</p>`;
        window.scrollTop = window.scrollHeight;
    }, 500);

    input.value = "";
});

document.getElementById('clear-btn').addEventListener('click', () => {
    const window = document.getElementById('chat-window');
    window.innerHTML = '<div class="bot-msg">Bot: Hello! Ask me about \'skills\', \'github\', \'grade\', or \'contact\'.</div>';
});