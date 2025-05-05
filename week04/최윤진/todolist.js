// 할 일 목록 배열
const todos = [];

// 고유 ID 생성용 카운터
let idCounter = 0;

// DOM 요소 선택
const input = document.getElementById("todo-input"); //사용자가 입력할 <input>
const addBtn = document.getElementById("add-btn"); //"추가" 버튼 <button>
const list = document.getElementById("todo-list"); //할 일 목록을 담을 <ul>

// 할 일 추가 이벤트 리스너
addBtn.addEventListener("click", () => {
  const text = input.value.trim(); //입력한 문자열에서 앞뒤 공백 제거
  //text가 비어있지 않을 때 실행
  if (text) {
    const newTodo = {
      id: idCounter++, // 고유 ID
      text: text,
      done: false,
    };

    todos.push(newTodo); // 배열에 추가
    renderList(); // 화면 갱신
    input.value = ""; // 입력창 초기화
  }
});

// 리스트 렌더링 함수
function renderList() {
  list.innerHTML = "";

  todos.forEach(({ id, text }) => {
    const li = document.createElement("li");

    // 텍스트 추가
    li.textContent = text;
    li.dataset.id = id; // 삭제용 식별자

    // 삭제 버튼 생성
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.style.marginLeft = "10px";

    // 버튼 li에 붙이기
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

// 삭제 이벤트 처리
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const li = e.target.parentElement;
    const idToDelete = Number(li.dataset.id);

    // 해당 ID를 제외한 나머지만 필터링
    const index = todos.findIndex((todo) => todo.id === idToDelete);
    if (index !== -1) {
      todos.splice(index, 1);
      renderList();
    }
  }
});
