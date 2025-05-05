const loginId = document.querySelector("#login-id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#login-btn");

const loginSection = document.querySelector("#login-section")
const loginedSection = document.querySelector("#logined-section")

const color = () => {
    // console.log(loginId.value.indexOf("@"), loginId.value.length, password.value.length);
    if (
        loginId.value.length >= 0 &&
        loginId.value.indexOf("@") !== -1 &&
        password.value.length >= 5
    ) {
        loginBtn.style.backgroundColor = "#E67800";
        loginBtn.disabled = false;
    } else {
        loginBtn.style.backgroundColor = "#F5F5F5";
        loginBtn.disabled = true;

    };
};

loginId.addEventListener("keyup", color);
password.addEventListener("keyup", color);

const Login = () => {
    loginSection.style.display = "none";
    loginedSection.style.display = "flex";
};

loginBtn.addEventListener("click", (event) => {
    Login();
});