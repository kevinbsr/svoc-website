/**
 * Corrected, performant scroll animation trigger.
 * Observes both individual elements and parent containers for staggered animations.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all elements that should be animated: 
    // single items AND parent containers for staggering.
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll, .stagger-animation');

    if (!elementsToAnimate.length) {
        return;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add .in-view to the observed element (could be a single item or a grid)
                entry.target.classList.add('in-view');

                // If it's a stagger container, we also need to make its children visible
                // so they can participate in the transition.
                if (entry.target.classList.contains('stagger-animation')) {
                    const children = entry.target.querySelectorAll('.animate-on-scroll');
                    children.forEach(child => {
                        child.classList.add('in-view');
                    });
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});