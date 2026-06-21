// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';

    } else {

        header.style.boxShadow = 'none';

    }

});


// =========================
// FADE IN SECTIONS
// =========================

const sections = document.querySelectorAll(
    '.services, .why-lmv, .cta, .contact'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});

function toggleMenu() {
    document
        .getElementById("mobileMenu")
        .classList
        .toggle("active");
}
