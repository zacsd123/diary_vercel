// 객체
// 예제 1 - 1
console.log(`학생의 이름: ${student.name}`);
console.log(`졸업 여부: ${student.isGraduated}`);
console.log(`두 번째 과목: ${student.subjects[1]}`);
console.log(`사는 도시: ${student.address.dity}, ${student.address.street}`);

// 1 - 2
"홍길동은(는) 20세이고, 서울에 살고 있습니다."

// 1 - 3
// 1)
student.age = 21;
// 2)
student.subjects.push("컴퓨터");
// 3)
console.log(student.subjects);

// 1 - 4
student.address.street = "서초구 반포동";
console.log(student.address.street);

// 비구조화
// 예제 1
function displayPerson(person) {
    let [name, age] = [person.name, person.age]
    console.log(`이름: ${name}`)
    console.log(`나이: ${age}`)
};

let personInfo = {
    name: "SeungWan Cho",
    age: 20
};

// 예제 2
const user = {
    name: "이지은",
    age: 20,
    jop: "가수",
    address: {
        city: "서울",
        district: "강남구"
    }
};

let [name, age, jop, city, district] = [user.name, user.age, user.jop, user.address.city, user.address.district]

// 함수심화
// 예제 1
const greeting = (name) => `안녕하세요, ${name}님!`;

console.log(greeting("김미미"));

// 예제 2
let frults = ["Apple", "Banana", "Cherry"];
frults.forEach((element, index) => {
    console.log(`${index+1}. ${element}`);
});

// 예제 3
const btn = document.getElementById("ClickBtn");
const div = document.getElementById("message");

btn.addEventListener("click", (event) => {
    setTimeout(() => {
        console.log("안녕하세요!")
    }, 3000)
}); 

// 동기비동기
// 예제 1
let htmlContainer = document.getElementById("htmlContainer");
let updateButton = document.getElementById("updateHtml");
async function GetHtmlInputValue() {
    return document.getElementById("htmlInput").value;
};

updateButton.addEventListener("click", async function() {
    let userInputHtml = await GetHtmlInputValue();
    htmlContainer.innerHTML = userInputHtml;
});

// 예제 2
Promise.resolve("1")
  .then(result => {
    console.log(result);
    return "2";
  })
  .then(result => {
    console.log(result);
    return "3";
  })
  .then(result => {
    console.log(result);
  });

console.log("마지막 줄");

// 마지막 줄 - 1 - 2 - 3

Promise.reject("에러 발생")
  .then(() => {
    console.log("성공!");
  })
  .catch(err => {
    console.log("잡힌 에러:", err);
  })
  .then(() => {
    console.log("계속 진행");
});

// 잡힌 에러: 에러 발생 - 계속 진행

const p = new Promise((resolve) => {
    setTimeout(() => {
        resolve("2초 후 완료");
    }, 2000);
});
  
console.log("시작");

p.then(result => {
    console.log(result);
});

console.log("끝");

// 시작 - 끝 - 2초 후 완료

// DOM
// 예제 1
function clickButton() {
    console.log("버튼이 클릭되었습니다!")
};

// 예제 2
const button = document.getElementById("myButton");
button.addEventListener("click", (event) => {
    const currentColor = button.style.backgroundColor;
    if (currentColor == "red") {
        button.style.backgroundColor = "white";
    } else {
        button.style.backgroundColor = "red";
    };
});

// 예제 3
const Input = document.querySelector("#myInput");
console.log(Input)
Input.addEventListener("input", (event) => {
    console.log(Input.value);
});

// 예제 4
const HoverBox = document.querySelector("#hoverBox");
HoverBox.addEventListener("mouseover", (event) => {
    console.log("woeif")
    HoverBox.style.backgroundColor = "skyblue";
});
HoverBox.addEventListener("mouseout", (event) => {
    HoverBox.style.backgroundColor = "coral";
});

// 예제 5
const userInput = document.querySelector("#userInput");
const addBtn = document.querySelector("#addMessage");

addBtn.addEventListener("click", (event) => {
    const p = document.createElement("p");
    p.innerText = userInput.value;
    const messageContainer = document.querySelector("#messageContainer");
    messageContainer.appendChild(p);
});

// 예제 6
const updateButton2 = document.querySelector("#updateHtml2");
const htmlContainer2 = document.querySelector("#htmlContainer2");

updateButton2.addEventListener("click", (event) => {
    const htmlInput2 = document.querySelector("#htmlInput2");
    htmlContainer2.innerHTML = htmlInput2.value;
});

// person.for = "프로그래밍";

// console.log(person);

// let person1 = {
//   firstname: "조",
//   lastname: "승완",
//   age: 20,
//   hobby: "게임",
//   address: "서울",
// };

// let myName = person1["firstname"] + person1.lastname;
// console.log(myName);

// let myAge = person1.age;
// console.log(myAge);

// let person2 = {
//   name: "조승완",
// };

// console.log(person2.age);

// person2.age = 20;
// console.log(person2.age);

// delete person2.age;
// console.log(person2);

// // 예제문제 1
// const student = {};

// // ---------------------------------
// let fruits = ["사과", "바나나", "체리"];
// let [apple, ...etc] = fruits;
// console.log(apple); // 사과
// console.log(etc); // [ '바나나', '체리' ]

// let fruits1 = ["사과", "바나나", "체리"];
// let [apple1, banana, chery, pear = "pear"] = fruits1;
// console.log(apple1); // 사과
// console.log(banana); // 바나나
// console.log(chery); // 체리
// console.log(pear); //

// // function
// function CllTreeTimes(CallBack) {
//   for (let i = 0; i < 3; i++) {
//     CallBack(i);
//   }
// }

// function print(item) {
//   console.log(item);
// }

// CllTreeTimes(print);

// numbers = [5, 6, 7, 8, 9];
// numbers.forEach(function (item, index) {
//   console.log(`${index}번째 요소 : ${item}`);
// });

// numbers = [1, 2, 3, 4, 5];
// numbers = numbers.map((item) => {
//   return item * item;
// });
// console.log(numbers);

// numbers = numbers.filter((item) => {
//   return item % 2 === 0;
// });
// console.log(numbers);



// numbers = [1, 2, 3, 4, 5, 6, 7]
// numbers = numbers.filter((value) => value % 2 === 0).map((value) => value * value).forEach((value) => console.log(`value : ${value}`));

// setTimeout(() => {
//     console.log("1초 후에 실행됩니다.");
// }, 1000);

// let count = 1;
// setInterval(() => {
//     console.log(`1초마다 실행됩니다. ${count}`);
//     count++;
// }, 1000);

// let id;

// id = setInterval(() => {
//     console.log("0.5초마다 실행됩니다.");
// }, 500);

// setTimeout(() => {
//     console.log("타이머를 정지합니다.");
//     clearInterval(id);
// }, 5000);

// let FirstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//     reject("실패했습니다.");
//   }, 1000);
// });

// FirstPromise.then((result) => {
//   console.log(result); // 성공했습니다.
// })

// async function UserInfo() {
//     return {id: 1, name: "조승완"};
// };

// async function UserTodo() {
//     setTimeout(() => {
//         console.log("할일 목록을 가져왔습니다.");
//     }, 5000);
//     return ["책읽기", "운동하기", "프로그래밍"];
// };

// async function SumOfFetch() {
//     try {
//         const user = await UserInfo();
//         if (user.id == 1) {
//             const todo = await UserTodo();
//             console.log(`할일: ${todo}`);
//             return todo;
//         }
//     } catch (error) {
//         console.error("에러 발생:", error);
//     };
// };

// setTimeout(() => {
//     SumOfFetch()
// }, 3000);

// let button = document.getElementById("button1");

// console.log(button);

// button.onclick = () => {
//     console.log("버튼이 클릭되었습니다.");
// };
// button.addEventListener("dblclick", (event) => {
//     console.log("버튼이 클릭되었습니다.", event);
// });

// let h1s = document.querySelectorAll(".title");
// console.log(h1s);

// h1s.forEach((h1) => {
//     h1.addEventListener("mouseover", (event) => {
//         console.log("마우스가 올라갔습니다.");
//         h1.addEventListener("dblclick", (event) => {
//             console.log("타이틀이 클릭되었습니다.");
//         });
//     });
// });

// document.getElementById("link").addEventListener("click", (event) => {
//     event.preventDefault(); // 기본 동작을 막음
//     console.log("링크가 클릭되었습니다.");
// });

// let btnnn = document.getElementById("btnnn");
// let box = document.getElementById("box");
// btnnn.addEventListener("click", (event) => {
//     box.classList.toggle("active");
// });