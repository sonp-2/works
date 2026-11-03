let slider;
let sliderFlag = false;

$(window).on('load resize', () => {
    slider = $('.news-box').bxSlider({
        touchEnabled: false,//リンクを有効にするためスライドをマウスでドラッグした際にスライドの切り替えを可能にする機能を無効化
        mode: 'vertical',//縦スライド指定
        controls: false,//前後のコントロールを表示させない。
        auto: 'true',//自動的にスライド
        pager: false//ページ送り無効化
    });
    sliderFlag = true;
});