let obj = { name: '홍길동', age: 30 };
let obj2 = obj;

console.log(obj2 === obj);

let obj3 = { ...obj };
console.log(obj2 === obj3);

let arr1 = [1, 2, 3, 4];
let arr2 = arr1;
console.log(arr1 === arr2);

let arr3 = [...arr1];
console.log(arr1);
console.log(arr3);

console.log(arr1[0] === arr3[0]);
