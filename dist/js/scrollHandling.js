window.onload = prepareToUse;

// Show button after scroll 500px
window.addEventListener("scroll", function () {
  let scrollTopButton = document.querySelector('.scroll-top');
  if (window.scrollY >= 500) {
    scrollTopButton.classList.add('visible');
  } else {
    scrollTopButton.classList.remove('visible');
  }
});

// Prepere functions to use instead of onClick in index.html file
function prepareToUse() {
  document.querySelector('.scroll-top').onclick = function () {
    scrollTop();
  }
  document.querySelector('.scroll-down').onclick = function () {
    scrollDown();
  }
  let navbarChildren = document.querySelector('.navbar-nav').children;
  for (let i = 0; i < navbarChildren.length; i++) {
    navbarChildren[i].onclick = function () {
      navbarScroll(i);
    }
  }
}

// Scroll to header
function scrollTop() {
  document.querySelector('header').scrollIntoView();
}

// Scroll to .about-us
function scrollDown() {
  document.querySelector('.about-us').scrollIntoView();
}

// Scroll to specific section
function navbarScroll(navItemNumber) {
  switch (navItemNumber) {
    case 0:
      document.querySelector('header').scrollIntoView();
      break;
    case 1:
      document.querySelector('.about-us').scrollIntoView();
      break;
    case 2:
      document.querySelector('.services').scrollIntoView();
      break;
    case 3:
      document.querySelector('.testimonials').scrollIntoView();
      break;
    case 4:
      document.querySelector('.find-us').scrollIntoView();
      break;
    case 5:
      document.querySelector('.contact').scrollIntoView();
      break;
    default:
      document.querySelector('header').scrollIntoView();
  }
}