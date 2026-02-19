// Typing Effect
const text = "Working in Theoretical Computer Science.";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
typeEffect();

// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
});

// Scroll Animation
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// Animate Skill Bars
const skillsSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress");

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


// Animate Research Tags
const tags = document.querySelectorAll(".research-tags span");

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

tagObserver.observe(document.querySelector("#research"));

const modal = document.getElementById("cvModal");
const openBtn = document.getElementById("openCV");
const closeBtn = document.getElementById("closeCV");

openBtn.onclick = () => {
    modal.style.display = "flex";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Optional: close when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
