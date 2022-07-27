const request = require('request-promise')
async function a () {
  console.log(1);
  const response = await request.get('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new');
  // waits until the request completes...
  console.log(response);
}

a();
for (i = 0; i< 1000000; i++) {
  console.log(i);
}
console.log('End');