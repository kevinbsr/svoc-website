document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle --- (Your existing code)
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const body = document.body;

    if (hamburgerMenu && mobileNav) {
        const toggleMenu = () => {
            const isActive = hamburgerMenu.classList.toggle('active');
            mobileNav.classList.toggle('active');
            body.classList.toggle('no-scroll', isActive);
            hamburgerMenu.setAttribute('aria-expanded', isActive);
        };
        hamburgerMenu.addEventListener('click', toggleMenu);
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (hamburgerMenu.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }

    // --- Automatic Year Update in Footer --- (Your existing code)
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- START: Clean Carousel Logic ---
    const galleryWrapper = document.querySelector('.courses-gallery-wrapper');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    if (galleryWrapper && prevButton && nextButton) {
        const scrollAmount = () => {
            // Calculate the width of a single card including its gap
            const firstCard = galleryWrapper.querySelector('.course-card');
            if (!firstCard) return 0;
            const cardStyle = window.getComputedStyle(firstCard);
            const cardMargin = parseFloat(cardStyle.marginRight);
            return firstCard.offsetWidth + cardMargin;
        };

        nextButton.addEventListener('click', () => {
            const maxScroll = galleryWrapper.scrollWidth - galleryWrapper.clientWidth;
            // If we are at the end, scroll to the beginning
            if (galleryWrapper.scrollLeft >= maxScroll - 5) { // 5px tolerance
                galleryWrapper.scrollLeft = 0;
            } else {
                galleryWrapper.scrollLeft += scrollAmount();
            }
        });

        prevButton.addEventListener('click', () => {
            // If we are at the beginning, scroll to the end
            if (galleryWrapper.scrollLeft === 0) {
                galleryWrapper.scrollLeft = galleryWrapper.scrollWidth - galleryWrapper.clientWidth;
            } else {
                galleryWrapper.scrollLeft -= scrollAmount();
            }
        });

        // Note: On mobile, touch-scrolling is handled natively by the browser
        // because of the `overflow-x: auto` style. No extra JS is needed for that.
    }
    // --- END: Clean Carousel Logic ---
});

const faqItems = document.querySelectorAll('.faq-item');

if (faqItems.length) {
    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answerWrapper = item.querySelector('.faq-answer');
        const answerContent = answerWrapper.firstElementChild; // The actual <p> tag

        questionButton.addEventListener('click', () => {
            const isOpened = item.classList.contains('active');
            
            // Close all other items for a clean accordion effect
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Open the clicked item if it wasn't already open
            if (!isOpened) {
                item.classList.add('active');
                questionButton.setAttribute('aria-expanded', 'true');
            }
        });
    });
}
