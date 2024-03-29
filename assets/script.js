const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* clic image flèche gauche + affichage dans la console */

const arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener('click', function() {
    console.log('Arrow left clicked');
});

/* clic image flèche droite + affichage dans la console  */

const arrowRight = document.querySelector('.arrow_right');
arrowRight.addEventListener('click', function() {
    console.log('Arrow right clicked');
});

/* affichage des dots sur le slider en fonction du nombre d'image + dot select de base à chaque rechargement de la page */

const banner = document.getElementById('banner');
const dotsContainer = document.querySelector('.dots');

slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('dot_selected');
    }
    dotsContainer.appendChild(dot);
});

let currentIndex = 0; /* affiche la première diapositive */

/* Fonction pour mettre à jour l'affichage de la diapositive */

function updateSlide(index) {
    const slide = slides[index];
    const bannerImage = document.querySelector('.banner-img');
    const tagLine = document.querySelector('#banner p');
    const dots = document.querySelectorAll('.dot');

    bannerImage.src = `./assets/images/slideshow/${slide.image}`;
    tagLine.innerHTML = slide.tagLine;

    /* Mettre à jour le point en cours de visionnage */

    dots.forEach((dot, i) => { /* dot représente chaque élément individuel dans la liste des points, et i représente l'index de cet élément dans la liste */
        if (i === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

/* flèche droite */

arrowRight.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % slides.length; /* Passer à la diapositive suivante (et revenir au début si on atteint la fin) */
    updateSlide(currentIndex); /* Mettre à jour l'affichage de la diapositive */
});

/* ex : currentIndex=2 slides.length=4 alors cela fera (2+1)%4=3 par conséquent currentIndex=3 */
/* bouble fin de slider : currentIndex=3 slides.length=4 alors cela fera (3+1)%4=0 par conséquent currentIndex=0 */

/* flèche gauche */

arrowLeft.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; /* Passer à la diapositive précédente (et revenir à la fin si on atteint le début) */
    updateSlide(currentIndex); /* Mettre à jour l'affichage de la diapositive */
});

/* boucle debut de slider : currentIndex=0 slides.length=4 alors cela fera (0-1+4)%4 -> 3%4=3 par conséquent currentIndex=3 */