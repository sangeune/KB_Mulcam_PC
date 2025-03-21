// 대소 관계 비교 연산자

const { log } = require("console");

// >, <, >=, <=
console.clear();
console.log(2 > 3);
console.log(2 <= 3);

// 연산자의 우선 순위
let a = 2;
let b = 3;
let result = ((a + b) * 4) / 5;

// 동등 비교 관계 연산자 ==
// == 값이 같은가
// != 값이 다른가
// === 값과 타입까지 같은가
// !== 값과 타입이 다른가
console.clear();
console.log(2 == 2);
console.log(2 != 2);
console.log(2 == "2");
console.log(2 === "2");
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);

const obj1 = { name: "sangeun" };
const obj2 = { name: "sangeun" };

console.log("참조주소", obj1 == obj2);
console.log("객체내부", obj1.name == obj2.name);
