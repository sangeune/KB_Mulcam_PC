const lists = document.querySelectorAll('.list>li');
console.log(lists);

// for (let i = 0; i < lists.length; i++) {
//   //   lists[i].style.fontSize = '2rem';
//   //   lists[i].style.color = 'tomato';
//   lists[i].style.cssText = `color:tomato; font-size:2rem`;
// }

lists.forEach((li, i) => {
  console.log('----', li);
  console.log('index', i);
  lists[i].style.cssText = `color:tomato; font-size:2rem`;
});
