// 👉 할 일 목록 배열
let todos = [];

// 👉 고유 ID 생성용 카운터
let idCounter = 0;

// 👉 DOM 요소 선택
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// ✅ 할 일 추가 이벤트 리스너
addBtn.addEventListener("click", () => {
    let content = input.value;
    // console.log(`content: ${content}`);
    if (content === "") {
        alert("할 일을 입력하세요.");
        return;
    } else {
        let todo = {id: idCounter, content: content, isCompleted: false};
        
        for (let i = 0; i < todos.length; i++) {
            // console.log(todos[i]);
            if (todos[i].content == content) {
                alert("이미 추가된 할 일입니다.");
                return;
            }
        };
        
        todos.push(todo);
        // console.log(todos);

        input.value = ""
        
        const li = document.createElement("li");
        const btn1 = document.createElement("button");
        const btn2 = document.createElement("button");
        const p = document.createElement("p");
        
        li.id = `todo-${idCounter}`;

        p.innerText = todo.content;
        btn1.innerText = "완료";
        btn1.className = `end-btn`;
        btn1.id = `end-btn-${idCounter}`;
        btn2.innerText = "삭제";
        btn2.className = `delete-btn`;
        btn2.id = `del-btn-${idCounter}`;
        li.appendChild(p);
        li.appendChild(btn1);
        li.appendChild(btn2);
        
        list.appendChild(li)
        idCounter++;
    };
});

// ✅ 할 일 삭제 이벤트 리스너
list.addEventListener("click", (event) => {
    const target = event.target;
    // console.log(target.id);

    let index = target.id.slice(8)
    console.log(index);

    let li_id = "todo-"+index
    let li = document.getElementById(li_id);
    li.remove();

    todos = todos.filter((element) => element.id != index);
});


// 엔터로 입력하기
input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        addBtn.click()
    };
});