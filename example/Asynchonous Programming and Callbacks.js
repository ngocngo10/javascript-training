console.log('Log1');
setTimeout(() => {
  console.log('inside the function')
}, 0);
console.log('Log2');

// console.log('Chờ đợi');
// setTimeout(function () {
//   console.log('hihi')
// }, 5000)

// console.log('before')
// setTimeout(() => {
// // runs after 2 seconds
// console.log('inside the function')
// }, 2000)
// console.log('after')

// function doHomework(subject, callback) {
//   setTimeout( function(){
//       console.log(`Bắt đầu làm bài tập ${subject}.`);
//       callback();
//   }, 5000);

// }

// function alertFinished(){
//   console.log('Làm bài tập xong!');
// }
// doHomework('Toán', alertFinished);

//Promise
const myPromise = new Promise(function (resolve, reject) {

  // code here
  const codeIsFine = true;

  if (codeIsFine) {
    resolve('fine')
  } else {
    reject('error')
  }
})
// Promise
// Có 3 trạng thái: Pendding, Fulfilled, Reject()
var promise = new Promise(
  //Excutor function
  function name(resolve, reject) {
    // Logic
    // Thành công: resolve()
    // Thất bại: reject()
    // Fake call API
    resolve([
      {
        id : 1,
        name: 'javascript'
      }
    ])
  }
);

promise.then(function () {
  console.log('Successually!');
})
  .catch(function () {
console.log('Failure');
  })
  .finally(function () {
console.log('Done');
  });
