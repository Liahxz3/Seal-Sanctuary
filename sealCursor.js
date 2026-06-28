// =====================
// HERO SEAL IMAGE
// =====================

const heroSeal = document.getElementById("seal");

if (heroSeal) {
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
}


// =====================
// CURSOR SEAL PET
// =====================

const sealCursor =
    document.getElementById("sealCursor");

const sealImg =
    document.getElementById("sealImg");

if (sealCursor && sealImg) {

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

            if (!hovering)
                sealImg.src =
                    "Seal-Normal.png";

            clearTimeout(
                idleTimeout
            );

            idleTimeout =
                setTimeout(() => {

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

        currentX +=
            (mouseX - currentX) * 0.10;

        currentY +=
            (mouseY - currentY) * 0.10;

        const dx =
            mouseX - currentX;

        float += 0.08;

        const bob =
            Math.sin(float) * 5;

        const angle =
            Math.max(
                -20,
                Math.min(
                    20,
                    dx * 0.2
                )
            );

        sealCursor.style.left =
            currentX - 10 + "px";

        sealCursor.style.top =
            currentY + bob + "px";

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
    // HOVER EFFECTS
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

                    sealImg.style.transform =
                        "rotate(0deg) scale(1.2)";
                }
            );

            el.addEventListener(
                "mouseleave",
                () => {

                    hovering = false;

                    if (moving)
                        sealImg.src =
                            "Seal-Normal.png";
                    else
                        sealImg.src =
                            "Seal-Sleeping.png";
                }
            );
        });
}