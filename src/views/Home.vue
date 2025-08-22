<script setup>
import { onMounted, onUnmounted } from "vue";
import Card from "../components/Card.vue";
import CardPortfolio from "../components/CardPortfolio.vue";

onMounted(() => {
    const navbar = document.getElementById("navbar");
    const onScroll = () => {
        if (window.scrollY > window.innerHeight * 0) {
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

        <header
            class="relative h-screen w-full bg-[url('/public/images/hero.avif')] bg-cover bg-center bg-fixed select-none">
            <div class="absolute inset-0 bg-black/45"></div>

            <nav id="navbar" class="fixed top-0 lg:left-0 right-0 w-full z-50 transition-all duration-500">
                <div class="max-w-7xl mx-auto px-6 py-4 flex justify-center">
                    <ul class="flex gap-8 md:gap-12 font-serif text-white">
                        <li class="menu-item text-right">
                            <a href="#about">
                                <span class="block font-mini_titre text-lg">À propos</span>
                                <em class="block italic font-cormorant text-lg text-center">bio</em>
                            </a>
                        </li>
                        <li class="menu-item text-right">
                            <a href="#portfolio">
                                <span class="block font-mini_titre text-lg">Portfolio</span>
                                <em class="block italic font-cormorant text-lg text-center">mon travail</em>
                            </a>
                        </li>
                        <li class="menu-item text-right">
                            <a href="#shop">
                                <span class="block font-mini_titre text-lg">Formules</span>
                                <em class="block italic font-cormorant text-lg text-center">séances</em>
                            </a>
                        </li>
                        <li class="menu-item text-right">
                            <a href="#contact">
                                <span class="block font-mini_titre text-lg">Contact</span>
                                <em class="block italic font-cormorant text-lg text-center">me joindre</em>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="relative z-10 h-full grid place-items-center">
                <div class="text-center text-white">
                    <h1 class="font-titre tracking-[32px] text-6xl md:text-[128px] leading-none drop-shadow">
                        Crumble
                    </h1>
                    <p class="mt-4 font-cormorant italic text-lg md:text-[34px] tracking-wideish opacity-90">
                        photographe
                    </p>
                </div>
            </div>
        </header>

        <section id="about" class="bg-site-bg py-10">
            <div class="w-4xl mx-auto px-6 text-center flex flex-col gap-8">
                <div>
                    <h2 class="font-mini_titre text-5xl text-ink-base">À propos</h2>
                    <p class="font-serif italic text-ink-base">Derrière l'objectif.</p>
                </div>
                <Card size="w-2/3">
                    <div class="w-1/2 flex flex-col gap-6 self-center text-lg">
                        <p>
                            Je pratique la photographie de portrait depuis maintenant 10 ans. Vous trouverez sur ce site
                            un bref exposé du travail effectué durant toutes ces années.
                        </p>
                        <p>
                            En 2020, je me suis prise de passion pour Valorant, le jeu qui m'a ouvert les portes de
                            l'Esport. Éprise de ce nouvel univers, j'ai décidé d'allier mes deux passions, de mettre mes
                            compétences au service de la scène et d'y planter ma graine.
                        </p>
                    </div>
                    <div>
                        <img src="/images/favicon.jpg" alt="About Image" class="w-full h-auto rounded-full shadow-lg" />
                    </div>
                </Card>
            </div>
        </section>

        <div class="border-t-2 border-ink-mute my-12 w-1/3 mx-auto"></div>

        <section id="shop" class="bg-site-bg">
            <div class="w-4xl mx-auto px-6 text-center flex flex-col gap-8">
                <div>
                    <h2 class="font-mini_titre text-5xl text-ink-base">Portfolio</h2>
                    <p class="font-serif italic text-ink-base">Découvrez mes réalisations.</p>
                </div>
                <Card size="w-1/2">
                    <div class="flex flex-row gap-16 mx-auto">
                        <CardPortfolio
                            name="PORTRAIT"
                            imgSrc="/images/portrait.avif" />
                        <CardPortfolio
                            name="ESPORT"
                            imgSrc="/images/esport.avif" />
                    </div>
                </Card>
            </div>
        </section>
    </div>
</template>
