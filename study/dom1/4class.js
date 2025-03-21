// 버튼을 클릭하면 .btn
// .side 요소에 .active가
// 추가/ 삭제/ 토글된다

const $btn = document.querySelector('.btn');
const $side = document.querySelector('.side');

$btn.addEventListener('click', (e) => {
  console.log('클릭됐다');
  console.log(e.target);
  //   $side.classList.toggle('active');
  $side.setAttribute('style', 'display:block');
  $side.setAttribute('title', '메뉴리스트');
  $side.setAttribute('data-list', '메뉴리스트1');
});
