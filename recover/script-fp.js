/* ==========================
    トップキャンペーンボタン
========================== */
// const CONT1 = document.querySelector('.cont1');
// const CONT2 = document.querySelector('.cont2');
// const TOP = document.querySelector('.top');
// const TOP_TITLE = document.querySelector('.top_title_w');
// const CAM_WRAP = document.querySelector('.campaign-wrap');
// CONT1.addEventListener('click', e => {
//     e.preventDefault();
//     TOP.style.background = '';
//     TOP_TITLE.style.display = 'block';
//     CAM_WRAP.style.display = 'none';
// })
// CONT2.addEventListener('click', e => {
//     TOP.style.background = '#0003';
//     TOP_TITLE.style.display = 'none';
//     CAM_WRAP.style.display = 'block';
// })
/* ==========================
        アンカーリンク
========================== */
const LINKS = document.querySelectorAll('a[href^="#"]');
LINKS.forEach(e => {
    e.addEventListener('click', f => {
        f.preventDefault();
        const ID_EL = document.querySelector(e.getAttribute('href'));
        const EL_TOP = window.pageYOffset + ID_EL.getBoundingClientRect().top;
        window.scrollTo({
            top: EL_TOP,
            behavior: "smooth"
        });
    });
});
// Page Top
const PAGE_TOP = document.querySelector('.pagetop');
PAGE_TOP.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
});
/* ==========================
        もっとみる
========================== */
class ViewMore {
    constructor(hide, btn, txt) {
        const HIDE = document.getElementById(hide);
        if (!(HIDE == null)) {
            const BTN = document.getElementById(btn);
            const span = '#' + btn + ' span';
            const BTNSPAN = document.querySelector(span)
            const TXT1 = BTNSPAN.textContent;
            const TXT2 = txt;
            let elHeight = HIDE.clientHeight;
            let isOpen = false;
            
            HIDE.style.overflow = 'hidden';
            HIDE.style.height = 0;
            HIDE.style.transition = 'height .3s';
            
            window.addEventListener('resize', () => {
                if (isOpen) {
                    HIDE.style.height = 'auto';
                    elHeight = HIDE.clientHeight;
                    HIDE.style.height = elHeight + 'px';  
                } else {
                    HIDE.style.height = 'auto';
                    elHeight = HIDE.clientHeight;
                    HIDE.style.height = 0;
                }
            });
            
            BTN.addEventListener('click', () => {
                if (isOpen) {
                    BTN.classList.remove('active');
                    HIDE.style.height = 0;
                    isOpen = false;
                    BTNSPAN.innerHTML = TXT1;
                } else {
                    BTN.classList.add('active');
                    HIDE.style.height = elHeight + 'px';
                    isOpen = true;
                    BTNSPAN.innerHTML = TXT2;
                }
            });
        }
    }
}

const viewMore = new ViewMore('js-hide','js-btn','折りたたむ −');
/* =============================
    アコーディオンボタン2
============================= */
//どこでもrecoverから
const ACC_BTN2 = document.querySelector('.acc-btn2');
const ACC_CONT2 = document.querySelector('.acc-cont2');
const ACC_BTN_TEXT2 = ACC_BTN2.innerHTML;
const CLOSE_TXT = '折りたたむ▲';
let accBool2 = false;

ACC_CONT2.style.height = 'auto';
let accContHeight2 = ACC_CONT2.clientHeight;
ACC_CONT2.style.height = '';
addEventListener('resize', () => {
    // if (innerWidth < BP) {
        ACC_CONT2.style.height = 'auto';
        accContHeight2 = ACC_CONT2.clientHeight;
        ACC_CONT2.style.height = `${accContHeight2}px`;
        if (!accBool2) {
            ACC_CONT2.style.height = '';
        }
    // }
});

ACC_BTN2.addEventListener('click', () => {
    if (accBool2) {
        ACC_BTN2.textContent = ACC_BTN_TEXT2;
        ACC_CONT2.style.height = '';
        ACC_CONT2.classList.remove('active');
    } else {
        ACC_BTN2.textContent = CLOSE_TXT;
        ACC_CONT2.style.height = `${accContHeight2}px`;
        ACC_CONT2.classList.add('active');
    }
    accBool2 = !accBool2;
});

