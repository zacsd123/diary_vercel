const loginId = document.getElementById("login-id");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

const color = () => {
    if (
        loginId.value.length > 0 &&
        loginId.value.indexOf("@") !== -1 &&
        password.value.length >= 5
    ) {
        loginBtn.style.backgroundColor = "#E67800";
        loginBtn.disabled = false;
    } else {
        loginBtn.style.backgroundColor = "#F5F5F5";
        loginBtn.disabled = true;
    }
};


loginId.addEventListener("keyup", color);
password.addEventListener("keyup", color);

const loginpage = document.getElementById("login-section");
const loginsuccess = document.getElementById("login-success");
loginBtn.addEventListener("click", (e) => {
    if (!loginBtn.disabled){
        loginpage.style.display = "block";
        // loginpage.style.display = "none";

        loginsuccess.style.display = "flex";
    }
});

const closeBtn = document.getElementById("login-s-btn");
closeBtn.addEventListener("click", (e) => {
    loginsuccess.style.display = "block";
    // loginsuccess.style.display = "none";
    loginpage.style.display = "flex";
});