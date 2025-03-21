let arr = new Array(3);
console.log(arr);

arr = Array.of(1, 2, 3, 4, 5);
console.log(arr);

arr = [1, 2, 3];
console.log(arr);

let arr2 = Array.from('test test');
console.log(arr2);

arr2 = Array.from({
  0: '안녕',
  1: '하세요',
  length: 2,
});

console.log(arr2.length);
