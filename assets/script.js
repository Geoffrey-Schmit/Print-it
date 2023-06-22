const slides = [
    {
        image: './assets/images/slideshow/slide1.jpg',
        tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
    },
    {
        image: './assets/images/slideshow/slide2.jpg',
        tagLine: 'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
    },
    {
        image: './assets/images/slideshow/slide3.jpg',
        tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
    },
    {
        image: './assets/images/slideshow/slide4.jpg',
        tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
    },
];

const flecheGauche = document.querySelector('.arrow_left');
const flecheDroite = document.querySelector('.arrow_right');
const bulletPoint = document.querySelector('.dots');

let slideShow = slides[0];
const imageElement = document.createElement('img');
imageElement.src = slideShow.image;
const nomElement = document.createElement('p');
nomElement.innerHTML = slideShow.tagLine;

const sectionBanner = document.querySelector('#banner');
sectionBanner.appendChild(imageElement);
sectionBanner.appendChild(nomElement);
imageElement.classList.add('banner-img');

flecheGauche.addEventListener('click', () => {
    sectionBanner.appendChild(imageElement);
    sectionBanner.appendChild(nomElement);
    imageElement.classList.add('banner-img');
    imageElement.classList.add('slide-in-left');
});

flecheDroite.addEventListener('click', () => {
    sectionBanner.appendChild(imageElement);
    sectionBanner.appendChild(nomElement);
    imageElement.classList.add('banner-img');
    imageElement.classList.add('slide-in-right');
});

for (let i = 0; i < slides.length; i++) {
    if (i === 0) {
        bulletPoint.innerHTML += '<div class="dot dot_selected"></div>';
    } else {
        bulletPoint.innerHTML += '<div class="dot"></div>';
    }
}
