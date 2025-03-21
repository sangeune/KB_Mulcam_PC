// 객체 {}, 배열 []

// 함수 ()
// 선언함수, 익명함수

// function 함수이름(){}
// let 함수이름 = function (){}
// 함수는 호출이 일어나기 전까지 실행되지 않음
console.clear();
function add() {
  console.log('함수를 호출했다.');
}
add();

//
let add2 = function (a, b) {
  console.log('함수내부');
  //   console.log(a);
  //   console.log(b);
  console.log(arguments);
  console.log(arguments['0']);

  return a + b;
};
let reseult = add2(2, 5);
console.log(reseult);

// fullName('상은', '유'); // 상은 유
// fullName('삼식', '김'); // 삼식 김

// function add3(a, b) {
//   //   return a + b;
//   console.log('test'); // return undefined
// }

function add3(a, b) {
  //   return a + b;
  return; //return undefined
}

let add4 = (a, b) => a + b;

// let sum = add3;

// console.log(add3(2, 3));
// console.log(sum(1, 3));

function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}
print(-12);
