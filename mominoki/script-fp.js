// HUMBERGER MENU //
const btn = document.getElementById('js-btn');
const nav = document.getElementById('js-nav');
btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    nav.classList.toggle('active');
});
const ali = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < 5; i++) {
    ali[i].addEventListener('click', () => {
        btn.classList.remove('active');
        nav.classList.remove('active');
    });
}

// ANCHOR LINK //
const sec = document.getElementsByTagName('section');
ali.forEach((e, i) => {
    e.setAttribute('href','javascript:void(0)');
    e.addEventListener('click', () => {
        let ii = i;
        while (ii + 1 > sec.length) {
            ii -= sec.length;
        }
        const secTop = window.pageYOffset + sec[ii].getBoundingClientRect().top - 120;
        console.log(secTop);
        window.scrollTo({
            top: secTop,
            behavior: 'smooth',
        });
    });
});

// PC-NAV FIXED //
const topX = document.getElementById('js-top');
const menu = document.getElementById('js-nav-pc');
const observerNav = new IntersectionObserver (
    (entries) => {
        for (const e of entries) {
            if (e.isIntersecting) {
                menu.classList.remove('down');
            } else {
                menu.classList.add('down');
            }
        }
    },{
        rootMargin: '-61px 0px 0px 0px'
    }
);
observerNav.observe(topX);

// NEW BUTTON //
const mor = document.getElementById('js-new');
const hid = document.getElementById('js-n-hide');
if (!(hid == null)) {
    let hidHeight = hid.clientHeight;

    let newBool = false;

    hid.style.height = 0;

    window.addEventListener('resize', () => {
        if (newBool) {
            hid.style.height = 'auto';
            hidHeight = hid.clientHeight;
            hid.style.height = hidHeight + 'px';  
        } else {
            hid.style.height = 'auto';
            hidHeight = hid.clientHeight;
            hid.style.height = 0;
        }
    });

    mor.addEventListener('click', () => {
        if (newBool) {
            mor.classList.remove('active');
            hid.style.height = 0;
            newBool = false;
        } else {
            mor.classList.add('active');
            hid.style.height = hidHeight + 'px';
            newBool = true;
        }
    });
}
// REVIEW BUTTON //
const more = document.getElementById('js-rev');
const hide = document.getElementById('js-hide');
let hideHeight = hide.clientHeight;
let revBool = false;

hide.style.height = 0;

window.addEventListener('resize', () => {
    if (revBool) {
        hide.style.height = 'auto';
        hideHeight = hide.clientHeight;
        hide.style.height = hideHeight + 'px';  
    } else {
        hide.style.height = 'auto';
        hideHeight = hide.clientHeight;
        hide.style.height = 0;
    }
});

more.addEventListener('click', () => {
    if (revBool) {
        more.classList.remove('active');
        hide.style.height = 0;
        revBool = false;
    } else {
        more.classList.add('active');
        hide.style.height = hideHeight + 'px';
        revBool = true;
    }
});

// PAGE TOP //
const pageTop = document.getElementById('js-pagetop');
pageTop.addEventListener('click', () => {
    window.scroll({top: 0, behavior: 'smooth'});
});

// Swiper //
const swiper = new Swiper(".swiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});