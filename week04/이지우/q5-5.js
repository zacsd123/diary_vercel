const msg = document.getElementById('userInput');
const btn = document.getElementById('addMessage');
const msgCtn = document.getElementById('messageContainer');
btn.addEventListener('click', () => {
    const msg2 = document.createElement('p');
    msg2.textContent = msg.value;
    msgCtn.appendChild(msg2);
});