// const fetch = require('node-fetch');
// async function fetchText() {
//   let response = await fetch('https://reading-book-api.herokuapp.com/api/books?pageSize=20&pageNumber=1&sort=desc&typeSort=avrStarNumber');
//   let data = await response.text();
//   console.log(data);
// }

// const { default: fetch } = require("node-fetch");

// fetchText();

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then (function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })