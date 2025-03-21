// 내장객체
// 원시값을 필요에 따라 관련된 빌트인 객체로 변환할 수 있다.
// 필요성이 없어지면 다시 원시값으로 변환한다.

const number = 123;
console.log(typeof number);

number.toString();
console.log(typeof number.toString());

const txt = 'test';
console.log(txt.length);

//number 타입에서 사용하는 내장객체
let num2 = new Number(1235555.1325);
console.log(num2.toFixed());
console.log(num2.toString());
console.log(num2.toLocaleString());
console.log(num2.toPrecision(5));

// Math
console.log(Math.PI);
console.log(Math.abs(-10));
console.log(Math.ceil(1.4));
console.log(Math.floor(1.8));
console.log(Math.round(1.6));
console.log(Math.random());

// string에서 사용하는 내장객체
let str = ' 안녕 하세요 ';
console.clear();
console.log(str.length);
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
console.log(str.indexOf('안'));
console.log(str.lastIndexOf('안'));
console.log(str.includes('영'));
console.log(str.startsWith('영'));
console.log(str.endsWith('영'));
console.log('---', str.slice(5));
console.log(str.trim());

let long = '여러분 반갑습니다. 오늘도 화이팅';
console.log(long.split('.'));
console.log(long.split('.', 1));

console.log(new Date());
console.log(new Date('jun 5, 2025'));

let now = new Date();
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.toLocaleString());
