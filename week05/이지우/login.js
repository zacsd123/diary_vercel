const loginId = document.getElementById("login-id");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const popupchang = document.getElementById('popup');
const ok = document.getElementById('okok');

const color = () => {
    if (
        loginId.value.length > 0 &&
        loginId.value.indexOf("@") !== -1 &&
        password.value.length >= 5
    ) {
        loginBtn.style.backgroundColor = "#E67800"
        loginBtn.disabled = false; // 활성화 된 코드
    } else {
        loginBtn.style.backgroundColor = "#F5F5F5"
        loginBtn.disabled = true; // 비활성화 된 코드
    }
};

loginId.addEventListener("keyup", color);
password.addEventListener("keyup", color);

loginBtn.addEventListener("click", () => {
    popupchang.style.display = 'flex';
})

ok.addEventListener("click",() => {
    popupchang.style.display = 'none';
})