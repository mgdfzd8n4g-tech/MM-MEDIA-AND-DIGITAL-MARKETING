
// =====================================
// VALTERRA GROUP & CO.
// PREMIUM WEBSITE FUNCTIONALITY
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // ---------------------------------
    // MOBILE NAVIGATION
    // ---------------------------------

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    if (menuButton && navigation) {

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("open");

            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.textContent = isOpen ? "✕" : "☰";

        });

        navigation.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";

            });

        });

        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {
                navigation.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";
            }

        });

    }


    // ---------------------------------
    // AUTOMATIC COPYRIGHT YEAR
    // ---------------------------------

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // ---------------------------------
    // SCROLL REVEAL ANIMATIONS
    // ---------------------------------

    const revealElements = document.querySelectorAll(
        ".service-card, .price-card, .process-item, " +
        ".about-content, .section-heading, .contact-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        });

        revealElements.forEach((element, index) => {

            element.classList.add("reveal");

            element.style.transitionDelay =
                `${(index % 4) * 100}ms`;

            observer.observe(element);

        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    // ---------------------------------
    // HERO ENTRANCE ANIMATION
    // ---------------------------------

    const hero = document.querySelector(".hero");

    if (hero) {
        hero.classList.add("hero-loaded");
    }


    // ---------------------------------
    // AUTOMATIC PACKAGE SELECTION
    // ---------------------------------

    const packageButtons = document.querySelectorAll("[data-plan]");
    const packageInput = document.getElementById("package");

    packageButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedPackage = button.getAttribute("data-plan");

            if (packageInput) {
                packageInput.value = selectedPackage;
            }

        });

    });


    // ---------------------------------
    // CONTACT FORM
    // ---------------------------------

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            const name = document.getElementById("name")?.value.trim() || "";
            const business = document.getElementById("business")?.value.trim() || "";
            const email = document.getElementById("email")?.value.trim() || "";
            const selectedPackage = packageInput?.value || "Not selected";
            const message = document.getElementById("message")?.value.trim() || "";

            if (!name || !email || !message) {
                alert("Please complete all required fields.");
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            const subject = encodeURIComponent(
                "New Business Enquiry - Valterra Group & Co."
            );

            const body = encodeURIComponent(

                `NEW WEBSITE ENQUIRY

Name: ${name}

Business: ${business}

Email: ${email}

Package: ${selectedPackage}

Message:

${message}

----------------------------

Valterra Group & Co.
Building Beyond Boundaries.`

            );

            // REPLACE WITH YOUR REAL BUSINESS EMAIL

            const businessEmail = "hello@yourdomain.co.za";

            window.location.href =
                `mailto:${businessEmail}?subject=${subject}&body=${body}`;

        });

    }


    // ---------------------------------
    // SMOOTH SCROLLING
    // ---------------------------------

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: window.matchMedia(
                        "(prefers-reduced-motion: reduce)"
                    ).matches ? "auto" : "smooth",
                    block: "start"
                });

            }

        });

    });


    // ---------------------------------
    // NAVIGATION SCROLL EFFECT
    // ---------------------------------

    const header = document.querySelector(".header");

    if (header) {

        const updateHeader = () => {
            header.classList.toggle("scrolled", window.scrollY > 40);
        };

        updateHeader();

        window.addEventListener("scroll", updateHeader, {
            passive: true
        });

    }

});


