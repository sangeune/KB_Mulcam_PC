// 배열과 함께 사용하는 함수들
let fruits = ['사과', '배', '복숭아'];

// 추가 - 제일 뒤
fruits.push('딸기');
console.log(fruits);
// 추가 - 제일 앞
fruits.unshift('망고');
console.log(fruits);

// 제거 - 제일 뒤
fruits.pop();
console.log(fruits);

// 제거 - 제일 앞
fruits.shift();
console.log(fruits);

// 중간에 추가 혹은 삭제
fruits.splice(0, 2);
console.log(fruits);

// 배열과 배열을 병합
let arr1 = [1, 2, 3];
let arr2 = [5, 6, 7];
let arr3 = arr1.concat(arr2);
console.log(arr3);

// flat()
// fill()
// join()

// 배열과 함께 사용하는 고차함수
// forEach()
