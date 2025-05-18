const main = document.getElementById("main");
const qna = document.getElementById("qna");
const endPoint = 12;

const start = () => {
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "flex";
    }, 450);

    let questionIndex = 0;
    goNext(questionIndex);
  }, 450);
};

const goNext = (questionIndex) => {
  let questionBox = document.getElementById("question-box");
  questionBox.innerHTML = qnaList[questionIndex].q;

  let statusNum = document.getElementById("status-number");
  statusNum.innerHTML = questionIndex + 1 + " / 12";

  for (let i in qnaList[questionIndex].a) {
    addAnswerButton(qnaList[questionIndex].a[i].answer, questionIndex);
  }

  let status = document.getElementById("status-bar");
  status.style.width = (100 / endPoint) * (questionIndex + 1) + "%";
};

const addAnswerButton = (answerText, questionIndex) => {
  const answerBox = document.getElementById("answer-box");
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
      goNext(+questionIndex);
    }, 450);
  });
};
