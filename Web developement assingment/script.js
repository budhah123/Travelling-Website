const images = [
    './Background image 1.jpg',
    './Background image 2.jpg',
    './backgroud image 3.jpg',
    './Background image 4.jpg',
    './background image 5.jpg'
];

let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    const contentImage = document.querySelector('.content-image');
    contentImage.style.opacity = 0; // Fade out
    setTimeout(() => {
        contentImage.style.backgroundImage = `url('${images[currentIndex]}')`;
        contentImage.style.opacity = 1; // Fade in
    }, 1000); // Match with the CSS transition time
}

// Change background every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);


document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.review-slider', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4, // Adjust as needed
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiper2 = new Swiper('.card-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4, // Adjust as needed
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    const swiper3 = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        slidesPerView: 3,
        spaceBetween: 30,
    });
});
    