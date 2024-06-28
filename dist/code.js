"use strict";
const headerImage = document.querySelector('header > img');
const headerText = document.querySelector('.header-text');
window.addEventListener('scroll', () => {
    headerImage.style.transform = `translateY(${-window.scrollY}px)`;
    headerText.style.transform = `translateY(${-window.scrollY}px)`;
});
const textObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opaque');
        }
        else {
            entry.target.classList.remove('opaque');
        }
    });
});
const fadeInElements = document.querySelectorAll('h1, p, .pixel-art-showcase img, #itch-embed');
fadeInElements.forEach((element) => {
    textObserver.observe(element);
});
