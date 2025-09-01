document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Animate header on page load
    // gsap.from("header", {
    //   y: -100,
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power3.out"
    // });
  
    // Animate hero text on page load
    gsap.from(".hero-text h1", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out"
    });
    gsap.from(".hero-text p", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: "power3.out"
    });
  
    // Animate benefit cards on scroll
    gsap.utils.toArray(".benefit-card").forEach(card => {
      gsap.from(card, {
        x: card.classList.contains('align-self-flex-end') ? 200 : -200,
        opacity: 0,
        duration: .2,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      });
    });
    
    gsap.utils.toArray(".benefit-card-right").forEach(card => {
      gsap.from(card, {
        x: card.classList.contains('align-self-flex-end') ? -200 : 200,
        opacity: 0,
        duration: .2,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      });
    });
  
    // Animate professor cards on scroll
    gsap.utils.toArray("#professors .card").forEach(card => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      });
    });
  
    // Animate testimonials on scroll
    gsap.utils.toArray("#testimonials .alumni-card").forEach(card => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      });
    });
  });