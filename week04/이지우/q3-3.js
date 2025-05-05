button = document.getElementById('ClickBtn');
button.addEventListener('click', () => {
    setTimeout(()=>{
        const msg2 = document.createElement('p');
        msg2.textContent = "안녕하세요";
        document.body.appendChild(msg2);
    },3000)
})