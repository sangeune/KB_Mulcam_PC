// fetch('https://jsonplaceholder.typicode.com/posts') //
//   .then((response) => response.json()) //
//   .then((json) => console.log(json));

let posts;
async function getPosts() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
    let posts = await response.json();
    console.log(posts[0]);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('끝');
  }
}
getPosts();
