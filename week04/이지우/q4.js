// 예제문제 1
let htmlContainer = document.getElementById("htmlContainer");
let updateButton = document.getElementById("updateHtml");
let htmlInput = document.getElementById("htmlInput");

// updateButton.addEventListener("click", function() {
//     let userInputHTML = htmlInput.value;
//     htmlContainer.innerHTML = userInputHTML;
// });

updateButton.addEventListener("click", async function() {
    try{
        let userInputHTML = htmlInput.value;
        htmlContainer.innerHTML = userInputHTML;
    }
    catch(error){
        console.log('오류');
    }
});

//예제문제 2
// 1번 코드
// 마지막 줄
// 1
// 2
// 3

// 2번 코드
// 잡힌 에러: 에러 발생
// 계속 진행

// 3번 코드
// 시작
// 끝
// 2초 후 완료