function toggleMenu(x) {
  x.classList.toggle("change");
}

const nav = document.querySelector(".mobile_nav");
const hamburger = document.querySelector(".hamburger_container");
const headerLogo = document.querySelector(".header_logo");
const bars = document.querySelectorAll('.bar');

hamburger.addEventListener('click', () => {
  if (nav.classList.contains('hamburger_checked')) {
    bars.forEach((bar) => bar.style.backgroundColor = "#333");
  } else {
    bars.forEach((bar) => bar.style.backgroundColor = "#fff");
  }

  nav.classList.toggle('hamburger_checked');
  document.body.classList.toggle('overflow');
});


const links = document.querySelectorAll('.mobile-link');

links.forEach((link) => {
  link.addEventListener('click', () => {

    if (nav.classList.contains('hamburger_checked')) {
      bars.forEach((bar) => bar.style.backgroundColor = "#333");
      toggleMenu(hamburger);
    } else {
      bars.forEach((bar) => bar.style.backgroundColor = "#fff");
      toggleMenu(hamburger);
    }

    nav.classList.remove('hamburger_checked');
    document.body.classList.remove('overflow');
  })
});