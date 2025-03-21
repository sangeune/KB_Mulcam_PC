/**
 * 성적관리 프로그램
 *
 * 90~100점: A -> 9,10
 * 80~89점: B -> 8
 * 70~79점: C -> 7
 * 60~69점: D -> 6
 * 60점 미만(59점이하): F
 */

let score = 99; // 점수를 입력 받기 위한 변수
score = Math.floor(score / 10);
console.log('score:', score);

switch (score) {
  case 10:
  case 9:
    console.log('A 학점입니다.');
    break;
  case 8:
    console.log('B 학점입니다.');
    break;
  case 7:
    console.log('C 학점입니다.');
    break;
  case 6:
    console.log('D 학점입니다.');
    break;
  default:
    console.log('F 학점입니다.');
}
