// animate on scroll
    AOS.init({
        offset: 50, // offset (in px) from the original trigger point
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: "ease", // default easing for AOS animations
    });

// hero 1 animations

//========== !DELAY BASE INCEASED TO SYNC WITH PRELOADER ANIMATION -- remove for production
let delayBase = 1200;
const boxes = document.querySelectorAll(".animated-boxes > li");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].setAttribute("style", `--box-delay: ${delayBase + "ms"}`);
    delayBase += 100;
}

// app download section animation
if (document.querySelector(".d-app")) {
    const target = document.querySelector(".d-app-thumb > img");
    let targetDistance;
    let lastScrollPostion;
    let postionModifier;

    window.addEventListener("scroll", parallaxEffect);

    function parallaxEffect() {
        targetDistance = target.getBoundingClientRect().y;

        //  checking if the element is inside the viewport
        if (targetDistance < window.innerHeight && targetDistance >= window.innerHeight * -1) {
            postionModifier = lastScrollPostion < window.scrollY ? 3 : -3;
            target.style.top = parseInt(getComputedStyle(target).top) + postionModifier + "px";
        } else {
            target.style.top = "0px";
        }
        // tracking the scroll postion
        lastScrollPostion = window.scrollY;
    }
}

// gsap global
const SCROLL_TRIGGER_DEFAULT = {
    start: "top center",
    end: "bottom top",
    fastScrollEnd: false,
    once: true,
};

// custom utiliy
function selector(parent, children) {
    const parentElement = gsap.utils.selector(parent);
    return parentElement(children);
}

function sectionExists(section, sectionAnimation) {
    if (document.querySelector(section)) {
        sectionAnimation();
    }
}

function ctaBackgroundAnimation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".cta-s1",
            ...SCROLL_TRIGGER_DEFAULT,
        },
        defaults: {
            ease: "back",
        },
    });

    tl.from(selector(".cta-s1 .cta-thumb", ".thumb"), {
        scale: 0.45,
        duration: 0.2,
    }).from(selector(".cta-s1 .cta-thumb", ".bg"), { scale: 0 }, ">-.2");
}

sectionExists(".cta-s1", ctaBackgroundAnimation);

function home3Shape() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-s2__content",
            ...SCROLL_TRIGGER_DEFAULT,
        },
        defaults: {
            ease: "ease",
        },
    });

    tl.from(
        selector(".hero-s2__content", ".shape"),
        {
            scale: 0.45,
            duration: 0.7,
            ease: "back",
        },
        ">1"
    ).from(selector(".hero-s2", ".shapes"), {
        x: -300,
        duration: 0.7,
    });
}

sectionExists(".hero-s2__content", home3Shape);

function downloadApp3() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".d-app-s3",
            ...SCROLL_TRIGGER_DEFAULT,
        },
        defaults: {
            ease: "back",
        },
    });

    tl.from(selector(".d-app-thumb-s3", ".t-img"), {
        rotate: 20,
        duration: 0.6,
    });
}

sectionExists(".d-app-s3", downloadApp3);
