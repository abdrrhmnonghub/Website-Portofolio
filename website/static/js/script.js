document.addEventListener("DOMContentLoaded", () => {
  // 1. TYPING ANIMATION
  const textToType = "Halo, saya Abdurrahman";
  const typewriterElement = document.getElementById("typewriter");
  let i = 0;

  function typeWriter() {
    if (i < textToType.length) {
      typewriterElement.innerHTML += textToType.charAt(i);
      i++;
      let randomSpeed = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
      setTimeout(typeWriter, randomSpeed);
    }
  }

  setTimeout(typeWriter, 800);

  // 2. SCROLL ANIMATION
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
});
