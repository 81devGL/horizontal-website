gsap.registerPlugin(ScrollTrigger, SplitText);

let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        //snap: directionalSnap(1 / (sections.length - 1)),
        end: () => "+=" + document.querySelector(".container").offsetWidth,
    },
});

gsap.set(".box-1, .box-2", { y: 100 });

// red section
// gsap.to(".box-1", {
//     scale: 2,
//     duration: 1,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".green",
//         containerAnimation: scrollTween,
//         start: "center",
//         toggleActions: "play none none reverse",
//         start: "center 80%",
//         end: "center 20%",
//         scrub: true,
//         id: "1",
//     },
// });

// // gray section
// gsap.to(".box-2", {
//     y: -120,
//     backgroundColor: "#1e90ff",
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".box-2",
//         containerAnimation: scrollTween,
//         start: "center 80%",
//         end: "center 20%",
//         scrub: true,
//         id: "2",
//     },
// });

// // purple section
// ScrollTrigger.create({
//     trigger: ".box-3",
//     containerAnimation: scrollTween,
//     toggleClass: "active",
//     start: "center 60%",
//     id: "3",
// });

window.addEventListener("load", titleAnimation);
const h1 = document.querySelector("h1");
const splitText = new SplitText(h1, { type: "words" });
let splitTextTimeline = gsap.timeline();
gsap.set(h1, { perspective: 400 });

function titleAnimation() {
    splitText.split({ type: "chars, words, lines" });
    splitTextTimeline.from(
        splitText.chars,
        {
            duration: 0.5,
            autoAlpha: 0,
            scale: 5,
            force3D: true,
            stagger: 0.1,
        },
        0.5
    );
}