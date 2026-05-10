// ─────────────────────────────
// NAVBAR SCROLL EFFECT
// ─────────────────────────────

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {

  if (window.scrollY > 40) {

    navbar.style.padding = '14px 0';
    navbar.style.background = 'rgba(250,247,242,0.95)';
    navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';

  } else {

    navbar.style.padding = '20px 0';
    navbar.style.background = 'rgba(250,247,242,0.9)';
    navbar.style.boxShadow = 'none';

  }

});


// ─────────────────────────────
// SCROLL REVEAL ANIMATION
// ─────────────────────────────

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add('visible');

    }

  });

}, {
  threshold: 0.15
});

revealElements.forEach(el => {
  revealObserver.observe(el);
});


// ─────────────────────────────
// SKILL BAR ANIMATION
// ─────────────────────────────

const skillBars = document.querySelectorAll('.skill-bar');

const skillObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const width = entry.target.getAttribute('data-width');

      entry.target.style.width = width + '%';

    }

  });

}, {
  threshold: 0.3
});

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});


// ─────────────────────────────
// CURSOR GLOW EFFECT
// ─────────────────────────────

const glow = document.createElement('div');

glow.classList.add('cursor-glow');

document.body.appendChild(glow);

window.addEventListener('mousemove', (e) => {

  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';

});


// ─────────────────────────────
// HERO PARALLAX EFFECT
// ─────────────────────────────

const heroImage = document.querySelector('.hero-img-wrap');

window.addEventListener('mousemove', (e) => {

  if (!heroImage) return;

  const x = (window.innerWidth / 2 - e.pageX) / 45;
  const y = (window.innerHeight / 2 - e.pageY) / 45;

  heroImage.style.transform =
    `translate(${x}px, ${y}px)`;

});


// ─────────────────────────────
// BUTTON RIPPLE EFFECT
// ─────────────────────────────

const buttons = document.querySelectorAll(
  '.btn-primary, .btn-ghost, .form-submit'
);

buttons.forEach(button => {

  button.addEventListener('mouseenter', () => {

    button.style.transform = 'translateY(-2px) scale(1.02)';

  });

  button.addEventListener('mouseleave', () => {

    button.style.transform = 'translateY(0) scale(1)';

  });

});


// ─────────────────────────────
// TOOL CARD HOVER EFFECT
// ─────────────────────────────

const toolCards = document.querySelectorAll('.tool-card');

toolCards.forEach(card => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 18;
    const rotateY = (centerX - x) / 18;

    card.style.transform =
      `perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)`;

  });

  card.addEventListener('mouseleave', () => {

    card.style.transform =
      'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';

  });

});


// ─────────────────────────────
// CONTACT FORM ANIMATION
// ─────────────────────────────

const form = document.querySelector('.contact-form');

if (form) {

  form.addEventListener('submit', (e) => {

    e.preventDefault();

    const button = document.querySelector('.form-submit');

    button.innerHTML = 'Message Sent ✓';

    button.style.background = '#2e8b57';

    setTimeout(() => {

      button.innerHTML = 'Send Message →';

      button.style.background = '';

      form.reset();

    }, 2500);

  });

}


// ─────────────────────────────
// SMOOTH ACTIVE NAV LINK
// ─────────────────────────────

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {

      current = section.getAttribute('id');

    }

  });

  navLinks.forEach(link => {

    link.classList.remove('active');

    if (link.getAttribute('href') === `#${current}`) {

      link.classList.add('active');

    }

  });

});


// ─────────────────────────────
// FLOATING HERO TAG
// ─────────────────────────────

const heroTag = document.querySelector('.hero-tag');

if (heroTag) {

  let floatDirection = 1;

  setInterval(() => {

    heroTag.style.transform =
      `translateY(${floatDirection * 6}px)`;

    floatDirection *= -1;

  }, 1800);

}


// ─────────────────────────────
// PAGE LOAD ANIMATION
// ─────────────────────────────

window.addEventListener('load', () => {

  document.body.classList.add('loaded');

});


// ─────────────────────────────
// TYPEWRITER EFFECT
// ─────────────────────────────

const heroSubtitle = document.querySelector('.hero-subtitle');

if (heroSubtitle) {

  const originalText = heroSubtitle.innerText;

  heroSubtitle.innerText = '';

  let index = 0;

  function typeWriter() {

    if (index < originalText.length) {

      heroSubtitle.innerText += originalText.charAt(index);

      index++;

      setTimeout(typeWriter, 18);

    }

  }

  setTimeout(typeWriter, 500);

}