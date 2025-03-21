// boolean - true, false

let isFree = true;
console.log(isFree);

// 값 앞에 !!를 붙이면 boolean 타입으로 변경할 수 있다.
// falshy 값
console.log(!!0);
console.log(!!-0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// truthy 값
console.log(!!1);
console.log(!!-1);
console.log(!!"test");
console.log(!!{});
console.log(!!Infinity);

console.clear();
// null 비었다
let test = null;
let test2 = undefined;
console.log(typeof test);
console.log(typeof test2);
