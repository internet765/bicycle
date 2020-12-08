document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.menu__body').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
});