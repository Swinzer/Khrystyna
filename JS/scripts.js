document.addEventListener('DOMContentLoaded', () => {
    // --- Прокрутка до секцій при натисканні на елементи меню ---
    document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Запобігаємо стандартному переходу по посиланню
            const targetId = link.getAttribute('href').substring(1); // Отримуємо id секції
            const targetSection = document.getElementById(targetId); // Знаходимо елемент на сторінці

            if (targetSection) {
                // Вираховуємо висоту хедера для врахування при прокрутці
                const headerHeight = document.querySelector('header').offsetHeight;
                
                window.scrollTo({
                    top: targetSection.offsetTop - headerHeight, // Прокручуємо до секції з урахуванням хедера
                    behavior: 'smooth' // Плавна анімація прокрутки
                });
            }
        });
    });
});

    // --- Анімація відгуків ---
    const reviews = document.querySelectorAll('.review');
    let currentIndex = 0;

    const showNextReview = () => {
        reviews[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % reviews.length; // Зациклення
        reviews[currentIndex].classList.add('active');
    };

    // Додаємо клас active до першого відгуку
    reviews[0].classList.add('active');
    // Змінювати відгук кожні 5 секунд
    setInterval(showNextReview, 5000);

    // --- Залишити кнопки у футері, що переадресовують на інші сторінки ---
    const footerButtons = document.querySelectorAll('.gallery-btn');

    footerButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const href = button.getAttribute('onclick').match(/'(.*?)'/)[1];
            window.location.href = href;
        });
    });
});
