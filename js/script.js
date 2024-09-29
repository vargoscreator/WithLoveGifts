const body = document.querySelector('.body');
const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
burger.addEventListener('click', function() {
    headerOpened()
});
function headerOpened(){
    headerMenu.classList.toggle('active');
    burger.classList.toggle('active');
    if (headerMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
function checkScreenWidth() {
    if (window.innerWidth > 999 && headerMenu.classList.contains('active')) {
        document.body.style.overflow = '';
        headerMenu.classList.remove('active');
        burger.classList.remove('active');
    }
}
const headerLinkPpen = document.querySelector('.header__link-open');
headerLinkPpen.addEventListener('click', function() {
    this.classList.toggle('active')
    document.querySelector('.header__link-block').classList.toggle('active');
});