function addClass() {
  let ele = document.getElementById('logo');
  /* thêm class*/
  console.log('ele: ', ele);
  // ele.classList.add('title', 'color', 'background');
  ele.className += ' title color background';
}

function removeClass() {
  let removeELe = document.getElementById('logo');
  removeELe = removeELe.classList.remove('title');
  
}

function toggleClass() {
  var element = document.getElementById("logo");
  element.classList.toggle("title");
}

  // Select div
  const div = document.querySelector('div');
  console.log('div ', div);

  // Apply style to div
  // div.setAttribute('style', 'text-align: center');

div.style.height = '200px';
div.style.width = '200px';
// div.style.border = '2px solid black';
div.style.textAlign = 'center';