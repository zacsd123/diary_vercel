// 👉 할 일 목록 배열
const todos = [];

// 👉 고유 ID 생성용 카운터
let idCounter = 0;

// 👉 DOM 요소 선택
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// ✅ 할 일 추가 함수
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  // 새 todo 객체 생성
  const todo = {
    id: idCounter++,
    text,
    done: false, // 나중에 완료 여부로 활용할 수 있는 boolean값
  };

  // 배열에 추가
  todos.push(todo);

  // 리스트 다시 렌더링
  renderList(); // 새 항목이 반영되도록 리스트를 다시 그림

  // 입력창 초기화
  input.value = "";
});

// ✅ 리스트 렌더링 함수
function renderList() {
  list.innerHTML = ""; //기존에 있던 ul 내용을 전부 비움

  todos.forEach(({ id, text }) => {
    //todos 배열을 순회하면서 각각의 todo 객체에서 id와 text를 꺼냄
    const li = document.createElement("li"); //새로운 li항목을 생성
    li.innerHTML = `
      ${text}
      <button data-id="${id}">삭제</button>
    `;
    list.appendChild(li); //생성된 li를 실제 리스트에 추가
  }); //data-id 속성에 id를 저장해, 나중에 어떤 항목을 삭제할지 식별
}

// ✅ 삭제 버튼 처리
list.addEventListener("click", (e) => {
  //리스트 전체에 대해 이벤트 위임으로 클릭 이벤트를 처리
  if (e.target.tagName === "BUTTON") {
    // 클릭된 요소가 버튼일 경우만 실행
    const id = Number(e.target.dataset.id); //data-id로 저장해놓은 id 값을 숫자로 변환하여 가져옴

    // 해당 id의 항목을 배열에서 제거
    const index = todos.findIndex((todo) => todo.id === id); //해당 id를 가진 todo항목이 배열에서 몇번째에 있는지 찾음
    if (index > -1) {
      todos.splice(index, 1); //해당 항목을 todos 배열에서 삭제
      renderList(); //리스트를 다시 렌더링
    }
  }
});
