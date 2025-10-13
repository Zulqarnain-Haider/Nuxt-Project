<template>
  <section class="relative w-full text-white overflow-hidden">
    <!-- 🔹 Background -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url('/games/Tournaments.New.bg.png');"
    >
      <div class="absolute inset-0 bg-black/85"></div>
    </div>

    <!-- 🔹 Tournament Content -->
    <div class="relative z-10 flex flex-col items-center py-16 px-4">
      <h2
        class="text-2xl md:text-4xl font-extrabold mb-10 mt-2 text-center font-poppins uppercase tracking-wide"
      >
        <span class="text-primary">Join </span> the Big Tournament
      </h2>

      <!-- 🔸 Swiper Carousel -->
      <div class="relative w-full max-w-7xl mx-auto">
        <Swiper
          :modules="[Autoplay, Navigation]"
          :slides-per-view="2.2"
          :space-between="18"
          :loop="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          :navigation="{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom'
          }"
          :breakpoints="{
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 28 },
            1280: { slidesPerView: 6, spaceBetween: 30 }
          }"
          class="tournament-swiper"
        >
          <SwiperSlide v-for="(game, i) in games" :key="i">
            <div class="flex justify-center">
              <GameFilter
                :title="game.title"
                :image="game.image"
                :buttonText="game.button"
                class="w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- 🔸 Custom Navigation -->
        <div
          class="hidden sm:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-6 pointer-events-none z-30"
        >
          <button
            class="swiper-button-prev-custom pointer-events-auto bg-black/60 hover:bg-black/90 rounded-full p-3 transition z-30 -ml-10"
          >
            <img src="/games/SliderLeftarrow.svg" alt="Prev" class="w-7 h-7" />
          </button>

          <button
            class="swiper-button-next-custom pointer-events-auto bg-black/60 hover:bg-black/90 rounded-full p-3 transition z-30 -mr-10"
          >
            <img src="/games/SlidersRightarrow.svg" alt="Next" class="w-7 h-7" />
          </button>
        </div>
      </div>

      <!-- 🔹 Ready For Battle Section -->
      <div
        class="relative w-full mt-24 md:mt-28 flex justify-center items-center text-center py-16 md:py-24 lg:py-28 overflow-hidden"
      >
        <!-- Vector Background -->
        <img
          src="/games/Tournaments.Vector.svg"
          alt="vector"
          class="absolute inset-0 w-full h-full object-contain z-0"
        />

        <!-- Left & Right Posters -->
        <img
          src="/games/TournamentPosterLeft.png"
          alt="left poster"
          class="absolute left-0 bottom-0 h-[80%] w-auto object-contain z-10"
        />
        <img
          src="/games/TournamentPosterRight.png"
          alt="right poster"
          class="absolute right-0 bottom-0 h-[80%] w-auto object-contain z-10"
        />

        <!-- Center Content -->
        <div class="relative z-20 max-w-2xl mx-auto px-4 md:px-6">
          <h3
            class="text-2xl sm:text-3xl md:text-4xl font-extrabold font-poppins mb-5 text-white"
          >
            Ready for <span class="text-primary">Battle</span>?
          </h3>

          <p
            class="text-sm sm:text-base md:text-lg text-gray-300 font-poppins mb-6 leading-relaxed max-w-xl mx-auto"
          >
            Dive into thrilling esports tournaments, global gaming events,
            and epic community challenges. Victory awaits.
          </p>

          <button
            class="bg-gradient-to-r from-[#FF6A16] to-[#ff8c38] hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay, Navigation } from "swiper/modules"
import GameFilter from "~/components/cards/GameFilter.vue"

const games = [
  { title: "League of Legends", image: "/games/TournamentCard.1.png", button: "Buy Now" },
  { title: "Apex Legends", image: "/games/TournamentCard.2.png", button: "Buy Now" },
  { title: "Counter Strike", image: "/games/TournamentCard.3.png", button: "Buy Now" },
  { title: "World of Warcraft", image: "/games/TournamentCard.4.png", button: "Buy Now" },
  { title: "Dota 2", image: "/games/TournamentCard.5.png", button: "Buy Now" },
  { title: "Fortnite", image: "/games/TournamentCard.6.png", button: "Buy Now" },
]
</script>

<style scoped>
/* 🌑 Bottom gradient overlay */
section::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(to top, #000, transparent);
}

/* 🎯 Custom arrow hover effect */
.swiper-button-prev-custom:hover,
.swiper-button-next-custom:hover {
  transform: scale(1.1);
  transition: 0.3s ease;
}

/* 📱 Hide arrows on mobile, keep touch scroll */
@media (max-width: 640px) {
  .swiper-button-prev-custom,
  .swiper-button-next-custom {
    display: none !important;
  }
}

/* 🧠 Responsive text tweaks for iPads */
@media (min-width: 768px) and (max-width: 1024px) {
  h2 {
    font-size: 1.8rem !important;
  }
  h3 {
    font-size: 2rem !important;
  }
  p {
    font-size: 0.95rem !important;
  }
}
</style>
