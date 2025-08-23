<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
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

const selectedDemande = ref("");
const objetLabel = computed(() => {
  if (selectedDemande.value === "formules") return "Formule";
  if (selectedDemande.value === "devis") return "Objet du devis";
  if (selectedDemande.value === "autres") return "Objet";
  return "Formule / Objet du devis / Objet";
});

</script>

<template>
    <div class="bg-site-bg text-ink-base antialiased">

        <header
            class="relative h-screen w-full bg-[url('/images/hero_4k.jpg')] bg-cover bg-center bg-fixed select-none">
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
                <Card size="w-4/6">
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
                    <div class="w-1/2">
                        <img src="/images/favicon.jpg" alt="About Image"
                            class="w-auto h-full rounded-full shadow-lg mx-auto" />
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
                        <CardPortfolio name="PORTRAIT" imgSrc="/images/portrait.avif" />
                        <CardPortfolio name="ESPORT" imgSrc="/images/esport.avif" />
                    </div>
                </Card>
            </div>
        </section>

        <div class="border-t-2 border-ink-mute my-12 w-1/3 mx-auto"></div>

        <section id="shop" class="bg-site-bg">
            <div class="w-4xl mx-auto px-6 text-center flex flex-col gap-8">
                <div>
                    <h2 class="font-mini_titre text-5xl text-ink-base">Formules</h2>
                    <p class="font-serif italic text-ink-base">À votre image.</p>
                </div>
                <div class="flex flex-row justify-between mx-auto w-2/3 gap-16">
                    <Card size="w-1/3 flex flex-col text-ink-base gap-6">
                        <h3 class="font-mini_titre text-3xl">Formule découverte</h3>
                        <h4 class="text-2xl">€120</h4>
                        <div class="flex flex-col gap-4 font-helvetica">
                            <p><b>45 minutes</b> à <b>1h</b> de shooting en extérieur ou à domicile</p>
                            <p>Choix de <b>5 photos</b> via une galerie privée</p>
                            <p>Rendu des photos retouchées sous format numérique <b>1 semaine</b> à <b>2 semaines</b>
                                après le shooting.</p>
                            <div class="border-t-2 border-ink-mute my-6 w-1/2 mx-auto"></div>
                            <p class="text-sm">Parfaite pour les premières expériences ou les petits budgets</p>
                        </div>
                    </Card>
                    <Card size="w-1/3 flex flex-col text-ink-base gap-6">
                        <h3 class="font-mini_titre text-3xl">Formule classique</h3>
                        <h4 class="text-2xl">€210</h4>
                        <div class="flex flex-col gap-4 font-helvetica">
                            <p><b>1h30</b> de shooting en extérieur ou à domicile</p>
                            <p>Choix de <b>12 photos</b> via une galerie privée</p>
                            <p>Rendu des photos retouchées sous format numérique <b>1 semaine</b> à <b>2 semaines</b>
                                après le shooting.</p>
                            <div class="border-t-2 border-ink-mute my-6 w-1/2 mx-auto"></div>
                            <p class="text-sm">Idéale pour les couples, les amis, les diplômes, ...</p>
                        </div>
                    </Card>
                    <Card size="w-1/3 flex flex-col text-ink-base gap-6">
                        <h3 class="font-mini_titre text-3xl">Formule découverte</h3>
                        <h4 class="text-2xl">€300</h4>
                        <div class="flex flex-col gap-4 font-helvetica">
                            <p><b>2h</b> à <b>2h30</b> de shooting en extérieur et/ou à domicile, <b>2 lieux de
                                    shooting</b></p>
                            <p>Choix de <b>20 photos</b> via une galerie privée</p>
                            <p>Rendu des photos retouchées sous format numérique <b>2 semaines</b> après le shooting.
                            </p>
                            <div class="border-t-2 border-ink-mute my-6 w-1/2 mx-auto"></div>
                            <p class="text-sm">Conçu pour les moments les plus mémorables de la vie : fiançailles,
                                nouveau-nés, séances en famille.</p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>

        <div class="border-t-2 border-ink-mute my-12 w-1/3 mx-auto"></div>

        <section id="contact" class="bg-site-bg">
            <div class="w-4xl mx-auto px-6 text-center flex flex-col gap-8">
                <div>
                    <h2 class="font-mini_titre text-5xl text-ink-base">Contact</h2>
                    <p class="font-serif italic text-ink-base">À votre image.</p>
                </div>
                <form class="bg-[#EAE6F6] rounded-lg p-8 shadow-lg flex flex-col gap-6 w-2/3 mx-auto" @submit.prevent>
                    <div class="flex flex-row">
                        <div class="flex flex-col gap-6 w-1/2">
                            <div class="flex flex-row gap-6">
                                <div class="flex-1 flex flex-col gap-2">
                                    <label for="prenom" class="text-left font-medium text-ink-base">Prénom *</label>
                                    <input id="prenom" name="prenom" type="text" required
                                        class="rounded-md border border-[#CDBFE0] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CDBFE0] bg-white" />
                                </div>
                                <div class="flex-1 flex flex-col gap-2">
                                    <label for="nom" class="text-left font-medium text-ink-base">Nom *</label>
                                    <input id="nom" name="nom" type="text" required
                                        class="rounded-md border border-[#CDBFE0] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CDBFE0] bg-white" />
                                </div>
                            </div>

                            <div class="flex flex-col gap-2">
                                <label for="email" class="text-left font-medium text-ink-base">Email *</label>
                                <input id="email" name="email" type="email" required
                                    class="rounded-md border border-[#CDBFE0] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CDBFE0] bg-white" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <label for="demande" class="text-left font-medium text-ink-base">Demande *</label>
                                <select
                                    id="demande"
                                    name="demande"
                                    required
                                    v-model="selectedDemande"
                                    @change="handleDemandeChange"
                                    class="rounded-md border border-[#CDBFE0] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CDBFE0] bg-white"
                                >
                                    <option value="" disabled selected>Choisissez une option</option>
                                    <option value="formules">Formules</option>
                                    <option value="devis">Devis</option>
                                    <option value="autres">Autres...</option>
                                </select>
                            </div>
                            <div class="flex flex-col gap-2">
                                <label for="objet" class="text-left font-medium text-ink-base">
                                    {{ objetLabel }}
                                </label>
                                <input id="objet" name="objet" type="text" required
                                    class="rounded-md border border-[#CDBFE0] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CDBFE0] bg-white" />
                            </div>
                        </div>


                        <div class="flex-1 flex flex-col gap-2 md:ml-6 w-1/2">
                            <label for="envies" class="text-left font-medium text-ink-base">Vos envies et besoins pour
                                ce
                                shooting *</label>
                            <textarea id="envies" name="envies" required rows="6"
                                class="rounded-md border border-[#CDBFE0] h-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#CDBFE0] bg-white resize-none"></textarea>
                        </div>
                    </div>
                    <p class="text-left text-sm text-ink-mute mt-2">
                        * Attention, une séance photo n’est définitivement réservée qu’après retour et confirmation de
                        ma part.
                    </p>
                    <div class="flex justify-center mt-4">
                        <button type="submit"
                            class="bg-[#CDBFE0] hover:shadow-lg border border-[#8C6FB4] text-ink-base font-mini_titre py-2 px-16 rounded-md shadow transition-colors duration-200">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>
