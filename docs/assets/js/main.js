(function () {
  'use strict';

  // ===== Header scroll effect =====
  const header = document.querySelector('.header');
  const toggleClass = 'scrolled';

  const onScroll = function () {
    if (window.scrollY > 50) {
      header.classList.add(toggleClass);
    } else {
      header.classList.remove(toggleClass);
    }
  };

  window.addEventListener('scroll', onScroll);
  onScroll();

  // ===== Back to top button =====
  const backToTop = document.getElementById('back-to-top');

  if (backToTop) {
    const toggleBackToTop = function () {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', toggleBackToTop);

    backToTop.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===== Mobile navigation toggle =====
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.querySelector('.nav__list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navList.classList.toggle('active');
    });

    // Close nav when clicking a link
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navList.classList.remove('active');
      });
    });
  }

  // ===== Smooth scrolling for anchor links =====
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== Form submission (demo) =====
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Reset form
      this.reset();

      // Show thank you alert (in production, you'd POST to an API)
      alert('¡Gracias! Tu mensaje ha sido enviado. Me pondré en contacto contigo pronto.');
    });
  }
})();
