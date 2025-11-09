<template>
  <section class="mt-16 text-white w-full relative">
    <!-- Header -->
    <div class="flex items-center justify-between px-4 sm:px-6 lg:px-7">
      <h2 class="text-2xl font-semibold font-vazirmatn">Up Coming Games</h2>
      <div
        class="text-primary text-lg font-vazirmatn flex items-center cursor-pointer hover:text-primary transition"
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
        class="flex gap-4 py-2 overflow-x-auto scroll-smooth scrollbar-hide px-6 sm:px-8 lg:px-10"
      >
      <!--  responsive width set for perfect fit -->
        <div
          v-for="(g, i) in games"
          :key="i"
          class="flex-shrink-0 w-[60%] sm:w-[45%] md:w-[29%] lg:w-[23%] xl:w-[19.5%]"    
          >
          <GameDetails
            class="border border-outline"
            :title="g.title"
            :image="g.image"
            :price="g.price"
            :oldPrice="g.oldPrice"
            :buttonText="g.buttonText"
            :releaseDate="g.releaseDate"
          />
        </div>
      </div>

      <!-- ✅ Left Arrow -->
      <button
        @click="scrollLeft"
        class="hidden md:flex absolute -left-3 lg:left-2 xl:-left-5 top-1/2 -translate-y-1/2 z-[60] bg-black/40 p-3 border border-white hover:bg-primary/70 transition"
      >
        <img src="/games/SliderarrowAs.png" alt="Prev" class="" />
      </button>

      <!-- ✅ Right Arrow -->
      <button
        @click="scrollRight"
        class="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-[60] bg-black/40 p-3 border border-white hover:bg-primary/70 transition"
      >
        <img src="/games/SlidersRightarrow.svg" alt="Next" class="" />
      </button>
    </div>

    <!-- ✅ Pagination Dots -->
    <div class="flex justify-center items-center mt-6 gap-2">
      <span
        v-for="i in 6"
        :key="i"
        class="rounded-full transition-all duration-300"
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import GameDetails from '../cards/GameDetails.vue'

// SSR-safe flag
const isClient = ref(false)

const games = [
  { title: 'FC25', image: '/games/UpcomingGames1.png', price: 51, oldPrice: 60, rating: 81, releaseDate: '27/10/2025', buttonText: 'Pre-Order'  },
  { title: 'Marvel: Wolverine', image: '/games/UpcomingGames2.png', price: 51, oldPrice: 60, rating: 88, releaseDate: 'Early 2025', buttonText: 'Pre-Order'   },
  { title: 'Star Wars Outlaws', image: '/games/UpcomingGames3.png', price: 51, oldPrice: 60, rating: 79,releaseDate: 'Mid 2025', buttonText:  'Pre-Order'  },
  { title: 'GTA VI', image: '/games/UpcomingGames4.png', price: 51, oldPrice: 60, rating: 90, releaseDate: 'Late 2025', buttonText:  'Pre-Order'  },
  { title: 'The Witcher 4', image: '/games/UpcomingGames5.png', price: 51, oldPrice: 60, rating: 93, releaseDate: 'Mid 2026', buttonTitle: 'Pre-Order' },
  { title: 'FC25', image: '/games/UpcomingGames1.png', price: 51, oldPrice: 60, rating: 81, releaseDate: '27/10/2025', buttonText: 'Pre-Order'  },
  { title: 'Marvel: Wolverine', image: '/games/UpcomingGames2.png', price: 51, oldPrice: 60, rating: 88, releaseDate: 'Early 2025', buttonText: 'Pre-Order'   },
  { title: 'Star Wars Outlaws', image: '/games/UpcomingGames3.png', price: 51, oldPrice: 60, rating: 79,releaseDate: 'Mid 2025', buttonText:  'Pre-Order'  },
  { title: 'GTA VI', image: '/games/UpcomingGames4.png', price: 51, oldPrice: 60, rating: 90, releaseDate: 'Late 2025', buttonText:  'Pre-Order'  },
  { title: 'The Witcher 4', image: '/games/UpcomingGames5.png', price: 51, oldPrice: 60, rating: 93, releaseDate: 'Mid 2026', buttonTitle: 'Pre-Order', },

]

const slider = ref(null)
const cardWidth = ref(0)
const currentPage = ref(0)

function visibleCards() {
    if (!isClient.value) return 5 // default (SSR render)
    const w = window.innerWidth
 if (w >= 1280) return 5
  if (w >= 1024) return 4
  if (w >= 820) return 3
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
function handleScroll() {
  if (!slider.value || !cardWidth.value) return

  const scrollLeft = slider.value.scrollLeft
  const totalCards = games.length
  const visible = visibleCards()
  const totalPages = Math.ceil(totalCards / visible)

  // Kitne page scroll ho chuke hain
  const page = Math.round(scrollLeft / (cardWidth.value * visible))

  currentPage.value = Math.min(page, totalPages - 1)
}


function updateCurrentPage(direction) {
  currentPage.value = Math.min(Math.max(currentPage.value + direction, 0), pages.value - 1)
}

onMounted(() => {
    isClient.value = true

  if (slider.value) {
    const firstCard = slider.value.querySelector('div')
    cardWidth.value = firstCard.offsetWidth + parseInt(getComputedStyle(firstCard).marginRight)
     slider.value.addEventListener('scroll', handleScroll)
  }
   // Update on resize
  window.addEventListener('resize', handleScroll)
})

onUnmounted(() => {
  if (slider.value) slider.value.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleScroll)

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
