// Toggle Mobile Menu
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon) {
    menuIcon.onclick = () => {
        navLinks.classList.toggle('active');
    };
}

// Simple Scroll Effect for Header
window.onscroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};