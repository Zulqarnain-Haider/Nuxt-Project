<template>
  <section
    class="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat text-white"
    style="background-image: url('/games/Hero.bg.png');"
  >
    <!-- Dark overlay -->
    <!-- <div class="absolute inset-0 bg-black/40 z-0"></div> -->

    <!-- Content -->
    <div
      class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 px-3 pb-6 md:pt-6 md:pb-20 md lg:pl-12"
    >
      <!-- LEFT SECTION -->
      <div
        class="w-full lg:w-1/2 md:text-center lg:text-left order-2 lg:order-1 px-2 md:px-3 lg:px-"
      >
        <h1
          class="text-3xl sm:text-4xl lg:text-4xl font-bold font-poppins leading-tight mb-4 whitespace-nowrap text-primary"
        >
          Your Next Game Is <br />
          <span class="text-mainText" >Just One Click Away.</span>
        </h1>

        <p
          class="text-mainText font-poppins text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-6"
        >
          Get instant CDKeys for less — play in seconds.
        </p>

        <div class="flex flex-wrap justify-center lg:justify-start gap-3">
          <UiButton
            variant="primary"
            :width="0"
            :height="48"
            extraClass="px-6 md:px-7 py-3 text-base font-poppins
            rounded-3xl shadow-lg shadow-primary/40 hover:shadow-primary/60 rounded-2xl sm:rounded-2xl transition-all duration-300"
          >
            Browse Deals
          </UiButton>
          <UiButton
            variant="outline"
            :width="0"
            :height="48"
            extraClass="px-6 md:px-7 py-3 text-base font-poppins border-[2.5px] sm:border-[3px] rounded-2xl sm:rounded-2xl"
          >
            View Games
          </UiButton>
        </div>
      </div>

      <!-- RIGHT SECTION -->
      <div
        class="w-full lg:w-1/2 flex flex-col items-center lg:items-end order-1 lg:order-2 ipad:order-1"
      >
        <!-- Heading -->
        <h2
          class="hidden sm:block sm:text-2xl lg:text-xl whitespace-nowrap font-poppins font-semibold mb-3 text-left w-full lg:pr-10"
        >
          The Most <span class="text-primary">Popular</span> Games
        </h2>

        <!-- Grid -->
        <div
          class="hidden sm:grid grid-cols-4 gap-3 w-full max-w-2xl lg:pr-10 relative"
        >

       <!--       Customer Review Overlap Text -->
       <div
         class="absolute top-[38%] left-1/4 -translate-x-1/2 z-30 text-white 
    font-semibold text-base sm:text-2xl font-poppins whitespace-nowrap"
       >
          Customer Review 
       </div>

          <!-- Large Thumbnail -->
          <div
            class="relative h-[240px] lg:h-[245px] rounded-lg overflow-hidden border border-outline col-span-1 self-start" 
          >
            <img
              src="/games/Witcher.First.Thumbnail1.jpg"
              class="w-full h-full object-cover"
              alt="The Witch 3"
            />

            <div
              class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left"
            >
              <p class="text-sm font-semibol font-poppins whitespace-nowrap">The Witcher 3</p>
            </div>
          </div>

          <!-- Smaller Thumbnails -->
          <div
            v-for="(g, i) in thumbnails"
            :key="i"
            class="relative h-[200px] lg:h-[220px] rounded-lg overflow-hidden self-end"
          >
            <img
              :src="g.image"
              :alt="g.title"
              class="w-full h-full object-cover"
            />

      <!-- Title Gradient -->
            <div
              v-if="i < 2"
              class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2"
            >
              <p class="text-xs sm:text-sm font-semibold">{{ g.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import UiButton from '~/components/ui/Button.vue'

const thumbnails = [
  { title: '', image: '/games/Hero.Thumbnail.2.png' },
  { title: '', image: '/games/Hero.Thumbnail.3.png' },
  { title: '', image: '/games/Hero.Thumbnail.4.png' },
]
</script>

<style scoped>
/* 📱 Mobile: hide right section completely */
@media (max-width: 640px) {
  .sm\:block,
  .sm\:grid {
    display: none !important;
  }
}

/* 📲 iPad Mini: right section top, left bottom */
@media (min-width: 641px) and (max-width: 820px) {
  .ipad\:order-1 {
    order: 1 !important;
  }
  .order-2 {
    order: 2 !important;
  }
  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
}

/* 💻 iPad Pro: adjust text & spacing */
@media (min-width: 1024px) and (max-width: 1180px) {
  h1 {
    font-size: 2.3rem !important;
  }
  h2 {
    font-size: 1rem !important;
  }
  p {
    font-size: 11px;
  }
  .gap-10 {
    gap: 1.5rem !important;
    padding-left: 50px;
  }
}
</style>
