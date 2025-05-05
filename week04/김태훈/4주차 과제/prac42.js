//객체 예제 1
const student = {
    name: "홍길동",
    age: 20,
    isGraduate: false,
    subjects: ["수학", "영어", "과학"],
    address: {
        city: "서울",
        state: "강남구 역삼동"
    },
    getStudentInfo: function() {
        return `${this.name}은 ${this.age}세이고, ${this.address.city}에 살고 있습니다.`;
    },
    addSubject: function(subject) {
        this.subjects.push(subject);
    }
};
// 문제 1
console.log(student.name);
console.log(student.isGraduate);
console.log(student.subjects[1]);
console.log(student.address.city);

// 문제 2d
//홍길동은 20세이고, 서울에 살고 있습니다.

// 문제 3
student.age = 21;
student.subjects.push("컴퓨터");
console.log(student.subjects);

// 문제 4
student.address.street = "서초구 반포동";
console.log(student.address.street);

//비구조화 예제 1
function displayPerson(person){
    console.log(`이름: ${person.name}`);
    console.log(`나이: ${person.age}`);
}

let personInfo = {
    name: "YuJin Jung",
    age: 22
};

// ->

function displayPerson({name, age}){
    console.log(`이름: ${name}`);
    console.log(`나이: ${age}`);
}

//비구조화 예제 2
const user = {
    name: "이지은",
    age: 30,
    job: "가수",
    address: {
        city: "서울",
        state: "강남구"
    }
};
const { name, age, job, address: { city, state } } = user;

//함수심화 예제 1
const greeting = (name) => `안녕하세요, ${name}님!`;

console.log(greeting("김미미"));

//함수심화 예제 2
let fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach(function(value, index) {
    console.log(`${index+1}. ${value}`);
})

//함수심화 예제 3
ClickBtn.addEventListener('click', () => {
    setTimeout(() => { 
        const message = document.getElementById('message');
        message.textContent = "안녕하세요!";
    }, 3 * 1000);

 });

//동기/비동기 예제 1
let htmlContainer = document.getElementById('htmlContainer');
let updateButton = document.getElementById('updateHtml');
let htmlInput = document.getElementById('htmlInput');

updateButton.addEventListener('click', async function() {
    let userInputHtml = htmlInput.value;
    try{
        const answer = await fetch('/update-html', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ html: userInputHtml })
        });
        const result = await answer.json();
        htmlContainer.innerHTML = userInputHtml;
    } catch (e){
        console.log(e);
        htmlContainer.innerHTML = "에러가 발생했습니다.";
    }
    
});
  
//동기/비동기 예제 2
//마지막줄
//1
//2
//3

//잡힌 에러:에러 발생
//계속진행

//시작
//끝
//2초 후 완료

//DOM 조작과 Event 처리 예제 1
function doClick() {
    console.log("버튼이 클릭되었습니다!");
};
myButton.onclick = doClick;

//DOM 조작과 Event 처리 예제 2
const button_DOM = document.getElementById("colorChangeBtn");
button_DOM.addEventListener("click", function() {
    const currentColor = button_DOM.style.backgroundColor;
    if(currentColor === "red") {
        button_DOM.style.backgroundColor = "";
    }else{
        button_DOM.style.backgroundColor = "red";
    }
});


//DOM 조작과 Event 처리 예제 3
const input = document.querySelector("#myInput");

input.addEventListener('keyup', function(event) {
    console.log(event.target.value);
});
//왜 다른 코드에서는 #을 안해줘도 지정이 되는데, 여기서는 정확하게 #으로 ID를 지정해줘야
//제대로 인식하고 코드가 작동하는지 모르겠음

//DOM 조작과 Event 처리 예제 4
const box = document.querySelector("#hoverBox");

box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "skyblue";
});

box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "coral";
});

//DOM 조작과 Event 처리 예제 5
const MS = document.getElementById("addMessage");
MS.addEventListener("click", function() {
    const comments = document.getElementById("userInput");
    const Cont = document.getElementById("messageContainer");
    const newp = document.createElement("p");
    newp.textContent = comments.value;
    Cont.appendChild(newp);
    comments.value = "";
    
    
});

//DOM 조작과 Event 처리 예제 6
// const update = document.getElementById("htmlContainer2");
// update.addEventListener("click", function() {
//     const htmlupdate = document.getElementById("updateHtml2");
//     const htmlinput = document.getElementById("htmlInput2");
//     const newhtml = document.createElement("div");
//     newhtml.innerHTML= htmlinput.value;
//     htmlinput.value = "";
    
    
// });

const htmlContainer2 = document.getElementById("htmlContainer2");
const htmlInput2 = document.getElementById("htmlInput2");
const updateButton2 = document.getElementById("updateHtml2");

// 클릭 이벤트 등록
updateButton.addEventListener("click", () => {
  const userHtml = htmlInput2.value;

  // 입력값을 htmlContainer의 innerHTML로 설정
  htmlContainer2.innerHTML = userHtml;
});

