const faders=document.querySelectorAll('.fade-up, .fade-left, .fade-right');

window.addEventListener('scroll',()=>{
    faders.forEach(fader=>{
        const rect=fader.getBoundingClientRect();

        if(rect.top < window.innerHeight - 100){
            fader.style.opacity='1';
            fader.style.transform='translate(0,0)';
        }
    });
});

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close menu when clicking a nav link
const navLinks = nav.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            toggleMenu();
        }
    });
});