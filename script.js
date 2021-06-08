const button = document.querySelector('.button');
const info = document.querySelector('.info');
const background = document.querySelector('.about');
function come(){
    info.setAttribute('style','animation-name:motion-in;animation-duration:1s;animation-fill-mode:forwards;');
    button.setAttribute('style','animation-name:motion-in;animation-duration:1.1s;animation-fill-mode:forwards;');
}
window.onload = function() {
  setTimeout(come(),3000);
}
