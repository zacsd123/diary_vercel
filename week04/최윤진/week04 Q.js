//객체 - 예제문제1
const student = {
  name: "홍길동",
  age: 20,
  isGraduated: false,
  subjects: ["수학", "영어", "과학"],
  address: {
    city: "서울",
    street: "강남구 역삼동",
  },
  getStudentInfo: function () {
    return `${this.name}은(는) ${this.age}세이고, ${this.address.city}에 살고 있습니다.`;
  },
  addSubject: function (subject) {
    this.subjects.push(subject);
  },
};

//문제1. 객체의 프로퍼티에 접근하기
console.log(student.name);
console.log(student.isGraduated);
console.log(student.subjects[1]);
console.log(student.address.city);

//문제2. 객체의 메서드 호출
// 홍길동은(는) 20세이고, 서울에 살고 있습니다.

//문제3. 객체의 프로퍼티 수정
student.age = 21;
student.subjects.push("컴퓨터");
console.log(student.subjects);

//문제4. 중첩 객체 활용
student.address.street = "서초구 반포동";
console.log(student.address.street);

//비구조화 할당– 예제문제1
function displayPerson(person) {
  let { name, age } = person; //person 객체에서 name과 age 속성을 꺼내 각각 동일한 이름의 변수에 저장
  console.log(`이름: ${name}`);
  console.log(`나이: ${age}`);
}

let personInfo = {
  name: "YuJin Jung",
  age: 22,
};

displayPerson(personInfo); //personInfo 객체를 받아서 name과 age를 출력.

//비구조화 할당– 예제문제2
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
  job, //객체 속성 이름과 똑같은 이름을 가진 변수를 만듦.
  address: { city, district }, // const city = user.address.city
} = user;

//함수 심화 – 예제문제 1
const greeting = (name) => {
  return `안녕하세요, ${name}님!`;
};

//함수 심화 - 예제문제 2
let fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((index, value) => {
  console.log(`${index + 1}.${value}`);
}); //순회

//함수 심화 – 예제문제 3
let clickBtn = document.getElementById("ClickBtn");
let message = document.getElementById("message");

clickBtn.addEventListener("click", function () {
  //일정 시간 후에 함수를 실행하는 비동기 함수.
  setTimeout(() => {
    message.textContent = "안녕하세요!"; //message 요소 안의 텍스트 내용을 "안녕하세요!"로 바꿔 줌
  }, 3000);
});

//동기 / 비동기– 예제문제 1
let htmlContainer = document.getElementById("htmlContainer");
let updateButton = document.getElementById("updateHtml");
let htmlInput = document.getElementById("htmlInput");

updateButton.addEventListener("click", async function () {
  const userInputHtml = htmlInput.value;

  try {
    const response = await fetch("/update-html", {
      // 클라이언트-서버 간 HTTP(웹 상에서 데이터 주고받기 위한 프로토콜) 요청 수행
      method: "POST", // CRUD(Create - POST, Read - GET, Update - PUT, Delete - DELETE)
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ html: userInputHtml }), // JSON 문자열로 변환
    });

    const result = await response.json(); // 서버에서 처리된 결과 받기
    htmlContainer.innerHTML = result.updatedHtml;
    // innerHTML: 요소의 HTML 내용 설정하거나 가져옴
  } catch (error) {
    console.error("에러 발생:", error);
    htmlContainer.innerText = "오류가 발생했습니다.";
    // innerText: text 값만 가져옴
  }
});

// 동기 / 비동기 – 예제문제 2
// 마지막 줄
// 1
// 2
// 3

// 잡힌 에러: 에러 발생
// 계속 진행

// 시작
// 끝
// 2초 후 완료

//DOM 조작과 Event 처리 - 예제문제 1
let myBtn = document.getElementById("myButton"); //html 문서에서 id = "myButton"을 가진 요소를 가져오는 함수.

myBtn.onclick = () => {
  console.log("버튼이 클릭되었습니다!");
}; //버튼을 누르면 화살표 함수가 실행되어 "버튼이 클릭되었습니다!"가 뜸.

//DOM 조작과 Event 처리 - 예제문제 2
const button = document.getElementById("colorChangeBtn");

button.addEventListener("click", () => {
  const currentColor = button.style.backgroundColor;

  if (currentColor === "red") {
    button.style.backgroundColor = "";
  } else {
    button.style.backgroundColor = "red";
  }
});

// DOM 조작과 Event 처리 - 예제문제 3
let myInput = document.querySelector("#myInput");

myInput.addEventListener("keyup", function (event) {
  // keyup - 키보드를 누르고 뗄 때, keydown - 키보드 누를 때, keypress - 키보드 누를 때 계속
  console.log(event.target.value); //키를 뗄 때마다 콘솔에 글자가 찍힘.
});

// DOM 조작과 Event 처리 - 예제문제 4
const hoverBox = document.getElementById("hoverBox"); //HTML 안에 id="hoverBox"인 요소를 찾아서 hoverBox 변수에 저장

hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "skyblue";
}); //마우스를 hoverBox 요소 위에 올렸을 때 발생하는 함수, 배경색을 "skyblue"로 변경함.

hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "coral";
}); //마우스를 뗐을 때, 배경색을 "coral"로 변경함.

// DOM 조작과 Event 처리 - 예제문제 5
const messageContainer = document.getElementById("messageContainer");
const userInput = document.getElementById("userInput");
const addMessage = document.getElementById("addMessage");

// 이벤트 처리  //addMessage 버튼에 click 이벤트 리스너 연결
addMessage.addEventListener("click", () => {
  const message = userInput.value.trim(); // 사용자가 입력한 텍스트를 trim(): 문자열 앞뒤 공백 제거

  if (message) {
    // 새 <p> 요소 생성
    const newMessage = document.createElement("p");
    newMessage.textContent = message; //사용자가 입력한 메시지를 넣음

    // messageContainer의 자식으로 추가 -> 메시지가 화면에 보이게 됨.
    messageContainer.appendChild(newMessage);

    // // 입력창 비우기 (선택)
    // userInput.value = "";
  }
});

// DOM 조작과 Event 처리 - 예제문제 6
// 요소 선택
const htmlContainer = document.getElementById("htmlContainer"); //HTML이 적용될 영역
const htmlInput = document.getElementById("htmlInput"); //사용자가 HTML을 입력하는 입력창
const updateHtml = document.getElementById("updateHtml"); //입력값을 적용시키는 버튼

// 클릭 이벤트 등록
updateHtml.addEventListener("click", () => {
  const userHtml = htmlInput.value; //사용자가 <textarea>나 <input>에 입력한 HTML 코드를 가져옴

  // 입력값을 htmlContainer의 innerHTML로 설정
  htmlContainer.innerHTML = userHtml;
});
