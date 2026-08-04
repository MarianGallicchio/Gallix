(function () {
  'use strict';

  // ===== Header scroll effect =====
  var header = document.querySelector('.header');

  var onScroll = function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll);
  onScroll();

  // ===== Back to top button =====
  var backToTop = document.getElementById('back-to-top');

  if (backToTop) {
    var toggleBackToTop = function () {
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
  var navToggle = document.getElementById('nav-toggle');
  var navList = document.querySelector('.nav__list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navList.classList.toggle('active');
    });

    // Close nav when clicking a link
    var navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navList.classList.remove('active');
      });
    });
  }

  // ===== Smooth scrolling for anchor links =====
  var anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== Form submission (demo) =====
  var contactForm = document.getElementById('contact-form');

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
