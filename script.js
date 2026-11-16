
// =================================
// VALTERRA GROUP
// WEBSITE INTERACTIONS
// =================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// CLOSE MOBILE MENU AFTER CLICKING

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .division-card, .approach-points div, .vision h2, .contact-content"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// FOOTER YEAR

const year = new Date().getFullYear();

document.querySelector(".footer-bottom p").textContent =
    `© ${year} Valterra Group. All rights reserved.`;

