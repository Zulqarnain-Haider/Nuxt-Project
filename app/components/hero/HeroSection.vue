<template>
  <section
    class="relative overflow-hidden bg-cover bg-center bg-no-repeat text-white"
    style="background-image: url('/games/Hero.bg.png');"
  >
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/50 z-0"></div>

    <!-- Main Container -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col-reverse lg:flex-row items-center gap-10"
    >
      <!-- LEFT SIDE (Text + Buttons) -->
      <div class="w-full lg:w-1/2 text-center lg:text-left">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins leading-tight mb-4">
          Your Next Game Is <br />
          <span class="text-primary">Just One Click Away.</span>
        </h1>

        <p class="text-mainText text-base sm:text-lg font-poppins max-w-xl mx-auto lg:mx-0 mb-6">
          Get instant CDKeys for less — play in seconds.
        </p>

        <div class="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
          <UiButton variant="primary" :width="0" :height="48">
            Browse Deals
          </UiButton>
          <UiButton variant="outline" :width="0" :height="48">
            View Games
          </UiButton>
        </div>
      </div>

      <!-- RIGHT SIDE (Game Thumbnails) -->
      <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div
          class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-3 gap-3 w-full max-w-md"
        >
          <div
            v-for="(g, i) in featured"
            :key="i"
            class="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              :src="g.image"
              :alt="g.title"
              class="w-full h-28 sm:h-32 md:h-36 object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Subtle bottom fade (optional aesthetic) -->
    <div
      class="pointer-events-none absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent"
    ></div>
  </section>
</template>

<script setup>
import UiButton from '~/components/ui/Button.vue'

const featured = [
  { title: 'The Witcher 3', image: '/games/witcher3.jpg' },
  { title: 'Red Dead', image: '/games/redd.jpg' },
  { title: 'Ghost of Tsushima', image: '/games/ghost.jpg' },
]
</script>

<style scoped>
/* Optional: smoother gradient fade for background */
</style>
