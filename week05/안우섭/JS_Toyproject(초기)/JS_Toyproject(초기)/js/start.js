const main = document.getElementById("main");
const qna = document.getElementById("qna");
const result = document.getElementById("result");

let select = [];
const endPoint = 12; // 총 질문 수

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

// 다음 질문으로 이동
const goNext = (questionIndex) => {
  if (questionIndex === endPoint) {
    goResult();
    return;
  }

  let questionBox = document.getElementById("question-box");
  questionBox.innerHTML = qnaList[questionIndex].q;

  let answerBox = document.getElementById("answer-box");
  answerBox.innerHTML = ""; // 이전 버튼 제거

  for (let i in qnaList[questionIndex].a) {
    addAnswerButton(qnaList[questionIndex].a[i].answer, questionIndex, i);
  }

  let statusNum = document.getElementById("status-number");
  statusNum.innerHTML = `${questionIndex + 1}/12`;

  let status = document.getElementById("status-bar");
  status.style.width = (100 / endPoint) * (questionIndex + 1) + "%";
};

// 답변 버튼 생성
const addAnswerButton = (answerText, questionIndex, index) => {
  let answerBox = document.getElementById("answer-box");
  let answerButton = document.createElement("button");

  answerButton.classList.add("answer-list", "fadeIn");
  answerButton.innerHTML = answerText;
  answerBox.appendChild(answerButton);

  answerButton.addEventListener("click", () => {
    select[questionIndex] = index;

    let buttons = document.getElementsByClassName("answer-list");
    for (let btn of buttons) {
      btn.disabled = true;
      btn.style.animation = "fadeOut 1s";
    }

    setTimeout(() => {
      for (let btn of buttons) {
        btn.style.display = "none";
      }
      goNext(questionIndex + 1);
    }, 450);
  });
};

// 결과 페이지로 이동
const goResult = () => {
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "flex";
    }, 450);
  });
  setResult();
};

// 결과 계산
const calculateResult = () => {
  let pointArray = [
    { name: "Java", value: 0, key: 0 },
    { name: "Javascript", value: 0, key: 1 },
    { name: "Python", value: 0, key: 2 },
    { name: "C++", value: 0, key: 3 },
    { name: "Swift", value: 0, key: 4 },
    { name: "Kotlin", value: 0, key: 5 },
    { name: "SQL", value: 0, key: 6 },
  ];

  for (let i = 0; i < endPoint; i++) {
    let target = qnaList[i].a[select[i]];
    for (let type of target.type) {
      let point = pointArray.find((p) => p.name === type);
      if (point) point.value += 1;
    }
  }

  return pointArray.sort((a, b) => b.value - a.value);
};

// 결과 출력
const setResult = () => {
  let resultArray = calculateResult();
  let resultKey = resultArray[0].key;

  const resultName = document.getElementById("result-name");
  resultName.innerHTML = resultList[resultKey].name;

  const resultTitle = document.getElementById("result-title");
  resultTitle.innerHTML = resultList[resultKey].title;

  const resultDesc = document.getElementById("result-desc");
  resultDesc.innerHTML = resultList[resultKey].desc;
};
