// li 요소를 클릭하면 모든 li에 .active 삭제한다.
// li 요소를 클릭하면 클릭된 대상에 .active 붙는다.

const $lists = document.querySelectorAll('.con>li');
const $con = document.querySelector('.con');

// $lists.forEach((el, i) => {
//   el.addEventListener('click', (e) => {
//     $lists.forEach((elm) => {
//       elm.classList.remove('active');
//     });
//     console.log('리스트가 클릭됨', i);
//     console.log('이벤트객체', e.target);
//     console.log('이벤트객체 currentTarget', e.currentTarget);
//     el.classList.add('active');
//   });
// });

// $lists.forEach((el, i) => {
//   el.addEventListener('click', function (e) {
//     console.log('this', this);

//     $lists.forEach((elm) => {
//       elm.classList.remove('active');
//     });
//     this.classList.add('active');
//   });
// });

// $con.addEventListener('click', (e) => {
//   console.log('currentTarget', e.currentTarget);
//   console.log('target', e.target);
//   console.log('target', e);
//   if (e.target === 'p') {
//     console.log('p요소입니다.');
//     return;
//   } else {
//     console.log('p요소가 아닙니다.');
//   }
// });

$con.addEventListener('mouseenter', () => {
  console.log('마우스가 진입했다');
});
$con.addEventListener('mouseleave', () => {
  console.log('마우스가 빠져나갔다');
});
$con.addEventListener('mouseemove', () => {
  console.log('마우스가 빠져나갔다');
});
