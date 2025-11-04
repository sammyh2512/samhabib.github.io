/*const chevron = document.querySelector('.scroll-indicator .chevron');
const topSection = document.querySelector('.top');

topSection.addEventListener('mousemove', (e) => {
    const rect = chevron.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // distance between mouse and chevron center
    const chevronX = rect.left + rect.width/2;
    const chevronY = rect.top + rect.height/2;
    const distance = Math.hypot(mouseX - chevronX, mouseY - chevronY);

    if (distance < 50) { // proximity threshold in px
        chevron.style.transform = `translateY(10px)`; // move up
        chevron.style.opacity = 1;
    } else {
        chevron.style.transform = `translateY(0)`; // original position
        chevron.style.opacity = 0.8;
    }
});*/


document.addEventListener("DOMContentLoaded", () => {
  const fadeSections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // trigger once
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeSections.forEach(section => observer.observe(section));
});
