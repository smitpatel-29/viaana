export function loadComponents() {
  const headerPlaceholder = document.getElementById("app-header");
  const footerPlaceholder = document.getElementById("app-footer");

  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = `
    <header class="fixed w-full z-50 top-0 transition-all duration-300 group" id="navbar">
        <!-- Top Bar -->
        <div class="hidden md:block bg-black/40 text-white text-xs border-b border-white/10 backdrop-blur-sm transition-all duration-300"
            id="top-bar">
            <div class="container mx-auto flex justify-between items-center">
                <!-- Left: Contact -->
                <div class="flex items-center">
                    <div class="px-6 py-3 border-r border-white/10 flex items-center gap-2">
                        <i class="fas fa-phone-alt text-amber-400"></i> <span
                            class="tracking-wide">+91-9920282984</span>
                    </div>
                    <div class="px-6 py-3 border-r border-white/10 flex items-center gap-2">
                        <i class="fas fa-envelope text-amber-400"></i> <span
                            class="tracking-wide">info@viaanafoundation.com</span>
                    </div>
                </div>
                <!-- Right: Social -->
                <div class="flex items-center border-l border-white/10">
                    <a href="#" class="px-5 py-3 border-r border-white/10 hover:text-amber-400 transition-colors"><i
                            class="fab fa-twitter"></i></a>
                    <a href="#" class="px-5 py-3 border-r border-white/10 hover:text-amber-400 transition-colors"><i
                            class="fab fa-facebook-f"></i></a>
                    <a href="#" class="px-5 py-3 border-r border-white/10 hover:text-amber-400 transition-colors"><i
                            class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="px-5 py-3 border-r border-white/10 hover:text-amber-400 transition-colors"><i
                            class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>

        <!-- Main Nav -->
        <div class="bg-black/20 backdrop-blur-sm border-b border-white/5 transition-all duration-300"
            id="main-nav-container">
            <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                <!-- Logo -->
                <a href="/index.html" class="flex items-center gap-3 group">
                    <img src="/img/logo_.png" alt="Viaana"
                        class="h-10 transition-transform duration-500 brightness-0 invert sepia saturate-2000 hue-rotate-[0deg] contrast-100"
                        style="filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(5deg) text-amber-400;">
                    <span class="text-3xl font-bold font-serif text-amber-400 tracking-[0.2em] uppercase">Viaana</span>
                </a>

                <div class="hidden md:flex items-center gap-10">
                    <a href="/index.html"
                        class="nav-link text-white hover:text-amber-400 text-sm font-medium uppercase tracking-widest transition-colors py-2 border-b-2 border-transparent hover:border-amber-400" data-path="/index.html">Home</a>
                    <a href="/pages/about.html"
                        class="nav-link text-white hover:text-amber-400 text-sm font-medium uppercase tracking-widest transition-colors py-2 border-b-2 border-transparent hover:border-amber-400" data-path="/pages/about.html">About</a>
                    <a href="/pages/get-involved.html"
                        class="nav-link text-white hover:text-amber-400 text-sm font-medium uppercase tracking-widest transition-colors py-2 border-b-2 border-transparent hover:border-amber-400 whitespace-nowrap" data-path="/pages/get-involved.html">Get
                        Involved</a>
                    <a href="/pages/causes.html"
                        class="nav-link text-white hover:text-amber-400 text-sm font-medium uppercase tracking-widest transition-colors py-2 border-b-2 border-transparent hover:border-amber-400" data-path="/pages/causes.html">Causes</a>
                    <a href="/pages/contact.html"
                        class="nav-link text-white hover:text-amber-400 text-sm font-medium uppercase tracking-widest transition-colors py-2 border-b-2 border-transparent hover:border-amber-400" data-path="/pages/contact.html">Contact</a>
                </div>

                <button class="md:hidden text-2xl text-white hover:text-amber-400 transition-colors"
                    id="mobile-menu-btn">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="hidden bg-slate-900 border-t border-slate-700 absolute w-full left-0 z-40" id="mobile-menu">
            <div class="flex flex-col p-6 gap-4">
                <a href="/index.html"
                    class="block text-lg hover:text-amber-400 border-b border-slate-800 pb-2">Home</a>
                <a href="/pages/about.html"
                    class="block text-lg hover:text-amber-400 border-b border-slate-800 pb-2">About</a>
                <a href="/pages/get-involved.html"
                    class="block text-lg hover:text-amber-400 border-b border-slate-800 pb-2">Get
                    Involved</a>
                <a href="/pages/causes.html"
                    class="block text-lg hover:text-amber-400 border-b border-slate-800 pb-2">Causes</a>
                <a href="/pages/contact.html" class="block text-lg hover:text-amber-400 font-bold">Contact</a>
            </div>
        </div>
    </header>
    `;

    // Highlight active link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      // Check if current path includes the link path (simple check) or exact match
      const path = link.getAttribute("data-path");
      if (
        currentPath === path ||
        (currentPath === "/" && path === "/index.html") ||
        currentPath.endsWith(path)
      ) {
        link.classList.remove("text-white", "border-transparent");
        link.classList.add("text-amber-400", "border-amber-400");
      }
    });
  }

  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = `
    <footer class="bg-black pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
        <!-- Background Decoration -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div class="absolute -top-20 -right-20 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <!-- Newsletter Section -->
            <div
                class="bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-slate-800 mb-16 relative overflow-hidden">
                <div
                    class="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl translate-x-10 -translate-y-10">
                </div>
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 class="text-3xl font-bold mb-2">Join our Community</h3>
                        <p class="text-slate-400">Stay updated with our latest causes and news.</p>
                    </div>
                    <form class="flex gap-4 w-full">
                        <input type="email" placeholder="Enter your email"
                            class="flex-1 bg-black/50 border border-slate-700 rounded-lg px-6 py-3 focus:outline-none focus:border-amber-400 text-white placeholder-slate-600 transition-colors">
                        <button type="submit"
                            class="bg-amber-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-amber-500 transition-colors">Subscribe</button>
                    </form>
                </div>
            </div>

            <div class="grid md:grid-cols-12 gap-12 mb-16">
                <!-- Brand Column -->
                <div class="md:col-span-4 space-y-6">
                    <a href="/index.html" class="flex items-center gap-3">
                        <img src="/img/logo_.png" alt="Viaana" class="h-10 brightness-0 invert">
                        <span class="text-3xl font-serif font-bold tracking-widest text-white">VIAANA</span>
                    </a>
                    <p class="text-slate-400 leading-relaxed">
                        Empowering communities through education, healthcare, and sustainable development. Join us in
                        creating a better world for everyone.
                    </p>
                    <div class="flex gap-4">
                        <!-- Social Icons -->
                        <a href="#"
                            class="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                <!-- Links Column 1 -->
                <div class="md:col-span-2 md:col-start-6">
                    <h4 class="text-white font-bold mb-6 text-lg">Foundation</h4>
                    <ul class="space-y-4 text-slate-400">
                        <li><a href="/pages/about.html"
                                class="hover:text-amber-400 transition-colors flex items-center gap-2 group"><span
                                    class="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                About Us</a></li>
                        <li><a href="/pages/causes.html"
                                class="hover:text-amber-400 transition-colors flex items-center gap-2 group"><span
                                    class="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Our Causes</a></li>
                        <li><a href="/pages/get-involved.html"
                                class="hover:text-amber-400 transition-colors flex items-center gap-2 group"><span
                                    class="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Volunteer</a></li>
                    </ul>
                </div>

                <!-- Links Column 2 -->
                <div class="md:col-span-2">
                    <h4 class="text-white font-bold mb-6 text-lg">Support</h4>
                    <ul class="space-y-4 text-slate-400">
                        <li><a href="/pages/contact.html"
                                class="hover:text-amber-400 transition-colors flex items-center gap-2 group"><span
                                    class="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Contact</a></li>
                        <li><a href="/pages/privacy.html"
                                class="hover:text-amber-400 transition-colors flex items-center gap-2 group"><span
                                    class="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Privacy</a></li>
                        <li><a href="/pages/terms.html"
                                class="hover:text-amber-400 transition-colors flex items-center gap-2 group"><span
                                    class="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                Terms</a></li>
                    </ul>
                </div>

                <!-- Contact Column -->
                <div class="md:col-span-3">
                    <h4 class="text-white font-bold mb-6 text-lg">Contact Us</h4>
                    <ul class="space-y-4 text-slate-400">
                        <li class="flex items-start gap-4">
                            <i class="fas fa-map-marker-alt text-amber-400 mt-1.5"></i>
                            <span>Viaana Foundation, <br>Mumbai, Maharashtra, India</span>
                        </li>
                        <li class="flex items-center gap-4">
                            <i class="fas fa-envelope text-amber-400"></i>
                            <span>info@viaanafoundation.com</span>
                        </li>
                        <li class="flex items-center gap-4">
                            <i class="fas fa-phone-alt text-amber-400"></i>
                            <span>+91-9920282984</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                <p>&copy; 2026 Viaana Foundation. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    `;
  }
}
