// switch 문법

let today = new Date();
let day = today.getDay();
console.clear();
// console.log(dayName)
// console.log(today.getDate());
// console.log(today.getDay());

let dayName;
if (day === 2) {
  console.log(dayName);
}
switch (day) {
  case 0:
    dayName = "일요일";
    break;
  case 1:
    dayName = "월요일";
    break;
  case 2:
    dayName = "화요일";
  case 3:
    dayName = "수요일";
    break;
  default:
    console.log("해당요일 없음");
}
