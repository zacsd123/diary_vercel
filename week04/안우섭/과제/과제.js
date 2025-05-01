// 객체-예제문제1
// student 객체에서 아래 값을 출력하는 코드를 작성하세요.
console.log(student.name);
console.log(student.isGraduated);
console.log(student.subjects[1]);
console.log(student.address.city);

// 문제 2. 객체의 메서드 호출
console.log(student.getStudentInfo());
// 홍길동은 20세이고, 서울에 살고 있습니다.

// 문제 3. 객체의 프로퍼티 수정
student.age = 21;

student.addSubject("컴퓨터");

console.log(student.subjects);
//수학, 영어, 과학, 컴퓨터

// 문제 4. 중첩 객체 활용
student.address.street = "서초구 반포동";
console.log(student.address.street);
//서초구 반포동

// 비구조화 할당 - 예제문제 1
function displayPerson({ name, age }) {
  console.log(`이름: ${name}`);
  console.log(`나이: ${age}`);
}
//객체를 통으로 받지 말고, 받을 때 속성만 골라서 받자. (= 비구조화 할당)

// 비구조화 할당 - 예제문제 2
const user = {
  name: "이지은",
  age: 30,
  job: "가수",
  address: {
    city: "서울",
    district: "강남구",
  },
};

const {
  name,
  age,
  job,
  address: { city, district },
} = user;

// 함수 심화 - 예제문제 1
const greeting = (name) => `안녕하세요, ${name}님!`;
console.log(greeting("김미미"));

// 함수 심화 - 예제문제 2
let fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});

// 함수 심화 - 예제문제 3
document.getElementById("ClickBtn").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementById("message").innerText = "안녕하세요!";
  }, 3000);
});

// 동기/비동기 - 예제문제 1
let htmlContainer = document.getElementById("htmlContainer");
let updateButton = document.getElementById("updateHtml");
let htmlInput = document.getElementById("htmlInput");

updateButton.addEventListener("click", async function () {
  let userInputHtml = await htmlInput.value;
  htmlContainer.innerHTML = userInputHtml;
});

// 동기/비동기 - 예제문제 2
// 1
// 2
// 3
// 마지막 줄

//"잡힌 에러: 에러 발생"
// 계속 진행

// 시작
// 2초 후 완료
// 끝

// DOM 조작과 이벤트 처리 - 예제문제 1
document.getElementById("myButton").onclick = function () {
  console.log("버튼이 클릭되었습니다!");
};
// DOM 조작과 이벤트 처리 - 예제문제 2
const button = document.getElementById("colorChangeBtn");

button.addEventListener("click", function () {
  const currentColor = button.style.backgroundColor;
  if (currentColor === "red") {
    button.style.backgroundColor = "";
  } else {
    button.style.backgroundColor = "red";
  }
});

// DOM 조작과 이벤트 처리 - 예제문제 3
document.querySelector("#myInput").addEventListener("input", function (e) {
  console.log(e.target.value);
});
//입력할 때마다 콘솔에 내가 쓴 글자

// DOM 조작과 이벤트 처리 - 예제문제 4
const box = document.getElementById("hoverBox");
box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "skyblue";
});

box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "coral";
});
//박스에 마우스 올리면 하늘색, 빼면 코랄색

// DOM 조작과 이벤트 처리 - 예제문제 5
document.getElementById("addMessage").addEventListener("click", function () {
  const input = document.getElementById("userInput").value;
  const newP = document.createElement("p");
  newP.innerText = input;
  document.getElementById("messageContainer").appendChild(newP);
});
//입력한 글자가 화면에 <p>로 추가

// DOM 조작과 이벤트 처리 - 예제문제 6
document.getElementById("updateHtml").addEventListener("click", function () {
  const inputHtml = document.getElementById("htmlInput").value;
  document.getElementById("htmlContainer").innerHTML = inputHtml;
});
//입력한 HTML코드를 그대로 화면
