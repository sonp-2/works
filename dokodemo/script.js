/* =============================
    top-logo img src
============================= */
{
    const IMG = document.querySelector('.logo');
    const IMG_SP = IMG.getAttribute('src');
    const IMG_PC = IMG_SP.replace('sp','pc');
    const BP = 600;
    const changeImgPath = () => {
        if (window.innerWidth < BP) {
            IMG.setAttribute('src', IMG_SP);
        } else {
            IMG.setAttribute('src', IMG_PC);
        }
    }

    changeImgPath();
    addEventListener('resize', () => {
        changeImgPath();
    });
}
/* =============================
    ハンバーガーメニュー
============================= */
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
// リンクを押したら閉じる
const SP_LINKS = document.querySelectorAll('.sp-nav a');
SP_LINKS.forEach(e => {
    e.addEventListener('click', () => {
        js_header.classList.remove('active');
    })
});
/* =============================
    アンカーリンク
============================= */
const A_LINKS = document.querySelectorAll('a[href^="#"]');
A_LINKS.forEach(e => {
    e.addEventListener('click', f => {
        f.preventDefault();
        const ID_EL = document.querySelector(e.getAttribute('href'));
        const EL_TOP = window.pageYOffset + ID_EL.getBoundingClientRect().top - 60;
        window.scrollTo({
            top: EL_TOP,
            behavior: "smooth"
        });
    });
});
//param受け取り
const PARAM = getParam('id');
const ID_EL2 = document.querySelector(`#${PARAM}`);
if (!(ID_EL2 == null)) {
const EL_TOP2 = window.pageYOffset + ID_EL2.getBoundingClientRect().top - 60;
    window.scrollTo({
        top: EL_TOP2,
        behavior: "smooth"
    });
}
// getParam()
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
/* =============================
    iPhone5 SE1 (320px)
============================= */
const VP = document.querySelector('meta[name="viewport"]');
if (screen.width < 375) {
    VP.setAttribute('content','width=375, initial-scale=1.0');
}
/* =============================
    アコーディオンボタン1
============================= */
//変数
const ACC_BTN = document.querySelectorAll('.acc-btn');
const ACC_CONT = document.querySelectorAll('.acc-cont');
const ACC_BTN_TEXT = [];
    ACC_BTN.forEach(e => {
        ACC_BTN_TEXT.push(e.innerHTML);
    });
const CLOSE_TXT = '閉じる▲';
const BP = 700;
let accBool = [];
    for (let i = 0; i < ACC_BTN.length; i++) {
        accBool[i] = false;
    }
let accContHeight = [];
    ACC_CONT.forEach(e => {
        accContHeight.push(e.clientHeight);
        e.style.height = '0';
    });
//リサイズ
addEventListener('resize', () => {
    if (innerWidth < BP) {
        ACC_CONT.forEach(e => {
            e.style.height = 'auto';
        });
        accContHeight.length = 0;
        ACC_CONT.forEach((e, i) => {
            accContHeight.push(e.offsetHeight);
            if (!accBool[i]) {
                e.style.height = '0';
            }
        });
    }
});
//処理
ACC_BTN.forEach((e, i) => {
    e.addEventListener('click', () => {
        if (accBool[i]) {
            e.textContent = ACC_BTN_TEXT[i];
            ACC_CONT[i].style.height = '0';
        } else {
            e.textContent = CLOSE_TXT;
            ACC_CONT[i].style.height = `${accContHeight[i]}px`;
        }
        accBool[i] = !accBool[i];
    })
});
/* =============================
    アコーディオンボタン2
============================= */
const ACC_BTN2 = document.querySelector('.acc-btn2');
const ACC_CONT2 = document.querySelector('.acc-cont2');
const ACC_BTN_TEXT2 = ACC_BTN2.innerHTML;
let accBool2 = false;

ACC_CONT2.style.height = 'auto';
let accContHeight2 = ACC_CONT2.clientHeight;
ACC_CONT2.style.height = '';
addEventListener('resize', () => {
    if (innerWidth < BP) {
        ACC_CONT2.style.height = 'auto';
        accContHeight2 = ACC_CONT2.clientHeight;
        ACC_CONT2.style.height = `${accContHeight2}px`;
        if (!accBool2) {
            ACC_CONT2.style.height = '';
        }
    }
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