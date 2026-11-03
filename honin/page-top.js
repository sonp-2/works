const pageTop = document.querySelector('.page-top');
pageTop.addEventListener('click', e => {
    e.preventDefault();
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
});