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

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    loginId.value.length > 0 &&
    loginId.value.indexOf("@") !== -1 &&
    password.value.length >= 5
  ) {
    // 로그인 성공 시 섹션 전환
    document.getElementById("login-section").style.display = "none";
    document.getElementById("login-scs-section").style.display = "flex";
  } else {
    alert("이메일 형식과 비밀번호를 확인해주세요.");
  }
});
document.getElementById("ok").addEventListener("click", function () {
  document.getElementById("login-section").style.display = "flex";
  document.getElementById("login-scs-section").style.display = "none";
});
// indexOf('@') !== -1 → "문자열에 @가 있다"는 뜻
// indexOf('@') === -1 → "문자열에 @가 없다"는 뜻
