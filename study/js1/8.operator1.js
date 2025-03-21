// javascript의 연산자

/**
 * 데이터 처리를 위한 연산자의 종류
 *
 * 리터럴 (코드에서 값을 나타내는 표기법)
 * - 문자 리터럴, 숫자 리터럴, 불리언 리터럴
 *
 * 문: 코드에서 최소 실행 단위를 말함
 * 반복문, 조건문, 할당문
 *
 * 표현식 - 값으로 평가될 수 있는 문
 * 1
 * 1+1
 * call()
 */

let b;
b = 2;

// 산술연산자 +,-,*,/,%,**
console.log(5 + 1);
console.log(5 - 1);
console.log(5 * 1);
console.log(5 / 1);
console.log(5 % 2);
console.log(5 ** 2);
console.log(Math.pow(5, 2));

// 문자에서 산술 연산자가 사용될 때
let text = "안녕" + " 하세요";
console.log(text);
let text2 = 10 + "5";
console.log(typeof text2);
