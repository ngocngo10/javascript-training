function asyncFunction(callback) {
  console.log("Start");
  setTimeout(() => {
     callback();
  }, 0);
  console.log("Waiting");
}

let printEnd = function() {
  console.log("End");
}

asyncFunction(printEnd)