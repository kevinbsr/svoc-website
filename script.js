// ---------------------- CAROUSEL ----------------------

const galleryWrapper = document.querySelector(".courses-gallery-wrapper");
const controls = document.querySelectorAll(".control");
const items = document.querySelectorAll(".item");
const maxItems = items.length;
let currentItem = 0;

controls.forEach(control => {
    control.addEventListener('click', (e) => {
        e.preventDefault();

        const isLeft = control.classList.contains("arrow-left");

        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems) {
            currentItem = 0;
        }
        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        const scrollAmount = items[currentItem].offsetLeft - (galleryWrapper.offsetWidth / 2) + (items[currentItem].offsetWidth / 2);

        galleryWrapper.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });

        items.forEach(item => item.classList.remove('current-item'));
        items[currentItem].classList.add('current-item');
    });
});

// ---------------------- UPDATE YEAR ON FOOTER AUTOMATICALLY ---------------------

document.getElementById("currentYear").textContent = new Date().getFullYear();

// ---------------------- COUNTER ANIMATION ----------------------

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');

    const observerOptions = {
      root: null,
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('start-counting');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => {
      observer.observe(counter);
    });
  });