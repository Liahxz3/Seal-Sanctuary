// =====================
// HERO SEAL IMAGE
// =====================

const heroSeal = document.getElementById("seal");

document.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 40;

    const y =
        (window.innerHeight / 2 - e.clientY) / 40;

    heroSeal.style.transform =
        `
        rotateY(${-x}deg)
        rotateX(${y}deg)
        translate(${x}px, ${y}px)
        `;
});


// =====================
// CURSOR SEAL PET
// =====================

const sealCursor =
    document.getElementById("sealCursor");

const sealImg =
    document.getElementById("sealImg");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

let float = 0;
let moving = false;
let hovering = false;

let idleTimeout;


// =====================
// MOUSE TRACKING
// =====================

document.addEventListener(
    "mousemove",
    (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        moving = true;

        // only change if not hovering
        if (!hovering)
            sealImg.src = "Seal-Normal.png";

        clearTimeout(idleTimeout);

        idleTimeout = setTimeout(() => {

            moving = false;

            if (!hovering)
                sealImg.src =
                    "Seal-Sleeping.png";

        }, 2000);
    }
);


// =====================
// CURSOR ANIMATION
// =====================

function animate() {

    // smooth follow
    currentX +=
        (mouseX - currentX) * 0.10;

    currentY +=
        (mouseY - currentY) * 0.10;

    const dx =
        mouseX - currentX;

    // floating motion
    float += 0.08;

    const bob =
        Math.sin(float) * 5;

    // tilt
    const angle =
        Math.max(
            -20,
            Math.min(
                20,
                dx * 0.2
            )
        );

    // position
  sealCursor.style.left =
    currentX - 10 + "px";

sealCursor.style.top =
    currentY + bob + "px";

    // rotation
    sealImg.style.transform =
        `
        rotate(${angle}deg)
        `;

    requestAnimationFrame(
        animate
    );
}

animate();


// =====================
// BUTTON HOVER
// =====================

document
.querySelectorAll(
    "a, button"
)
.forEach(el => {

    el.addEventListener(
        "mouseenter",
        () => {

            hovering = true;

            sealImg.src =
                "Seal-Happy.png";

            sealImg.style.transform +=
                " scale(1.2)";
        }
    );

    el.addEventListener(
        "mouseleave",
        () => {

            hovering = false;

            if (moving)
                sealImg.src =
                    "seal-swim.png";
            else
                sealImg.src =
                    "seal-sleep.png";
        }
    );
});

// =====================
// RANDOM FUN FACTS
// =====================

const facts = [
    "🦭 Some seals can sleep underwater!",
    "🦭 Harbor seals can hold their breath for up to 30 minutes.",
    "🦭 Leopard seals are one of Antarctica's top predators.",
    "🦭 Seal pups often learn to swim within weeks.",
    "🦭 Weddell seals can dive deeper than 600 meters.",
    "🦭 Seals use their whiskers to detect prey."
];

const factBox =
    document.getElementById("factBox");

if (factBox) {
    factBox.textContent =
        facts[
            Math.floor(
                Math.random() * facts.length
            )
        ];
}


// =====================
// SEAL WISDOM
// =====================

const wisdom = [
    "Always swim with confidence.",
    "Every wave brings a new adventure.",
    "Nap like a harbor seal.",
    "Fish today, worry tomorrow.",
    "The ocean rewards patience.",
    "Keep swimming, keep smiling."
];

const quote =
    document.getElementById("quote");

if (quote) {
    quote.textContent =
        `"${wisdom[
            Math.floor(
                Math.random() * wisdom.length
            )
        ]}"`;
}


// =====================
// FEED THE SEAL
// =====================

const reactions = [
    "🦭 Yum!",
    "🐟 More fish please!",
    "🌊 Splash!",
    "🦭 Happy seal noises!",
    "🐟 Chomp!",
    "🦭 Thank you!"
];

const feedBtn =
    document.getElementById("feedBtn");

const reaction =
    document.getElementById("reaction");

if (feedBtn) {

    feedBtn.addEventListener(
        "click",
        () => {

            reaction.textContent =
                reactions[
                    Math.floor(
                        Math.random() *
                        reactions.length
                    )
                ];

            // make seal excited
            sealImg.src =
                "Seal-Happy.png";

            setTimeout(() => {

                if (moving)
                    sealImg.src =
                        "Seal-Normal.png";
                else
                    sealImg.src =
                        "Seal-Sleeping.png";

            }, 1200);
        }
    );
}


// =====================
// HERO BUTTON
// =====================

const exploreBtn =
    document.querySelector(".btn");

const featured =
    document.querySelector(".featured");

if (exploreBtn && featured) {

    exploreBtn.addEventListener(
        "click",
        () => {

            featured.scrollIntoView({
                behavior: "smooth"
            });
        }
    );
}


// =====================
// SEAL OF THE DAY
// =====================

const seals = [
    {
        name: "Harbor Seal",
        fact: "Can hold their breath for up to 30 minutes."
    },
    {
        name: "Leopard Seal",
        fact: "One of Antarctica's top predators."
    },
    {
        name: "Grey Seal",
        fact: "Can weigh over 300 kilograms."
    },
    {
        name: "Weddell Seal",
        fact: "Can dive more than 600 meters deep."
    }
];

const sealTitle =
    document.querySelector(
        ".featured-card h3"
    );

const sealFact =
    document.querySelector(
        ".featured-card p"
    );

if (sealTitle && sealFact) {

    const random =
        seals[
            Math.floor(
                Math.random() *
                seals.length
            )
        ];

    sealTitle.textContent =
        random.name;

    sealFact.textContent =
        random.fact;
}