const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

let currentIndex = 0;

// Clone first and last items for seamless looping
const firstClone = items[0].cloneNode(true);
const lastClone = items[totalItems - 1].cloneNode(true);

carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, items[0]);

const updateCarouselPosition = () => {
    const offset = -(currentIndex + 1) * 100; // Adjust for clones
    carousel.style.transform = `translateX(${offset}%)`;
};

const moveToNext = () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        updateCarouselPosition();
    } else {
        currentIndex++;
        updateCarouselPosition();
        carousel.addEventListener('transitionend', () => {
            carousel.style.transition = 'none';
            currentIndex = 0;
            updateCarouselPosition();
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease';
            });
        }, { once: true });
    }
};

const moveToPrev = () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarouselPosition();
    } else {
        currentIndex--;
        updateCarouselPosition();
        carousel.addEventListener('transitionend', () => {
            carousel.style.transition = 'none';
            currentIndex = totalItems - 1;
            updateCarouselPosition();
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s ease';
            });
        }, { once: true });
    }
};

nextButton.addEventListener('click', moveToNext);
prevButton.addEventListener('click', moveToPrev);

// Initialize carousel position
carousel.style.transition = 'none';
updateCarouselPosition();
setTimeout(() => {
    carousel.style.transition = 'transform 0.5s ease';
});
