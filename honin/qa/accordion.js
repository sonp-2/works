const accQ = document.querySelectorAll('.acc-q');
const accA = document.querySelectorAll('.acc-a');

accQ.forEach((e, i) => {
    e.addEventListener('click', () => {
        e.classList.toggle('open');
        accA[i].classList.toggle('open');
    });
});