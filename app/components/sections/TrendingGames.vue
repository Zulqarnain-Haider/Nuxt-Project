<template>
  <section class="mt-16 text-white w-full relative">
    <!-- Header -->
    <div class="flex items-center justify-between px-4 sm:px-6 lg:px-10">
      <h2 class="text-2xl font-semibold font-vazirmatn">Trending Games</h2>
      <div
        class="text-onGoNext text-lg font-vazirmatn flex items-center cursor-pointer hover:text-primary transition"
      >
        View All
        <img src="/games/Right.arrow.svg" alt="" class="ml-2" />
      </div>
    </div>

    <!-- Slider -->
    <div class="relative mt-8 overflow-hidden">
      <div
        ref="slider"
        class="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-4 sm:px-6 lg:px-10"
      >
        <div
          v-for="(g, i) in games"
          :key="i"
          class="flex-shrink-0 w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[240px]"
        >
          <GameCard class="border border-onOutline"
            :title="g.title"
            :image="g.image"
            :discount="g.discount"
            :price="g.price"
            :oldPrice="g.oldPrice"
            :rating="g.rating"
          />
        </div>
      </div>

      <!-- Left Arrow -->
      <button
        @click="scrollLeft"
        class="absolute left-1 top-1/2 z-20"
      >
        <img src="/games/SliderarrowAs.png" alt="Prev" class="" />
      </button>

      <!-- Right Arrow -->
      <button
        @click="scrollRight"
        class="absolute right-1 top-1/2 z-20"
      >
        <img src="/games/SlidersRightarrow.svg" alt="Next" class="" />
      </button>
    </div>

    <!-- Pagination Dots (Always 6 visible) -->
    <div class="flex justify-center mt-6 gap-2">
      <span
        v-for="i in 6"
        :key="i"
        class="rounded-full transition-all duration-300 items-cente"
        :class="[
          currentDot === i - 1
            ? 'bg-primary w-3 h-3'
            : 'bg-white/30 w-2 h-2'
        ]"
      ></span>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import GameCard from '~/components/cards/GameCard.vue'

const games = [
  { title: 'Fortnite', image: '/games/black-myth-slider.png', discount: 15, price: 51, oldPrice: 60, rating: 81 },
  { title: 'Minecraft', image: '/games/minecraft.jpg', discount: 15, price: 45, oldPrice: 55, rating: 88 },
  { title: 'Counter-Str..', image: '/games/Frame.Slider.jpg', discount: 20, price: 40, oldPrice: 50, rating: 79 },
  { title: 'Spider-Man 2', image: '/games/spiderman2.jpg', discount: 25, price: 35, oldPrice: 48, rating: 90 },
  { title: 'The Witcher 3', image: '/games/witcher3.jpg', discount: 18, price: 49, oldPrice: 60, rating: 93 },
    { title: 'Fortnite', image: '/games/black-myth-slider.png', discount: 15, price: 51, oldPrice: 60, rating: 81 },
  { title: 'Minecraft', image: '/games/minecraft.jpg', discount: 15, price: 45, oldPrice: 55, rating: 88 },
  { title: 'Counter-Str..', image: '/games/Frame.Slider.jpg', discount: 20, price: 40, oldPrice: 50, rating: 79 },
  { title: 'Spider-Man 2', image: '/games/spiderman2.jpg', discount: 25, price: 35, oldPrice: 48, rating: 90 },
  { title: 'The Witcher 3', image: '/games/witcher3.jpg', discount: 18, price: 49, oldPrice: 60, rating: 93 },
]

const slider = ref(null)
const cardWidth = ref(0)
const currentPage = ref(0)

// cards per view calculation
function visibleCards() {
  if (window.innerWidth >= 1280) return 5
  if (window.innerWidth >= 1024) return 4
  if (window.innerWidth >= 768) return 3
  return 2
}

const pages = computed(() => Math.ceil(games.length / visibleCards()))
const currentDot = computed(() => {
  // always map current page into 0–5 range
  if (pages.value <= 6) return currentPage.value
  const step = (pages.value - 1) / 5
  return Math.min(Math.round(currentPage.value / step), 5)
})

function scrollLeft() {
  if (!slider.value) return
  slider.value.scrollBy({ left: -cardWidth.value, behavior: 'smooth' })
  updateCurrentPage(-1)
}

function scrollRight() {
  if (!slider.value) return
  slider.value.scrollBy({ left: cardWidth.value, behavior: 'smooth' })
  updateCurrentPage(1)
}

function updateCurrentPage(direction) {
  currentPage.value = Math.min(Math.max(currentPage.value + direction, 0), pages.value - 1)
}

onMounted(() => {
  if (slider.value) {
    const firstCard = slider.value.querySelector('div')
    cardWidth.value = firstCard.offsetWidth + parseInt(getComputedStyle(firstCard).marginRight)
  }
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
