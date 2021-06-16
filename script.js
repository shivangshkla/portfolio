const navbar = document.querySelector('header');
const menuText1 = document.querySelector('.nav-links-1');
const menuText2 = document.querySelector('.nav-links-2');
const menuText3= document.querySelector('.nav-links-3');
var $menuText1 = $('.nav-links-1')
var $menuText2 = $('.nav-links-2')
var $menuText3 = $('.nav-links-3')
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
        menuText1.classList.add('nav-after');
        menuText2.classList.add('nav-after');
        menuText3.classList.add('nav-after');
        $menuText1.addClass('after');
        $menuText2.addClass('after');
        $menuText3.addClass('after');
    } else {
        navbar.classList.remove('nav-active');
        menuText1.classList.remove('nav-after');
        menuText2.classList.remove('nav-after');
        menuText3.classList.remove('nav-after');
        $menuText1.removeClass('after')
        $menuText2.removeClass('after')
        $menuText3.removeClass('after')
    }
};
function navScroll(){
    scrollBy(0,-70);
}
window.onhashchange = navScroll;