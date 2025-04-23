document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.scroll-productos');
    const leftArrow = document.querySelector('.btn-arrow-left');
    const rightArrow = document.querySelector('.btn-arrow-right');

    leftArrow.addEventListener('click', function () {
        container.scrollBy({
            left: -container.clientWidth,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', function () {
        container.scrollBy({
            left: container.clientWidth,
            behavior: 'smooth'
        });
    });
});