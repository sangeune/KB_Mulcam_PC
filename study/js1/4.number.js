// 숫자
// 정수, 음수, 실수, 2진수, 8진수, 16진수

let integer = 123;
console.log(integer);

let binary = 0o173;
console.log(binary === 123);

// 특정 숫자를 0으로 나눌 때 무한대가 나옴
console.log(0 / 123);
console.log(123 / -0);
console.log(123 / "text");
