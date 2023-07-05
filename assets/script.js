const slides = [
    {
        image: './assets/images/slideshow/slide1.jpg',
        tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
        textAlt: 'Impression tous formats',
    },
    {
        image: './assets/images/slideshow/slide2.jpg',
        tagLine: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
        textAlt: 'Tirage haute définition grand format',
    },
    {
        image: './assets/images/slideshow/slide3.jpg',
        tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
        textAlt: 'Grand choix de couleurs',
    },
    {
        image: './assets/images/slideshow/slide4.png',
        tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
        textAlt: 'Autocollants avec découpe laser sur mesure',
    },
];

let timer;
let currentSlide = 0;
const bulletPoint = document.querySelector('.dots');
const sectionBanner = document.getElementById('banner');
const imageElement = document.querySelector('.banner-img');
const tagLineElement = document.querySelector('.tagLine');

window.onload = () => {
    const flecheGauche = document.querySelector('.arrow_left');
    const flecheDroite = document.querySelector('.arrow_right');

    flecheDroite.addEventListener('click', nextSlide);
    flecheGauche.addEventListener('click', backSlide);

    for (let i = 0; i < slides.length; i++) {
        if (i === 0) {
            bulletPoint.innerHTML += `<div class="dot dot_selected"></div>`;
        } else {
            bulletPoint.innerHTML += `<div class="dot"></div>`;
        }
    }
    startSlideshow();
};

function updateSlide(index) {
    const slide = slides[index];
    imageElement.src = slide.image;
    tagLineElement.innerHTML = slide.tagLine;

    const dots = bulletPoint.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
    updateAltText(index);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide(currentSlide);
    updateAltText(currentSlide);
}

function backSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(currentSlide);
    updateAltText(currentSlide);
}

function startSlideshow() {
    timer = setInterval(nextSlide, 5000);
    updateAltText(currentSlide);
}

function updateAltText(index) {
    const slide = slides[index];
    imageElement.alt = `Image ${index + 1}: ${slide.textAlt}`;
}
