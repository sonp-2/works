//ハンバーガーメニュー
const SP_NAV = document.querySelector('.sp-nav');
js_btn.onclick = () => {
    js_header.classList.toggle('active');
    //ナビゲーションメニューがはみ出た時
    setTimeout(() => {
        if (window.innerHeight < SP_NAV.getBoundingClientRect().bottom) {
            SP_NAV.style.height = 'calc(100vh - 60px)';
        } else {
            SP_NAV.style.height = '';
        }
    }, 300);
};

//アコーディオン
const BP = 900;
const ACC = document.querySelectorAll('.acc');
ACC.forEach((e, i) => {
    e.addEventListener('click', () => {
        if (window.innerWidth < BP) {
            e.classList.toggle('active');
            // for (j = 0; j < ACC.length; j++) {
            //     if (!(i == j)) {
            //         console.log(j);
            //         ACC[j].classList.remove('active');
            //     }
            // }
        }
    });
});
//--------//
window.addEventListener('resize', () => {
    if (window.innerWidth > BP) {
        ACC.forEach(e => {
            e.classList.remove('active');
        });
    }
});

// 4K //
const CONT = document.querySelector('.cont');
const INNER2 = document.querySelector('.inner2');
const four = () => {
    if (window.innerWidth > BP && (INNER2.offsetHeight + 240) < window.innerHeight) {
        console.log('s');
        CONT.style.height = 'calc(100vh - 60px)';
    } else {
        CONT.style.height = '';
    }
}
four();
window.addEventListener('resize', four);