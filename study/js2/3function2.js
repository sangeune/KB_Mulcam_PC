// 선언함수 function name(){}
// 익명함수 const name = function(){}
// 화살표함수 const name =()=>{}
// 파라미터
// arguments
// return

// 생성자 함수 new Date() 객체를 생성
// 즉시실행함수 (function run(){})

function add(a = 0, b = 0, ...nums) {
  console.log(a);
  console.log(b);
  console.log(nums);
}
add(4, 3, 1, 5, 6);

// 점수를 입력하면
// 입력된 점수가 60 이하 = 'f'
// 입력된 점수가 60~80 = 'b'
// 입력된 점수가 80~90 = 'a'
// 입력된 점수가 90 이상 = 'A+'
// grade('이름', 90)

// 콜백함수
const add3 = (a, b) => a + b;
const multiply = (a, b) => a * b;

const calculator = function (a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
};
calculator(3, 4, add3);
calculator(-3, -4, multiply);
