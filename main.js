// document.addEventListener('DOMContentLoaded', () => {
//   console.log('hey')
  
//   const body = document.querySelector('body');
//   body.remove();
  
// });


// const fakePic = document.getElementById('#cs-logo').src="https://imgflip.com/i/7m76ef";
// document.appendChild(fakePic);

const picArry = ['https://i.imgflip.com/7m791m.jpg', 'https://i.imgflip.com/7m793c.jpg', 'https://i.imgflip.com/7m795r.jpg','https://i.imgflip.com/7m793k.jpg', 'https://i.imgflip.com/7m797n.jpg', 'https://i.imgflip.com/7m7990.jpg','https://i.imgflip.com/7m799i.jpg', 'https://i.imgflip.com/7m79d9.jpg', 'https://i.imgflip.com/7m79ga.jpg', 'https://i.imgflip.com/7m79fm.jpg','https://i.imgflip.com/7m79no.jpg']

let randomNum = Math.floor(Math.random() * picArry.length);
const codeBox = document.querySelector('#qd-content');
//codeBox.remove()
const body = document.querySelector('body')
const pic = document.createElement('img')
pic.setAttribute('id','pic')
pic.setAttribute('src',`${picArry[randomNum]}`)
//body.appendChild(pic)
codeBox.replaceWith(pic)