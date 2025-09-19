<script setup>
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";
import { ref, computed } from "vue";

const route = useRoute();
const type = route.params.type;

let images = ref();

if (type !== "portrait" && type !== "esport") {
  window.location.href = "/";
} else {
  document.title =
    type === "portrait" ? "Portfolio - Portraits" : "Portfolio - Esport";
  if (type == "esport") {
    // Fetch images from Google Drive API
    images.value = [];
    fetch(
      "https://www.googleapis.com/drive/v3/files?q='1p3SwzwHWvI-Hjm0V7_zItdSbUP8lAIs_'+in+parents&key=AIzaSyAqb75mKfGgMeC7PDzxnl9v9fo06duJLuE&fields=files(id,name,mimeType,webContentLink)"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.files) {
          images.value = data.files
            .filter((f) => f.mimeType.startsWith("image/"))
            .map((f) => `https://drive.google.com/uc?export=view&id=${f.id}`);
        }
      });
  } else if (type == "portrait") {
    images = Object.keys(
      import.meta.glob("../../public/images/portrait/*", { as: "url" })
    ).map((path) =>
      path.replace(/^.*\/images\/portrait\//, "images/portrait/")
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const d = e.target.dataset.delay || 0;
          if (d) e.target.style.transitionDelay = d + "ms";
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach((el) => io.observe(el));

  // Stagger auto par conteneur
  document.querySelectorAll("[data-stagger]").forEach((g) => {
    const step = parseInt(g.dataset.stagger, 10) || 90;
    g.querySelectorAll(".reveal").forEach(
      (el, i) => (el.dataset.delay = i * step)
    );
  });
});
</script>

<template>
  <Header />

  <main class="flex flex-col mt-4 gap-8 xl:mx-46 lg:mx-24 mx-3">
    <div>
      <h1
        class="font-mini_titre text-2xl md:text-4xl text-ink-base text-center"
      >
        Portfolio
      </h1>
      <p class="font-serif italic text-center text-ink-base">
        {{ type == "portrait" ? "Portraits" : "Esport" }}.
      </p>
    </div>
    <div class="bg-white w-full py-8 px-4 md:px-8 reveal reveal--fade-up">
      <div class="columns-1 sm:columns-2 md:columns-4 gap-2 space-y-2">
        <img
          v-for="img in images"
          :key="img"
          :src="type === 'esport' ? img : `/${img}`"
          draggable="false"
          class="reveal reveal--fade-up w-full h-auto object-cover transition-transform duration-300 hover:scale-[102%] cursor-pointer"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
img {
}

img:hover {
  cursor: url("/images/pointer.png") 12 12, auto;
}
</style>
