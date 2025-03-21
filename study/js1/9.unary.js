// 단항연산자
// + (양) - (음) !(부정)

let a = 5;
console.log(a);

a = -a;
console.log(+a);

// a = a + 1;
// console.log(a);
// a += 1;
// console.log(a);

let bool = true;
console.log(!bool);

// 숫자가 아닌 타입들을 숫자로 변환하면
// 어떤 값이 나오는지 확인할 수 있음
console.clear();
console.log(+true);
console.log(+false);
console.log(+null);
console.log(+undefined);
console.log(+"text");
console.log(!!"text");

// 할당연산자
let a3 = 5;
a3 += 1; // a3 = a3 + 1
console.log(a3);
a3 -= 1;
console.log(a3);
a3 *= 1;
console.log(a3);

// a3 = 5
// 증가 & 감소 연산자
a3++;
console.log(a3);
console.log(++a3);
a3--;
console.log(a3);
