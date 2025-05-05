const main = document.getElementById("main");
const qna = document.getElementById("qna");

let questionIndex = 0; // ⬅ 전역으로 위치 변경

const start = () => {
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "flex";
    }, 450);
    goNext();
  }, 450);
};

const goNext = () => {
  if (questionIndex === qnaList.length) {
    // 모든 질문을 끝낸 경우 결과 페이지로 이동
    showResult(); // 이 함수는 별도로 만들어야 합니다.
    return;
  }

  let questionBox = document.getElementById("question-box");
  questionBox.innerHTML = qnaList[questionIndex].q;

  let statusNum = document.getElementById("status-number");
  statusNum.innerHTML = questionIndex + 1 + "/12";

  let status = document.getElementById("status-bar");
  status.style.width = (100 / qnaList.length) * (questionIndex + 1) + "%";

  let answerBox = document.getElementById("answer-box");
  answerBox.innerHTML = ""; // 이전 버튼 제거

  for (let i in qnaList[questionIndex].a) {
    addAnswerButton(qnaList[questionIndex].a[i].answer);
  }
};

const addAnswerButton = (answerText) => {
  let answerBox = document.getElementById("answer-box");
  let answerButton = document.createElement("button");

  answerButton.classList.add("answer-list");
  answerButton.classList.add("fadeIn");
  answerBox.appendChild(answerButton);
  answerButton.innerHTML = answerText;

  answerButton.addEventListener("click", () => {
    let buttonChildren = document.getElementsByClassName("answer-list");
    for (let i = 0; i < buttonChildren.length; i++) {
      buttonChildren[i].disabled = true;
      buttonChildren[i].style.animation = "fadeOut 1s";
    }

    setTimeout(() => {
      for (let i = 0; i < buttonChildren.length; i++) {
        buttonChildren[i].style.display = "none";
      }
      questionIndex++; // 전역 변수 증가
      goNext(); // 다음 질문 호출
    }, 450);
  });
};
