// 객체 - 예제문제 1

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

/* 
문제 1. 객체의 프로퍼티에 접근하기
student 객체에서 아래 값을 출력하는 코드를 작성하세요.
1. 학생의 이름
2. 졸업 여부
3. 두 번째 과목
4. 사는 도시
*/
console.log(student.name);
console.log(student.isGraduated);
console.log(student.subjects[1]);
console.log(student.address.city);

/*
문제 2. 객체의 메서드 호출
student 객체의 getStudentInfo() 메서드를 호출하면 어떤 문자열이 출력될까요?
*/
console.log(student.getStudentInfo());

/*
문제 3. 객체의 프로퍼티 수정
1) 학생의 나이를 21세로 바꾸는 코드를 작성하세요.
2) 새로운 과목 "컴퓨터"를 추가하는 코드를 작성하세요.
3) 추가된 후 subjects 배열의 전체 내용을 출력해보세요.
*/
student.age = 21;
student.subjects.push("컴퓨터");
console.log(student.subjects);

/*
문제 4. 중첩 객체 활용
student.address.street 값을 "서초구 반포동"으로 수정하고, 해당 값을 출력해보세요.
*/
student.address.street = "서초구 반포동";
console.log(student.address.street);

////////////////////////////////////////////////////////////////////////////////////////////
// 비구조화 할당 - 예제문제 1
// 주어진 코드를 비구조화 할당 전 코드에서 할당 후 코드로 바꿔주세요.
function displayPerson(person) {
  let { name, age } = person;
  console.log(`이름 : ${name}`);
  console.log(`나이 : ${age}`);
}

let personInfo = {
  name: "Dayun Lee",
  age: 25,
};

displayPerson(personInfo);

// 비구조화 할당 - 예제문제 2
// 다음 코드를 보고, 비구조화 할당을 사용하여 변수에 값을 저장하는 코드를 작성하세요.
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

///////////////////////////////////////////////////////////////////////////////////////
// 함수 심화 - 예제문제1
// 주어진 함수를 function 키워드 대신 화살표 함수를 사용해 다시 작성해주세요.
const greeting = (name) => {
  return `안녕하세요, ${name}님!`;
};

console.log(greeting("김미미"));

// 함수 심화 - 예제문제2
// 아래에 주어진 배열 fruits에는 여러 개의 과일 이름이 문자열로 저장되어 있습니다.
// forEach() 메소드와 콜백 함수를 사용하여, 배열의 각 과일 이름 앞에 순서 번호를 붙여 콘솔에 출력하는 코드를 작성해주세요.

let fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach(function (value, index) {
  console.log(`${index + 1}.${value}`);
});

// 함수 심화 - 예제문제 3
// 주어진 HTML 문서에서 사용자가 버튼을 클릭하면 3초 후에 "안녕하세요!" 메세지가 화면에 나타나는 JS 코드를 작성해주세요.
let clickBtn = document.getElementById("ClickBtn");
let message = document.getElementById("message");

clickBtn.addEventListener("click", function () {
  setTimeout(() => {
    message.textContent = "안녕하세요!";
  }, 3000);
});

///////////////////////////////////////////////////////////////////////////////////
// 동기 / 비동기 - 예제문제 1
// 주어진 코드에서 사용자가 HTML 입력 필드에 입력한 내용을 서버에 전송하고,
// 서버에서 처리한 결과를 다시 화면에 표시하는 기능을 구현해주세요.

let htmlContainer = document.getElementById("htmlContainer");
let updateButton = document.getElementById("updateHtml");
let htmlInput = document.getElementById("htmlInput");

updateButton.addEventListener("click", async function () {
  //updateButton을 클릭하면 이 함수가 실행됨
  const userInputHtml = htmlInput.value; // 사용자가 textarea에 입력한 HTML 코드를 읽어와서 userInputHtml 변수에 저장

  //서버에 HTML 전송
  try {
    const response = await fetch("/update-html", {
      //update-html : 서버에게 요청을 보낼 때 사용하는 가상의 주소(route)
      //fetch() : 서버와 통신하는 함수
      method: "POST", //update-html 주소로 POST 요청을 보냄
      headers: {
        // HTTP 요청의 부가 정보(메타데이터)를 담는 곳
        "Content-Type": "application/json", // 서버에게 '내가 보내느 데이터는 JSON 형식이에요!라고 알려줌
      },
      body: JSON.stringify({ html: userInputHtml }), //사용자가 입력한 HTML을 JSON 문자열로 바꿔서 서버에 보냄
    });

    const result = await response.json(); // 서버에서 JSON 형식으로 응답이 오면, result에 담음
    htmlContainer.innerHTML = result.updatedHtml; // result.updateHtml은 서버가 보내준 새로운HTML문자열
    //그걸 htmlContainer에 표시해서 화면이 업데이트됨
  } catch (error) {
    //try 블록 안에서 문제가 생기면 catch로 넘어옴
    console.error("에러 발생:", error); //error는 무슨 문제가 생겼는지 담고 있는 객체
    htmlContainer.innerText = "오류가 발생했습니다."; //콘솔에 에러를 출력하고, 사용자에게는 "오류가 발생했습니다."라는 메세지를 보여줌
  }
});

// 동기 / 비동기 - 예제문제 2
// 아래 주어진 세 가지 비동기 코드에 대해 출력 순서를 각각 나열해주세요.

// Promise.resolve(...)
Promise.resolve("1") // 즉시 성공 상태(fulfill)인 Promise를 생성, 안에 있는 1은 결과값으로 다음 .then()에게 전달
  .then((result) => {
    // 위의 1이 result로 들어옴
    console.log(result);
    return "2";
  })
  .then((result) => {
    console.log(result);
    return "3";
  })
  .then((result) => {
    console.log(result);
  });

console.log("마지막 줄");
// 이 줄은 동기 코드이기 때문에, 위의 .then() 들보다 먼저 실행되
// 출력 순서:
// 마지막 줄
// 1
// 2
// 3

// Promise.reject(...)
Promise.reject("에러 발생") //실패 상태(reject)로 시작하는 Promise, 에러 메세지는 "에러 발생"
  .then(() => {
    //위에서 실패했기 때문에 이 then()은 건너뜀
    console.log("성공!");
  })
  .catch((err) => {
    // catch가 실패한 이유(에러)를 잡는다. err는 "에러 발생"
    console.log("잡힌 에러 : " + err);
  })
  .then(() => {
    // catch() 이후에도 then()은 계속 이어짐
    console.log("계속 진행");
  });
// 출력 순서 :
// 잡힌 에러 : 에러 발생
// 계속 진행

// setTimeout + Promise
const p = new Promise((resolve) => {
  //p는 2초 후에 "2초 후 완료"라는 값으로 resolve되는 Promise
  setTimeout(() => {
    // setTimeout()은 비동기 --> 2초 후 실행됨
    resolve("2초 후 완료");
  }, 2000);
});

console.log("시작");

p.then((result) => {
  //p가 2초 뒤에 완료되면 실행
  console.log(result);
});

console.log("끝");
//출력 순서 :
//시작
//끝
//2초 후 완료
///////////////////////////////////////////////////////////////////

// DOM 조작과 Event 처리 - 예제문제 1
// JS를 사용하여 HTML 문서 상에 있는 버튼에 클릭 이벤트 핸들러를 추가하는 코드를 작성해주세요.
// 클릭 이벤트가 발생할 때마다 콘솔에 "버튼이 클리되었습니다!"라는 메시지가 출력되어야 합니다.

let myButton = document.getElementById("myButton");

myButton.onclick = () => {
  console.log("버튼이 클릭되었습니다!");
};

// DOM 조작과 Event 처리 - 예제문제 2
// 아래와 같은 HTML문서에서 사용자가 버튼을 클릭할 때,
// 버튼의 색이 빨간색이면 기본색으로, 기본색이라면 빨간색으로 바뀌는 JS 코드를 주어진 조건에 맞추어 완성해주기

const button = document.getElementById("colorChangeBtn");

button.addEventListener("click", () => {
  const currentColor = button.style.backgroundColor;

  if (currentColor == "red") {
    button.style.backgroundColor = "";
  } else {
    button.style.backgroundColor = "red";
  }
});

// DOM 조작과 Event 처리 - 예제문제 3
// 아래와 같은 HTML문서에서 사용자가 input 필드에 무언가를 입력할 때마다 콘솔에 입력된 값을 출력하는 JS 코드르 작성해주세요.
let myInput = document.querySelector("#myInput");

myInput.addEventListener("keyup", function (event) {
  //myInput 요소에 "keyup" 이벤트 리스너를 추가
  // keyup은 사용자가 키보드를 눌렀다가 뗐을 때 발생
  // 익명함수를 이벤트 핸들러로 등록 (event는 이벤트 객체로 사용자가 어떤 키를 눌렀는지 등의 정보가 들어있음)
  console.log(event.target.value);
  // event.target : 이벤트가 발생한 실제 DOM 요소 == myInput 요소
  // .value : input 태그의 현재 입력된 값
});

// DOM 조작과 Event 처리 - 예제문제 4
// 주어진 HTML문서에서 hoverBox라는 ID를 가진 요소를 선택하여
// 주어진 조건들을 수행하는 코드를 addEventListener()를 이용해 작성해주세요.
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "skyblue";
});

hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "coral";
});

// DOM 조작과 Event 처리 - 예제문제 5
// 주어진 HTML 코드에서 사용자가 입력한 메세지를 받아 새로운 <p> 요소로 만들고 
// 이를 div#messageContainer의 자식으로 추가하는 JS 코드를 작성해주세요.
const messageContainer = document.getElementById("messageContainer"); // 이곳에 새로운 메시지들을 계속 추가할 예정
const userInput = document.getElementById("userInput"); //사용자가 입력한 텍스트 값을 가져오기 위해 사용됨
const addMessage = document.getElementById("addMessage");//클릭 이벤트가 설정될 대상

addMessage.addEventListener("click", () =>{
  const message = userInput.value.trim(); //trim : 문자열 앞뒤 공백 제거

  if(message){ // 사용자가 입력한 메시지가 비어있지 않을 경우
    const newMessage = document.createElement("p"); //새로운 p태그 요소 만들어서 사용자의 메세지를 넣을 예정
    newMessage.textContent = message;

    messageContainer.appendChild(newMessage); // 새로만든 p태그 메세지를 messageContainer에 추가

    userInput.value = ""; //메세지를 추가한 후, 입력창을 비움 (다음 입력을 방을 준비를 함)
  }
});

// DOM 조작과 Event 처리 - 예제문제 6
//주어진 HTML 코드에서 사용자가 입력한 HTML 코드를 받아서 div#Container 내부에 반영하는 JS코드를 작성해주세요.
const htmlContainer = document.getElementById("htmlContainer"); // 사용자가 입력한 html코드가 삽입
const htmlInput = document.getElementById("htmlInput"); // 사용자가 html코드를 입력할 곳
const updateHtml = document.getElementById("updateHtml"); // 사용자가 이 버튼을 클릭하면 아래 동작이 실행

updateHtml.addEventListener("click", () => {
  const userHtml = htmlInput.value; // 사용자가 입력한 html 문자열을 가져옴
  
  htmlContainer.innerHTML = userHtml; //htmlContainer 요소의 내부 HTML을 사용자가 입력한 값으로 변경
  // 이때 실제로 태그가 적용된 상태로 삽입됨
});
