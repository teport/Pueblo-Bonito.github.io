document.addEventListener('DOMContentLoaded', function () {
    const carruseles = document.querySelectorAll('.grid-productos');

    carruseles.forEach(function (carrusel) {
        const container = carrusel.querySelector('.scroll-productos');
        const leftArrow = carrusel.querySelector('.btn-arrow-left');
        const rightArrow = carrusel.querySelector('.btn-arrow-right');

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
});
