console.log('외부파일');

const $target = document.getElementsByClassName('target');
console.log('$target--', $target);

const $ul = document.querySelector('.list');
console.log($ul);
$ul.style.background = 'red';

const $ul2 = document.querySelectorAll('.list');
console.log($ul2);

const $ul3 = document.getElementsByClassName('list');
console.log($ul3);

let output = '<p>1번요소</p>...';
const $target2 = document.getElementById('target');
console.log($target2);

for (let i = 0; i < 10; i++) {
  output += `<p>${i + 1}번째 요소</p>`;
}

$target2.textContent = output;
// $target2.innerHTML = output;
