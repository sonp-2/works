const A_LINKS = document.querySelectorAll('a[href*="price/?id="]');
A_LINKS.forEach(e => {
    e.addEventListener('click', f => {
        f.preventDefault();
        const ID_EL = getTargetElement(e);
        const EL_TOP = window.pageYOffset + ID_EL.getBoundingClientRect().top - 95;
        window.scrollTo({
            top: EL_TOP,
            behavior: "smooth"
        });
    });
});
//param受け取り
const PARAM = getParam('id');
const ID_EL2 = document.querySelector(`#${PARAM}`);
if (ID_EL2 != null) {
const EL_TOP2 = window.pageYOffset + ID_EL2.getBoundingClientRect().top - 95;
    window.scrollTo({
        top: EL_TOP2,
        behavior: "smooth"
    });
}

/**
 * 【/price/?id=】を【#】に置き換える関数 
 * @param {HTMLElement} e A_LINK[i] クリックしたaタグ
 * @return {HTMLElement} スクロール先の要素
 */
function getTargetElement(e) {
    const targetId = e.getAttribute('href').replace('/price/?id=', '#');
    const targetEl = document.querySelector(targetId);
    return targetEl;
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