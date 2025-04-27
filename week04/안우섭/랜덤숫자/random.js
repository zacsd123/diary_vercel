// 1~100 사이 랜덤 정답 숫자 생성
const answer = Math.floor(Math.random() * 100) + 1;

// 시도 횟수와 입력값 저장용 배열
let attempts = 0;
const guessedNumbers = [];

alert("숫자 맞추기 게임을 시작합니다!");

// 게임 실행 함수
function playGame() {
  while (true) {
    const input = prompt("숫자를 입력하세요 (1~100):");

    // 입력이 null이면 게임 종료
    if (input === null) {
      alert("게임을 종료합니다.");
      break;
    }

    const guess = Number(input);

    // 유효하지 않은 입력 처리
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("1부터 100 사이의 숫자를 입력해주세요!");
      continue;
    }

    guessedNumbers.push(guess);
    attempts++;

    // 정답 체크
    if (guess === answer) {
      alert(`정답입니다! ${attempts}번 만에 맞췄어요.`);
      break;
    } else if (guess < answer) {
      alert("🔽 너무 작아요!");
    } else {
      alert("🔼 너무 커요!");
    }
  }

  // 입력한 숫자들 출력
  alert(`입력한 숫자들: [${guessedNumbers.join(", ")}]`);
}

// 게임 시작
playGame();
