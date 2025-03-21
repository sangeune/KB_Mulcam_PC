// 실행 순서를 제어하는 것을 제어문
// 조건문, 반복문

const { log } = require("console");

// if(조건식){실행문}
// if(조건식){실행문}else{실행문}
// if(조건식){실행문}else if(조건문){실행문}else{실행문}
console.clear();
let fruit = "배";
if (fruit === "apple") {
  console.log("사과네");
} else if (fruit === "orange") {
  console.log("오렌지네");
} else {
  console.log("사과도 오렌지도 아니네");
}

if ("dd") {
  console.log("true 입니다");
} else {
  console.log("false 입니다");
}

// 삼항연산자
// 조건식 ? 참일 경우 실행내용: 거짓일 경우 실행 내용
"text" ? console.log("참") : console.log("거짓");
fruit === "배" ? console.log("배 맞습니다") : console.log("베 아닙니다.");

// 입력된 숫자가 짝수면 '짝' 홀수면 '홀' 출력하는 javascreen
