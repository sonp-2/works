/* ヘッダー固定scrollEvent */
const nav = document.getElementById('js-nav');
const main = document.getElementById('js-main');
const navH = nav.clientHeight;
window.addEventListener('scroll', () => {
	const mainBottom = main.getBoundingClientRect().bottom - navH;
    if (mainBottom < 1) {
        nav.classList.add('page-down');
        main.classList.add('page-down');
    } else {
        nav.classList.remove('page-down');
        main.classList.remove('page-down');
    }
});

/* ヘッダー固定IOAPI */
// const observerHeader = new IntersectionObserver (
//     (entries) => {
//         for (const e of entries) {
//             // 監視対象が画面内にあるとき
//             if (e.isIntersecting) {
//                 nav.classList.remove('page-down');
//             // 監視対象が画面外にあるとき
//             } else {
//                 nav.classList.add('page-down');
//             }
//         }
//     },{
//         rootMargin:'-70px 0px 0px 0px'
//     }
// );
// // ファーストビューを監視
// observerHeader.observe(main);

/* ギャラリーモーダル */
const item = document.querySelectorAll('.gallery_div_item');
const prof = document.querySelectorAll('.gallery_div_prof');
const overlay = document.querySelector('.gallery_div_overlay');
for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function() {
        prof[i].classList.add('active');
        overlay.classList.add('active');
    });
}
overlay.addEventListener('click', function() {
    this.classList.remove('active');
    for (let i = 0; i < item.length; i++) {
        prof[i].classList.remove('active');
    }
});

//目次 ハイライト
const a = document.querySelectorAll('.js-a');
const d = document.querySelectorAll('.js-d');
d.forEach((en, i) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                a.forEach(x => x.classList.remove('active'));
                a[i].classList.add('active');
            }
        });
    },{rootMargin:'-50% 0px'});
    observer.observe(en);
});
//ヘッダーの時ハイライトなし
const observerMain = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            a.forEach(x => x.classList.remove('active'));
        }
    })
},{rootMargin:'-50% 0px'});
observerMain.observe(main);



//お知らせフェードイン
const newEl = document.getElementById('js-new');
const observerNew = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            newEl.classList.add('active');
        }
    })
},{
    rootMargin: '-30%',
});
observerNew.observe(newEl);

