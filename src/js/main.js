import "../css/style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // --- Navbar Logic ---
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

  // Hero Section
  const heroTl = gsap.timeline();
  heroTl.to(".hero-elem", {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Parallax Effect for Hero BG
  gsap.to("#hero-bg", {
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    y: 200, // Move image down slower than scroll
    scale: 1.1,
  });

  // About Section
  gsap.to(".about-img-container", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 70%",
    },
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
  });

  gsap.to(".about-content", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 70%",
    },
    x: 0,
    opacity: 1,
    duration: 1,
    delay: 0.2,
    ease: "power2.out",
  });

  // Section Headers
  gsap.utils.toArray(".section-header").forEach((header) => {
    gsap.to(header, {
      scrollTrigger: {
        trigger: header,
        start: "top 80%",
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  });

  // Causes Cards Stagger
  gsap.to(".cause-card", {
    scrollTrigger: {
      trigger: "#causes",
      start: "top 75%",
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });

  // Counters
  gsap.utils.toArray(".counter").forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    gsap.to(counter, {
      scrollTrigger: {
        trigger: counter,
        start: "top 85%",
        once: true, // Play only once
      },
      innerHTML: target,
      duration: 2,
      snap: { innerHTML: 1 },
      onUpdate: function () {
        this.targets()[0].innerHTML =
          Math.ceil(this.targets()[0].innerHTML) +
          (counter.classList.contains("percentage") ? "%" : "+");
      },
    });
  });
});
