import "../css/style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { loadComponents } from "./components.js";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Inject Header and Footer
  loadComponents();

  // --- Navbar Logic ---
  // Re-select elements after injection
  const navbar = document.getElementById("navbar");
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-slate-900/90", "backdrop-blur-md", "shadow-lg");
    } else {
      navbar.classList.remove(
        "bg-slate-900/90",
        "backdrop-blur-md",
        "shadow-lg",
      );
    }
  });

  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // --- GSAP Animations ---

  // 1. Initial Load Animation (Hero & Navbar)
  const entryTl = gsap.timeline();

  // Simple reveal for the whole navbar to avoid layout glitching on the top-bar
  entryTl.from("#navbar", {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
  });

  // Hero Elements slide up
  entryTl.to(
    ".hero-elem",
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
    },
    "-=0.8",
  );

  // 2. Parallax Effects
  // Hero Background
  gsap.to("#hero-bg", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    y: 300,
    scale: 1.15,
  });

  // Stats Section Background
  const statsSection = document.querySelector(".bg-fixed");
  if (statsSection) {
    gsap.fromTo(
      statsSection,
      { backgroundPosition: "50% 0px" },
      {
        backgroundPosition: "50% 100px",
        ease: "none",
        scrollTrigger: {
          trigger: statsSection,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  }

  // 3. Generic Scroll Reveals
  // Add class 'reveal-up' to any element for a generic slide-up animation
  gsap.utils.toArray(".reveal-up").forEach((elem) => {
    gsap.fromTo(
      elem,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 85%",
        },
      },
    );
  });

  // 4. Section Specific Animations

  // About Section - Smoother reveal
  if (document.getElementById("about")) {
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 75%",
      },
    });
    aboutTl
      .to(".about-img-container", {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      })
      .to(
        ".about-content",
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.8",
      );
  }

  // Section Headers
  gsap.utils.toArray(".section-header").forEach((header) => {
    gsap.to(header, {
      scrollTrigger: {
        trigger: header,
        start: "top 85%",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });
  });

  // Causes Cards Stagger with Hover Effect
  if (document.getElementById("causes")) {
    gsap.to(".cause-card", {
      scrollTrigger: {
        trigger: "#causes",
        start: "top 75%",
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    });

    // Add magnetic-like hover effect
    const cards = document.querySelectorAll(".cause-card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });
  }

  // Counters
  gsap.utils.toArray(".counter").forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    gsap.to(counter, {
      scrollTrigger: {
        trigger: counter,
        start: "top 90%",
        once: true,
      },
      innerHTML: target,
      duration: 2.5,
      ease: "power2.out",
      snap: { innerHTML: 1 },
      onUpdate: function () {
        this.targets()[0].innerText =
          Math.ceil(this.targets()[0].innerHTML) +
          (counter.classList.contains("percentage") ? "%" : "+");
      },
    });
  });

  // 5. Global Button Hover Effects
  const buttons = document.querySelectorAll(".btn-primary, .btn-outline");
  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.05, duration: 0.1, ease: "power1.out" });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.1, ease: "power1.out" });
    });
  });
});
