import { gsap } from "./gsapConfig"; // Ensure the path is correct

function animateWords(wordElements: NodeListOf<HTMLElement>) {
  gsap.to(wordElements, {
    opacity: 1,
    y: 0,
    duration: 0.1,
    stagger: 0.1,
    ease: "cubic-bezier(0.22,1,0.36,1)",
  });
}

export default function initTextAnimation(selector: string = ".inview_fadein") {
  const texts = document.querySelectorAll<HTMLElement>(selector);

  texts.forEach((text) => {
    const words = text.innerHTML.split(" ");
    text.innerHTML = words
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");

    const wordElements = text.querySelectorAll<HTMLElement>(".word");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateWords(wordElements);
            entry.target.classList.add('inView');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(text);
  });
}
