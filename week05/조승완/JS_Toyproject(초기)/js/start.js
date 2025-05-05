const main = document.querySelector("#main");
console.log(main)
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
const select = []

const start = () => {
  main.classList.add("fadeOut");
  setTimeout(() => {
    qna.classList.add("fadeIn");
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "flex";
    }, 450);
    
    let questionIndex = 0;
    goNext(questionIndex);
  }, 450);
};

const goNext = (index) => {
  if (index === endPoint) {
    goResult();
    return;
  };

  let questionBox = document.querySelector("#question-box");
  questionBox.innerHTML = qnaList[index].q;

  let statusNum = document.querySelector("#status-number")
  let st = index + 1
  st = st.toString() + "/12"
  statusNum.innerHTML = st


  for (let i in qnaList[index].a) {
    addAnswerButton(qnaList[index].a[i].answer, index, i);
  }

  let status = document.querySelector("#status-bar");
  status.style.width = (100/endPoint) * (index + 1) + "%"
};

const addAnswerButton = (answerText, qnaindex, index) => {
  let answerBox = document.querySelector("#answer-box");
  let answerButton = document.createElement("button");
  
  answerButton.classList.add("answer-list")
  answerButton.classList.add("fadeIn")
  answerButton.innerHTML = answerText;
  answerBox.appendChild(answerButton);

  answerButton.addEventListener("click", (event) => {
    select[qnaindex] = index;
    let buttonChildren = document.querySelectorAll(".answer-list");
    for (let i = 0; i < buttonChildren.length; i++) {
      buttonChildren[i].disabled = true;
      buttonChildren[i].style.animation = "fadeOut 1s";
    };
    setTimeout(() => {
      for (let i = 0; i < buttonChildren.length; i++) {
        buttonChildren[i].style.display = "none";
      };
      goNext(++qnaindex)
    }, 450);
  });
};

const goResult = () => {
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "flex";
    }, 450);
  }, 450);
  setResult();
}

const calculateResult = () => {
  let pointArray = [
    {name: "Java", value: 0, key: 0,},
    {name: "Javascript", value: 0, key: 1,},
    {name: "Python", value: 0, key: 2,},
    {name: "C++", value: 0, key: 3,},
    {name: "Swift", value: 0, key: 4,},
    {name: "Kotlin", value: 0, key: 5,},
    {name: "SQL", value: 0, key: 6,},
  ];

  for (let i = 0; i < endPoint; i++) {
    let target = qnaList[i].a[select[i]];
    for (let j = 0; j < target.type.length; j++) {
      for (let k = 0; k < pointArray.length; k++) {
        if (target.type[j] === pointArray[k].name) {
          pointArray[k].value += 1;
        };
      };
    };
  };

  let resultArray = pointArray.sort(function (a, b) {
    console.log(a.key, b.key)
    if (a.value > b.value) {
      return -1;
    };

    if (a.value < b.value) {
      return 1;
    };
    return 0;
  });
  console.log(resultArray);
  let resultWord = resultArray[0].key;
  return resultWord;
};

const setResult = () => {
  let point = calculateResult();

  const resultName = document.querySelector("#result-name");
  resultName.innerHTML = resultList[point].name;

  const resultTitle = document.querySelector("#result-title");
  resultTitle.innerHTML = resultList[point].title;

  const resultDesc = document.querySelector("#result-desc");
  resultDesc.innerHTML = resultList[point].desc;
};