document.addEventListener('DOMContentLoaded', () => {
    
    // Select all project cards on the page
    const projectCards = document.querySelectorAll('.project-card');

    // If no project cards are found, exit the script.
    if (!projectCards.length) {
        return;
    }

    /**
     * Initializes a single carousel instance within a project card.
     * This function is designed to be self-contained and reusable.
     * @param {HTMLElement} card - The project-card element.
     */
    const initializeCarousel = (card) => {
        const carousel = card.querySelector('.project-image-carousel');
        const prevBtn = card.querySelector('.carousel-btn.prev');
        const nextBtn = card.querySelector('.carousel-btn.next');
        const pagination = card.querySelector('.carousel-pagination');
        const slides = Array.from(carousel.children);

        // If essential elements are missing, do not proceed.
        if (!carousel || !prevBtn || !nextBtn || !pagination || slides.length <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            return;
        }

        // --- Create Pagination Dots ---
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('pagination-dot');
            if (index === 0) {
                dot.classList.add('active');
            }
            pagination.appendChild(dot);
        });
        const dots = Array.from(pagination.children);

        // --- Button Click Handlers ---
        nextBtn.addEventListener('click', () => {
            const slideWidth = slides[0].clientWidth;
            carousel.scrollBy({ left: slideWidth, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            const slideWidth = slides[0].clientWidth;
            carousel.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        });


        // --- Update UI based on Scroll Position (Intersection Observer) ---
        // This is the most performant way to track the active slide.
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const slideIndex = slides.indexOf(entry.target);
                    
                    // Update pagination
                    dots.forEach((dot, index) => {
                        dot.classList.toggle('active', index === slideIndex);
                    });

                    // Update button visibility
                    prevBtn.classList.toggle('hidden', slideIndex === 0);
                    nextBtn.classList.toggle('hidden', slideIndex === slides.length - 1);
                }
            });
        }, {
            root: carousel,
            threshold: 0.5 // Trigger when 50% of the slide is visible
        });

        // Observe each slide
        slides.forEach(slide => observer.observe(slide));
    };

    // Initialize a carousel for each project card found.
    projectCards.forEach(initializeCarousel);
});