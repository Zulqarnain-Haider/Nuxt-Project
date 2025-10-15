<template>
  <section class="w-full">
    <!-- Header -->
    <div class="flex items-center justify-between px-5 sm:px-7 lg:px-8 mb-6">
      <h2 class="text-2xl font-semibold text-white font-vazirmatn">Blog Posts</h2>
      <div
        class="text-primary text-lg font-vazirmatn flex items-center cursor-pointer hover:text-primary transition"
      >
        View All
        <img src="/games/Right.arrow.svg" alt="" class="ml-2 w-5 h-5" />
      </div>
    </div>

    <!-- BLOG GRID -->
    <div class="px-4 sm:px-6">
      <!-- ✅ Desktop / Tablet -->
      <div class="hidden md:flex flex-col lg:flex-row gap-5 transition-all duration-700"
        :class="{ 'animate-slide-in': true }"
         >
        <!-- Featured -->
        <div
          v-if="currentSet[4]"
          class="w-full lg:w-1/2 relative rounded-2xl overflow-hidden transition-all duration-700"
        >
          <img
            :src="currentSet[4].image"
            alt="Featured Blog"
            class="w-full h-[400px] object-cover rounded-2xl"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 rounded-2xl"
          >
            <h3 class="text-xl md:text-2xl text-white mb-1">{{ currentSet[4].title }}</h3>
            <p class="text-md md:text-lg text-white">{{ currentSet[4].category }}</p>
          </div>
        </div>

        <!-- 4 Smaller -->
        <div class="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <div
            v-for="(blog, i) in currentSet.slice(0, 4)"
            :key="i"
            class="relative rounded-2xl overflow-hidden group transition-all duration-700"
          >
            <img
              :src="blog.image"
              alt="Blog Thumbnail"
              class="w-full h-[190px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-2 md:p-3"
            >
              <h3 class="text-sm text-white leading-tight mb-1">{{ blog.title }}</h3>
              <p class="text-sm tracking-wide text-white">{{ blog.category }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ✅ Mobile layout -->
      <div
        class="md:hidden flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth
         transition-all duration-500 px-2 py-1"
        ref="mobileScroll"
      >
        <div
          v-for="(blog, i) in [...allBlogs].slice().reverse()"
          :key="i"
          class="flex none min-w-[70%] h-[170px] snap-start relative rounded-2xl overflow-hidden"
        >
          <img
            :src="blog.image"
            alt="Blog Thumbnail"
            class="absoulte inset-0 w-full h-full object-cover rounded-2xl"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-3"
          >
            <h3 class="text-[13px] text-white leading-tight mb-1 font-poppins">{{ blog.title }}</h3>
            <p class="text-[12px] tracking-wide text-white font-poppins">{{ blog.category }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination Dots -->
    <div class="flex justify-center mt-8 gap-2 items-center">
      <span
        v-for="n in 5"
        :key="n"
        class="rounded-full transition-all duration-300 flex items-center justify-center"
        :class="[
          (n - 1) === currentDot
            ? 'bg-primary w-4 h-4 scale-110'
            : 'bg-onPrimary w-2 h-2'
        ]"
      ></span>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const allBlogs = ref([
  { image: '/games/BlogPoster1.png', title: 'FC25 Prepares for October 2024 Release with Enhanced', category: 'Realism' },
  { image: '/games/BlogPoster2.png', title: ' FC25 Prepares for October 2024', category: 'Release with Enhanced Realism' },
  { image: '/games/BlogPoster3.png', title: 'Marvel’s Wolverine Set for an Epic', category: '2025 Launch on PS5' },
  { image: '/games/BlogPoster4.png', title: 'The Witcher 4 Expected to Bring Back', category: 'Fan-Favorite Characters' },
  { image: '/games/BlogPoster5.png', title: 'Star Wars Outlaws Combines Open', category: '-World Action and Storytelling' },
  { image: '/games/BlogPoster1.png', title: 'FC25 Prepares for October 2024 Release with Enhanced', category: 'Realism' },
  { image: '/games/BlogPoster2.png', title: ' FC25 Prepares for October 2024', category: 'Release with Enhanced Realism' },
  { image: '/games/BlogPoster3.png', title: 'Marvel’s Wolverine Set for an Epic', category: '2025 Launch on PS5' },
  { image: '/games/BlogPoster4.png', title: 'The Witcher 4 Expected to Bring Back', category: 'Fan-Favorite Characters' },
  { image: '/games/BlogPoster5.png', title: 'Star Wars Outlaws Combines Open', category: '-World Action and Storytelling' },

])

const activeIndex = ref(0)
const mobileScroll = ref(null)

const currentDot = computed(() => activeIndex.value % 5)

// 5 blog set (reversed logic: big one last)
const currentSet = computed(() => {
  const start = activeIndex.value
  return [
    allBlogs.value[(start + 4) % allBlogs.value.length],
    allBlogs.value[(start + 3) % allBlogs.value.length],
    allBlogs.value[(start + 2) % allBlogs.value.length],
    allBlogs.value[(start + 1) % allBlogs.value.length],
    allBlogs.value[start],
  ]
})

// Auto slide
onMounted(() => {
  setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % allBlogs.value.length
    // Auto scroll mobile
    if (mobileScroll.value) {
      mobileScroll.value.scrollTo({
        left: (activeIndex.value * mobileScroll.value.scrollWidth) / allBlogs.value.length,
        behavior: 'smooth',
      })
    }
  }, 4000)
})
</script>

<style scoped>
.bg-primary {
  background-color: theme('colors.primary');
}

/* Hide scrollbar */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
@media (max-width: 640px) {
  /* Make mobile cards more compact and aligned like categories */
  .rounded-xl {
    border-radius: 0.75rem !important;
  }

  .h-\[140px\] {
    height: 130px !important;
  }

  .text-\[13px\] {
    font-size: 12.5px !important;
  }

  .text-\[12px\] {
    font-size: 11px !important;
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slideInRight 0.8s ease-out;
}

</style>
