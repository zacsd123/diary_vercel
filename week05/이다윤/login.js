const loginId = document.getElementById("login-id");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const loginSection = document.getElementById("login-section");
const loginScsSection = document.getElementById("login-scs-section");

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

loginBtn.addEventListener("click", () => {
  loginSection.style.display = "none";
  loginScsSection.style.display = "flex";
});

const okBtn = document.getElementById("ok");
okBtn.addEventListener("click", () => {
  loginScsSection.style.display = "none";
  loginSection.style.display = "flex";
});
