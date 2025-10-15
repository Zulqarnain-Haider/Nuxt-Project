<template>
  <section class="mt-16 text-white w-full relative">
    <!-- Header -->
    <div class="flex items-center justify-between px-4 sm:px-6 lg:px-7">
      <h2 class="text-2xl font-semibold font-vazirmatn">Trending Games</h2>
      <div
        class="text-onGoNext text-lg font-vazirmatn flex items-center cursor-pointer hover:text-primary transition"
      >
        View All
        <img src="/games/Right.arrow.svg" alt="" class="ml-2" />
      </div>
    </div>

    <!-- Slider Wrapper -->
    <div class="relative mt-8">
      <!-- Scrollable Cards -->
      <div
        ref="slider"
        class="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-6 sm:px-8 lg:px-10"
      >
      <!--  responsive width set for perfect fit -->
        <div
          v-for="(g, i) in games"
          :key="i"
          class="flex-shrink-0 w-[60%] sm:w-[45%] md:w-[29%] lg:w-[23%] xl:w-[19.5%]"    
          >
          <GameCard
            class="border border-onOutline"
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
        class="hidden md:flex absolute -left-3 lg:left-2 xl:-left-5 top-1/2 -translate-y-1/2 z-30 bg-black/40 p-3  hover:bg-primary/70 transition"
      >
        <img src="/games/SliderarrowAs.png" alt="Prev" class="" />
      </button>

      <!-- Right Arrow -->
      <button
        @click="scrollRight"
        class="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 bg-black/40 p-3 hover:bg-primary/70 transition"
      >
        <img src="/games/SlidersRightarrow.svg" alt="Next" class="" />
      </button>
    </div>

    <!-- Pagination Dots -->
    <div class="flex justify-center items-center mt-6 gap-2">
      <span
        v-for="i in 6"
        :key="i"
        class="rounded-full transition-all duration-300"
        :class="[
          currentDot === i - 1
            ? 'bg-primary w-4 h-4'
            : 'bg-onPrimary w-2 h-2'
        ]"
      ></span>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import GameCard from '~/components/cards/GameCard.vue'

const games = [
  { title: 'Fortnite', image: '/games/black-myth-slider.png', discount: 15, price: 51, oldPrice: 60, rating: 3 },
  { title: 'Minecraft', image: '/games/minecraft.jpg', discount: 15, price: 45, oldPrice: 55, rating: 4 },
  { title: 'Counter-Str..', image: '/games/Frame.Slider.jpg', discount: 20, price: 40, oldPrice: 50, rating: 5 },
  { title: 'Spider-Man 2', image: '/games/spiderman2.jpg', discount: 25, price: 35, oldPrice: 48, rating: 1 },
  { title: 'The Witcher 3', image: '/games/witcher3.jpg', discount: 18, price: 49, oldPrice: 60, rating: 4 },
  { title: 'Fortnite', image: '/games/black-myth-slider.png', discount: 15, price: 51, oldPrice: 60, rating: 2 },
  { title: 'Minecraft', image: '/games/minecraft.jpg', discount: 15, price: 45, oldPrice: 55, rating: 3 },
  { title: 'Counter-Str..', image: '/games/Frame.Slider.jpg', discount: 20, price: 40, oldPrice: 50, rating: 5 },
  { title: 'Spider-Man 2', image: '/games/spiderman2.jpg', discount: 25, price: 35, oldPrice: 48, rating: 4 },
  { title: 'The Witcher 3', image: '/games/witcher3.jpg', discount: 18, price: 49, oldPrice: 60, rating: 3 },
  { title: 'Fortnite', image: '/games/black-myth-slider.png', discount: 15, price: 51, oldPrice: 60, rating: 3 },
  { title: 'Minecraft', image: '/games/minecraft.jpg', discount: 15, price: 45, oldPrice: 55, rating: 4 },
  { title: 'Counter-Str..', image: '/games/Frame.Slider.jpg', discount: 20, price: 40, oldPrice: 50, rating: 5 },
  { title: 'Spider-Man 2', image: '/games/spiderman2.jpg', discount: 25, price: 35, oldPrice: 48, rating: 1 },
  { title: 'The Witcher 3', image: '/games/witcher3.jpg', discount: 18, price: 49, oldPrice: 60, rating: 4 },
  { title: 'Fortnite', image: '/games/black-myth-slider.png', discount: 15, price: 51, oldPrice: 60, rating: 2 },
  { title: 'Minecraft', image: '/games/minecraft.jpg', discount: 15, price: 45, oldPrice: 55, rating: 3 },
  { title: 'Counter-Str..', image: '/games/Frame.Slider.jpg', discount: 20, price: 40, oldPrice: 50, rating: 5 },
  { title: 'Spider-Man 2', image: '/games/spiderman2.jpg', discount: 25, price: 35, oldPrice: 48, rating: 4 },
  { title: 'The Witcher 3', image: '/games/witcher3.jpg', discount: 18, price: 49, oldPrice: 60, rating: 3 },
  { title: 'Fortnite', image: '/games/black-myth-slider.png', discount: 15, price: 51, oldPrice: 60, rating: 3 },
  { title: 'Minecraft', image: '/games/minecraft.jpg', discount: 15, price: 45, oldPrice: 55, rating: 4 },
  { title: 'Counter-Str..', image: '/games/Frame.Slider.jpg', discount: 20, price: 40, oldPrice: 50, rating: 5 },
  { title: 'Spider-Man 2', image: '/games/spiderman2.jpg', discount: 25, price: 35, oldPrice: 48, rating: 1 },
  { title: 'The Witcher 3', image: '/games/witcher3.jpg', discount: 18, price: 49, oldPrice: 60, rating: 4 },
  { title: 'Fortnite', image: '/games/black-myth-slider.png', discount: 15, price: 51, oldPrice: 60, rating: 2 },
  { title: 'Minecraft', image: '/games/minecraft.jpg', discount: 15, price: 45, oldPrice: 55, rating: 3 },
  { title: 'Counter-Str..', image: '/games/Frame.Slider.jpg', discount: 20, price: 40, oldPrice: 50, rating: 5 },
  { title: 'Spider-Man 2', image: '/games/spiderman2.jpg', discount: 25, price: 35, oldPrice: 48, rating: 4 },
  { title: 'The Witcher 3', image: '/games/witcher3.jpg', discount: 18, price: 49, oldPrice: 60, rating: 3 },
]

const slider = ref(null)
const cardWidth = ref(0)
const currentPage = ref(0)

function visibleCards() {
  if (window.innerWidth >= 1280) return 5
  if (window.innerWidth >= 1024) return 4
  if (window.innerWidth >= 820) return 3
  return 2
}

const pages = computed(() => Math.ceil(games.length / visibleCards()))
const currentDot = computed(() => {
  if (pages.value <= 6) return currentPage.value
  const step = (pages.value - 1) / 5
  return Math.min(Math.round(currentPage.value / step), 5)
})

function scrollLeft() {
  if (!slider.value) return
  slider.value.scrollBy({ left: -cardWidth.value * visibleCards(), behavior: 'smooth' })
  updateCurrentPage(-1)
}

function scrollRight() {
  if (!slider.value) return
  slider.value.scrollBy({ left: cardWidth.value * visibleCards(), behavior: 'smooth' })
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
