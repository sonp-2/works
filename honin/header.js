const header = document.querySelector('header');
header.classList.add('active');
const callback = (entries) => {
    for (const e of entries) {
        if (e.isIntersecting) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }
}
const options = {
    rootMargin: '-100px 0px 0px 0px'
};
const observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('.top'));