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

// 3. HAMBURGER MENU LOGIC
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Toggle menu saat hamburger diklik
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Tutup menu otomatis saat link diklik
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
// =========================================
// 4. LOGIC SLIDER MANUAL & OTOMATIS (2 DETIK)
// =========================================
const eduSlider = document.getElementById("eduSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (eduSlider && prevBtn && nextBtn) {
  let autoSlideInterval;

  // Fungsi menggeser ke kanan
  const slideNext = () => {
    // Cek apakah slider sudah mentok di ujung kanan
    if (
      eduSlider.scrollLeft + eduSlider.clientWidth >=
      eduSlider.scrollWidth - 10
    ) {
      eduSlider.scrollTo({ left: 0, behavior: "smooth" }); // Balik ke awal
    } else {
      eduSlider.scrollBy({ left: eduSlider.clientWidth, behavior: "smooth" });
    }
  };

  // Fungsi menggeser ke kiri
  const slidePrev = () => {
    // Cek apakah slider sudah di paling kiri
    if (eduSlider.scrollLeft <= 10) {
      eduSlider.scrollTo({ left: eduSlider.scrollWidth, behavior: "smooth" }); // Lempar ke akhir
    } else {
      eduSlider.scrollBy({ left: -eduSlider.clientWidth, behavior: "smooth" });
    }
  };

  // Event listener klik manual (menghentikan timer agar tidak double-slide)
  nextBtn.addEventListener("click", () => {
    slideNext();
    resetInterval();
  });

  prevBtn.addEventListener("click", () => {
    slidePrev();
    resetInterval();
  });

  // Fungsi menyalakan auto slider 2 detik (2000 milidetik)
  const startInterval = () => {
    autoSlideInterval = setInterval(slideNext, 6000);
  };

  // Fungsi reset timer jika tombol manual ditekan
  const resetInterval = () => {
    clearInterval(autoSlideInterval);
    startInterval();
  };

  // Nyalakan auto slider pertama kali web dimuat
  startInterval();
}
