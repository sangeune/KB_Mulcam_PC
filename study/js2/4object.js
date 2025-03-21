// 키로 사용할 수 있는 것
// key - 문자, '문자열', 숫자
// value - 원시값, 객체 (배열, 함수 등도 포함)
let apple = {
  name: '사과',
  'name-test': '사과',
  '한글 키': '한글 사과이름',
  0: 100,
};
console.clear();
console.log(apple.name);
console.log(apple['name-test']);
console.log(apple[0]);

let nums = ['11', 'test', 'sample'];
console.log(nums[1]);

const obj = {
  name: '개냥이',
  age: 2,
};
// console.log(obj.age);
// console.log(obj.name);

function getValue(object, key) {
  return object[key];
}

console.log(getValue(obj, 'name'));

function addkey(object, key, value) {
  object[key] = value;
}
addkey(obj, 'feel', '행복해');
console.log(obj);

// key : value 같으면 짧게 줄일 수 있다.

const x = 0;
const y = 0;
const coord = { x, y };
console.log(coord);

function makeObj(name, age) {
  return { name, age };
}

const person = makeObj('somy', 3);
console.log(person);

// 객체에 함수

const banana = {
  name: '바나나',
  display: function () {
    console.log('노랑색 바나나');
    console.log(this);
  },
  //   display: () => {
  //     console.log(this);
  //   },
};

console.clear();
// console.log(banana.name);
banana.display();
// console.log(banana);
