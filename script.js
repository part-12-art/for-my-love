/* =========================================
   CONFIGURATION
========================================= */

// CHANGE THIS DATE
// Format: YYYY-MM-DDTHH:MM:SS

const relationshipStart =
    new Date("2023-06-16T00:00:00");

// CHANGE THESE NAMES IF YOU WANT
const person1 = "You";
const person2 = "Me";


/* =========================================
   LOADER
========================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                document
                    .getElementById("loader")
                    .classList.add("hide");

            },
            1000
        );

    }
);


/* =========================================
   START DATE
========================================= */

function displayStartDate() {

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };


    document
        .getElementById("startDateDisplay")
        .textContent =
        relationshipStart.toLocaleDateString(
            "en-US",
            options
        );

}


displayStartDate();


/* =========================================
   RELATIONSHIP COUNTER
========================================= */

function updateCounter() {

    const now = new Date();

    let years =
        now.getFullYear() -
        relationshipStart.getFullYear();


    let months =
        now.getMonth() -
        relationshipStart.getMonth();


    let days =
        now.getDate() -
        relationshipStart.getDate();


    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                0
            );

        days +=
            previousMonth.getDate();
    }


    if (months < 0) {

        years--;

        months += 12;
    }


    const difference =
        now.getTime() -
        relationshipStart.getTime();


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const hours =
        Math.floor(
            (totalSeconds / 3600) % 24
        );


    const minutes =
        Math.floor(
            (totalSeconds / 60) % 60
        );


    const seconds =
        totalSeconds % 60;


    document.getElementById("years")
        .textContent = years;


    document.getElementById("months")
        .textContent = months;


    document.getElementById("days")
        .textContent = days;


    document.getElementById("hours")
        .textContent = hours;


    document.getElementById("minutes")
        .textContent = minutes;


    document.getElementById("seconds")
        .textContent = seconds;

}


updateCounter();


setInterval(
    updateCounter,
    1000
);


/* =========================================
   NAVBAR
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById(
        "menuButton"
    );


const navMenu =
    document.getElementById(
        "navMenu"
    );


menuButton.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle(
            "open"
        );

    }
);


document
    .querySelectorAll("#navMenu a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    navMenu.classList.remove(
                        "open"
                    );

                }
            );

        }
    );


/* =========================================
   PARTICLES
========================================= */

const particleContainer =
    document.getElementById(
        "particles"
    );


const particleSymbols = [
    "♥",
    "♡",
    "✦",
    "·"
];


function createParticle() {

    const particle =
        document.createElement(
            "div"
        );


    particle.className =
        "particle";


    particle.textContent =
        particleSymbols[
            Math.floor(
                Math.random() *
                particleSymbols.length
            )
        ];


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.fontSize =
        (
            8 +
            Math.random() * 14
        ) + "px";


    particle.style.animationDuration =
        (
            8 +
            Math.random() * 12
        ) + "s";


    particle.style.animationDelay =
        Math.random() * 5 + "s";


    particleContainer.appendChild(
        particle
    );


    setTimeout(
        () => {

            particle.remove();

        },
        22000
    );

}


setInterval(
    createParticle,
    700
);


/* =========================================
   SURPRISE MODAL
========================================= */

const surpriseButton =
    document.getElementById(
        "surpriseButton"
    );


const surpriseModal =
    document.getElementById(
        "surpriseModal"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


function openModal() {

    surpriseModal.classList.add(
        "show"
    );

    document.body.classList.add(
        "modal-open"
    );

}


function closeModal() {

    surpriseModal.classList.remove(
        "show"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


surpriseButton.addEventListener(
    "click",
    openModal
);


modalClose.addEventListener(
    "click",
    closeModal
);


surpriseModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            surpriseModal
        ) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


/* =========================================
   MUSIC PLAYER
========================================= */

const music =
    document.getElementById(
        "backgroundMusic"
    );


const musicButton =
    document.getElementById(
        "musicButton"
    );


const musicIcon =
    document.getElementById(
        "musicIcon"
    );


const musicText =
    document.getElementById(
        "musicText"
    );


let musicPlaying = false;


musicButton.addEventListener(
    "click",
    async () => {

        if (!musicPlaying) {

            try {

                await music.play();

                musicPlaying = true;

                musicIcon.textContent =
                    "❚❚";

                musicText.textContent =
                    "Playing";

            }

            catch (error) {

                alert(
                    "Please add your music file inside the music folder."
                );

            }

        } else {

            music.pause();

            musicPlaying = false;

            musicIcon.textContent =
                "♫";

            musicText.textContent =
                "Music";

        }

    }
);


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .counter-card, .story-grid, .gallery-item, .letter-container"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        observer.observe(
            element
        );

    }
);