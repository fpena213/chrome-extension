// document.addEventListener('DOMContentLoaded', () => {
//   console.log('hey')
  
//   const body = document.querySelector('body');
//   body.remove();
  
// });


// const fakePic = document.getElementById('#cs-logo').src="https://imgflip.com/i/7m76ef";
// document.appendChild(fakePic);

const picArry = ['assets/memes/']

const codeBox = document.querySelector('#qd-content');
codeBox.remove()
const body = document.querySelector('body')
const pic = document.createElement('img')
pic.setAttribute('id','pic')
pic.setAttribute('src','https://i.imgflip.com/7m78qv.jpg')
body.appendChild(pic)
