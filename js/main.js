let heroSwiper = new Swiper(".hero__slider", {
    loop: false,
    centeredSlides: true,
    spaceBetween: 300,
    slidesPerView: 1,
    navigation: {
        nextEl: ".hero__slider-next",
        prevEl: ".hero__slider-prev",
    },
    pagination: {
        el: ".hero__slider-pagination",
        clickable: true
    },
});

let swiper = new Swiper(".collection__slider-content", {
    loop: true,
    centeredSlides: true,
    spaceBetween: 16,
    initialSlide: 1,
    slidesPerView: 1.1,
    navigation: {
        nextEl: ".collection__slider-next",
        prevEl: ".collection__slider-prev",
    },
    pagination: {
        el: ".collection__slider-pagination",
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        1000: {
            slidesPerView: 4,
            centeredSlides: false,
        },
    },
});
let testimonialsSwiper = new Swiper(".testimonials__slider", {
    loop: false,
    spaceBetween: 12,
    slidesPerView: 1,
    allowTouchMove: true,
    navigation: {
        nextEl: ".testimonials__slider-next",
        prevEl: ".testimonials__slider-prev",
    },
    breakpoints: {
        768: {
            allowTouchMove: false,
        },
    },
    on: {
        slideChange: function () {
            testimonialsSwiperImages.slideTo(this.activeIndex);
        },
    },
});
let testimonialsSwiperImages = new Swiper(".testimonials__slider-images", {
    loop: false,
    spaceBetween: 12,
    slidesPerView: 1,
    allowTouchMove: true,
    breakpoints: {
        768: {
            allowTouchMove: false,
        },
    },
    on: {
        slideChange: function () {
            testimonialsSwiper.slideTo(this.activeIndex);
        },
    },
});    

resizeHeight()
function resizeHeight(){
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', () => {
resizeHeight()
});