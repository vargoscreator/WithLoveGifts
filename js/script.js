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
document.addEventListener('click', function(event) {
    if (!event.target.closest('.header__link-block') && !event.target.closest('.header__link-open')) {
      const linkBlocks = document.querySelectorAll('.header__link-block, .header__link-open');
      linkBlocks.forEach(block => block.classList.remove('active'));
    }
});

if(document.querySelector('.accountpopup')){
    document.querySelector('.create-btn').addEventListener('click', () =>{
        document.querySelectorAll('.accountpopup__content').forEach(element => {
            element.classList.remove('active');
        });
        document.querySelector('.accountpopup__content-create').classList.add('active')
    });
    document.querySelector('.login-btn').addEventListener('click', () =>{
        document.querySelectorAll('.accountpopup__content').forEach(element => {
            element.classList.remove('active');
        });
        document.querySelector('.accountpopup__content-login').classList.add('active')
    });    
    document.querySelector('.accountpopup__select-name').addEventListener('click', function() {
        const content = document.querySelector('.accountpopup__select-content');
        content.classList.toggle('active');
    });    
    document.querySelectorAll('.accountpopup__select-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelector('.accountpopup__select-name').textContent = this.textContent;
            document.querySelector('.accountpopup__select-content').classList.remove('active');
        });
    });
    const accountpopupBtnsOpen = document.querySelectorAll('.loginBtn')
    const accountpopupBtnsClose = document.querySelector('.accountpopup__close')
    accountpopupBtnsOpen.forEach(item => {
        item.addEventListener('click', function() {
            accountpopupReset()
            document.querySelectorAll('.accountpopup__content').forEach(element => {
                element.classList.remove('active');
            });
            document.querySelector('.accountpopup__content-login').classList.add('active')
        });
    });
    accountpopupBtnsClose.addEventListener('click', accountpopupReset);
    function accountpopupReset(){
        document.querySelector('.accountpopup').classList.toggle('active');
        document.querySelector('.body').classList.toggle('no-scroll');
    }
}  

if (document.querySelector('.popupdiscount')) {
    setTimeout(() => {
        document.querySelector('.popupdiscount').classList.add('active');
    }, 2000);
    document.querySelectorAll('.popupdiscount__close, .popupdiscount__later').forEach(element => {
        element.addEventListener('click', () => {
            document.querySelector('.popupdiscount').classList.remove('active');
        });
    });
}