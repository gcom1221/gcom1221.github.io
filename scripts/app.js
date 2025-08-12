let cThumbnails = document.querySelectorAll('.cthumbnail');
let cMainImage = document.querySelector('#cmain-image');

for (let i = 0; i < cThumbnails.length; i++) {
  cThumbnails[i].addEventListener('click', function () {
    cMainImage.src = this.src;
  });
}


let rThumbnails = document.querySelectorAll('.rthumbnail');
let rMainImage = document.querySelector('#rmain-image');

for (let j = 0; j < rThumbnails.length; j++) {
  rThumbnails[j].addEventListener('click', function () {
    rMainImage.src = this.src;
  });
}

let fThumbnails = document.querySelectorAll('.fthumbnail');
let fMainImage = document.querySelector('#fmain-image');

for (let k = 0; k < fThumbnails.length; k++) {
  fThumbnails[k].addEventListener('click', function () {
    fMainImage.src = this.src;
  });
}

document.addEventListener('DOMContentLoaded', function () {
  let lines = document.querySelectorAll('.text-line');

  for (let l = 0; l < lines.length; l++) {
    (function (line, index) {
      setTimeout(function () {
        line.classList.add('slide-in');
      }, index * 500);
    })(lines[l], l);
  }
});

function revealOnScroll() {
  let reveals = document.querySelectorAll('.reveal');

  function reveal() {
    let windowHeight = window.innerHeight;
    let elementVisible = 150;

    for (let i = 0; i < reveals.length; i++) {
      let element = reveals[i];
      let elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    }
  }

  window.addEventListener('scroll', reveal);
  reveal(); 
}

revealOnScroll(); 

function setupThemeToggle() {
  let themeToggle = document.getElementById('themeToggle');
  let root = document.documentElement;
  let currentTheme = 'dark';

  function toggleTheme() {
    if (currentTheme === 'dark') {
      currentTheme = 'light';
    } else {
      currentTheme = 'dark';
    }

    root.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
      themeToggle.textContent = '🌙';
    } else {
      themeToggle.textContent = '☀️';
    }
  }

  themeToggle.addEventListener('click', toggleTheme);
}

function setupMobileMenu() {
  let menuToggle = document.querySelector('.menu-toggle');
  let navbar = document.querySelector('.navbar');

  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', function () {
      navbar.classList.toggle('open');
    });
  }
}

setupThemeToggle();
setupMobileMenu();

window.addEventListener('DOMContentLoaded', function () {
  new ParticleBackground();
});
