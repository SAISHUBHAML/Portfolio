document.addEventListener("DOMContentLoaded", function () {

    // Typing Effect
    const typingElement = document.querySelector(".typing");
    if (typingElement) {
        const text = "I am a member of Scalable Algorithms for Large-Scale Data (ScaleX) Lab.";
        let index = 0;

        function typeEffect() {
            if (index < text.length) {
                typingElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeEffect, 50);
            }
        }
        typeEffect();
    }

    // Theme Toggle
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");
        });
    }

    // Scroll Fade Animation
    const faders = document.querySelectorAll(".fade-in");
    if (faders.length > 0) {
        const appearOnScroll = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.3 });

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }

    // Skill Bars Animation
    const skillsSection = document.querySelector("#skills");
    const progressBars = document.querySelectorAll(".progress");

    if (skillsSection && progressBars.length > 0) {
        const skillsObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    progressBars.forEach(bar => {
                        bar.style.width = bar.getAttribute("data-width");
                    });
                }
            });
        }, { threshold: 0.5 });

        skillsObserver.observe(skillsSection);
    }

    // Research Tags Animation
    const researchSection = document.querySelector("#research");
    const tags = document.querySelectorAll(".research-tags span");

    if (researchSection && tags.length > 0) {
        const tagObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tags.forEach((tag, index) => {
                        setTimeout(() => {
                            tag.classList.add("show");
                        }, index * 150);
                    });
                }
            });
        }, { threshold: 0.5 });

        tagObserver.observe(researchSection);
    }

    // CV Modal
    const modal = document.getElementById("cvModal");
    const openBtn = document.getElementById("openCV");
    const closeBtn = document.getElementById("closeCV");

    if (modal && openBtn && closeBtn) {
        openBtn.onclick = () => modal.style.display = "flex";
        closeBtn.onclick = () => modal.style.display = "none";

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }

    // Active Sidebar Highlight
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".side-nav a");

    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener("scroll", () => {
            let current = "";

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + current) {
                    link.classList.add("active");
                }
            });
        });
    }

});
