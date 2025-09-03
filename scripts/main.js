// ---------------------- HAMBURGER MENU ----------------------

const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.mobile-nav a, .mobile-nav .mobile-button');
const body = document.body;
const html = document.documentElement; // Get the <html> element

function handleMenuToggle() {
    const isActive = hamburgerMenu.classList.contains('active');

    if (isActive) {
        // Close menu and enable scroll
        hamburgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
        body.classList.remove('no-scroll');
        html.classList.remove('no-scroll'); // Also remove from <html>
    } else {
        // Open menu and disable scroll
        hamburgerMenu.classList.add('active');
        mobileNav.classList.add('active');
        body.classList.add('no-scroll');
        html.classList.add('no-scroll'); // Also add to <html>
    }
}

function closeMenu() {
    hamburgerMenu.classList.remove('active');
    mobileNav.classList.remove('active');
    body.classList.remove('no-scroll');
    html.classList.remove('no-scroll'); // Also remove from <html>
}

hamburgerMenu.addEventListener('click', handleMenuToggle);
navLinks.forEach(link => link.addEventListener('click', closeMenu));


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