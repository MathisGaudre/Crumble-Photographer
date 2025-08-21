<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    if (window.scrollY > window.innerHeight * 0.1) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  };
  window.addEventListener("scroll", onScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
});
</script>

<template>
    <div class="bg-site-bg text-ink-base antialiased">

        <header class="relative h-screen w-full bg-[url('./src/assets/images/hero.avif')] bg-cover bg-center bg-fixed select-none">
            <div class="absolute inset-0 bg-black/45"></div>

            <nav id="navbar" class="fixed top-0 lg:left-0 right-0 w-full z-50 transition-all duration-500">
                <div class="max-w-7xl mx-auto px-6 py-4 flex justify-center">
                    <ul class="flex gap-8 md:gap-12 font-serif text-white">
                        <li class="menu-item text-right">
                            <a href="#about">
                                <span class="block text-lg">About</span>
                                <em class="block italic font-display text-center">story</em>
                            </a>
                        </li>
                        <li class="menu-item text-right">
                            <a href="#portfolio">
                                <span class="block text-lg">Portfolio</span>
                                <em class="block italic font-display text-center">gallery</em>
                            </a>
                        </li>
                        <li class="menu-item text-right">
                            <a href="#shop">
                                <span class="block text-lg">Shop</span>
                                <em class="block italic font-display text-center">offers</em>
                            </a>
                        </li>
                        <li class="menu-item text-right">
                            <a href="#contact">
                                <span class="block text-lg">Contact</span>
                                <em class="block italic font-display text-center">connect</em>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="relative z-10 h-full grid place-items-center">
                <div class="text-center text-white">
                    <h1 class="font-serif italic text-6xl md:text-[128px] leading-none drop-shadow">
                        Crumble
                    </h1>
                    <p class="mt-4 font-display italic text-lg md:text-[34px] tracking-wideish opacity-90">
                        photographer
                    </p>
                </div>
            </div>
        </header>

        <section id="about" class="bg-site-bg py-10">
            <div class="max-w-4xl mx-auto px-6 text-center">
                <h2 class="font-serif text-4xl text-ink-base">About</h2>
                <p class="font-serif italic text-ink-base">Behind the lens</p>
                <p class="mt-6 font-sans text-lg text-ink-base leading-relaxed">
                    I create evocative, timeless imagery with a thoughtful, editorial approach.
                </p>
            </div>
        </section>

        <section id="shop" class="bg-site-bg py-16">
            <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                <article class="bg-site-card rounded-2xl shadow-soft p-6">
                    <h3 class="font-serif text-2xl">Discovery Package</h3>
                    <p class="mt-2 text-ink-mute">45–60 min · 5 retouched photos</p>
                    <p class="mt-4 font-medium">€120</p>
                </article>
                <article class="bg-site-card rounded-2xl shadow-soft p-6">
                    <h3 class="font-serif text-2xl">Classic Package</h3>
                    <p class="mt-2 text-ink-mute">~1h30 · 12 retouched photos</p>
                    <p class="mt-4 font-medium">€210</p>
                </article>
                <article class="bg-site-card rounded-2xl shadow-soft p-6">
                    <h3 class="font-serif text-2xl">Complete Package</h3>
                    <p class="mt-2 text-ink-mute">2–2h30 · 20 retouched photos</p>
                    <p class="mt-4 font-medium">€300</p>
                </article>
            </div>
        </section>
    </div>
</template>
