// scroll

window.addEventListener('scroll', function () {
    
    document.querySelector('hr').style.width = `${230 + (window.scrollY/2)}px`
    document.querySelector('img').style.right = `${window.scrollY/2}px`
    document.querySelector('#h1a').style.fontSize = `${32 + (window.scrollY)/15}px`
    document.querySelector('#h1c').style.fontSize = `${70.4 - (window.scrollY)/15}px`
})

window.addEventListener('scroll', function () {
  if (window.scrollY > 570) {
   document.querySelector('#h1c').style.fontSize = '32px' 
  }
  
})

let a = document.getElementById('h1a');
let d = document.getElementById('h1c');

a.addEventListener('click',function (){
  a.style.fontSize = '100px';
  let h = document.querySelector('hr');
   console.log(h)

  window.scroll({
    top: 300,
    behavior: "smooth"
  });
})

d.addEventListener('click',function (){
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
})

d.addEventListener('mouseover',function (){
  document.getElementById('h1c') 
})

// taskList



let taskCount = 0;
let container2 = document.getElementById('task1');
let button = document.getElementById('btn');

button.addEventListener('click', function () {
  let noteText = document.getElementById('textInput').value;
  if (!noteText) {
    document.getElementById('warning').style.display = "block"
  }

  if(taskCount >= 2) {
    console.log('stop')
    return
  }
  creatNote()
})

function warning() {
  document.getElementById('warning').style.display = "none"  
}

function creatNote() {
  let noteText = document.getElementById('textInput').value;
  let node0 = document.createElement('div');
  // let node1 = document.createElement('h1');

  let node1 = document.createElement('input');
  let node2 = document.createElement('p');
  taskCount += 1;
  node2.innerHTML = noteText;

  // node1.innerHTML = noteText;
  // node1.setAttribute('style', 'width:100px; height:100px; font-size: 26px; padding:5px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)')

  node1.setAttribute('type','checkbox')
  node2.setAttribute('style','display:inline; margin-left:5px; font-size: 26px ')
  
  node0.appendChild(node1);
  node0.appendChild(node2);

  container2.insertAdjacentElement('beforeend', node0);

  node0.addEventListener('click', function () {
    const task1 = document.getElementById('task1');
    if (task1.childElementCount === 2) {
      // alert('hello')
      document.getElementById('warning').style.display = "block"
      document.getElementById('message').innerText = 'Hello'
      return
    } else {
      task1.childElementCount
    // console.log('task1', task1)
    // console.log('task1.childElementCount', task1.childElementCount)
    node0.remove();
    taskCount -= 1;
    console.log('node0', node0)
    }
  })
  
  document.getElementById('textInput').value = '';
}


let w = document.getElementsByTagName('div')
  //  console.log(w)