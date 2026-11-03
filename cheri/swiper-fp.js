// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// import Swiper from 'swiper';


const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        370: {
            slidesPerView: 1.3,
        },
        450: {
            slidesPerView: 1.5,
        },
        500: {
            slidesPerView: 1.7,
        },
        600: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 2.2,
        },
        750: { //iPad 768px
            slidesPerView: 2.4,
        },
        800: {
            slidesPerView: 2.5,
        },
        850: {
            slidesPerView: 2.7,
        },
        900: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3.6,
        },
        1100: {
            slidesPerView: 3.7,
        },
        1200: {
            slidesPerView: 4,
        },
        1300: {
            slidesPerView: 4.2,
        },
        1400: {
            slidesPerView: 4.5,
        },
        1500: {
            slidesPerView: 4.7,
        },
        1600: {
            slidesPerView: 4.9,
        },
        1700: {
            slidesPerView: 5.3,
        },
        1800: {
            slidesPerView: 5.8,
        },
        2500: {
            slidesPerView: 7.3,
        },
        3000: {
            slidesPerView: 9,
        },
        3500: {
            slidesPerView: 10,
        }
    }
});