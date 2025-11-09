<template>
  <div class="min-h-screen text-mainText font-poppins py-10 px-4 sm:px-8 animate-fadeIn">
    <div class="max-w-7xl mx-auto flex flex-col gap-10">
      <!-- 🔍 Search Bar -->
      <div class="flex items-center justify-center gap-4">
        <input
          v-model="searchQuery"
          @keyup.enter="onSearch"
          type="text"
          placeholder="Search games..."
          class="w-full sm:w-1/2 px-5 py-3 rounded-full bg-bgLight text-mainText placeholder:text-onMainText focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <button
          @click="onSearch"
          class="px-5 py-3 rounded-full bg-primary text-white hover:opacity-90 transition"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <!-- 🧾 Search Info -->
      <div v-if="!loading && searchQuery.trim()" class="text-center text-onFooter">
        <p v-if="filteredProducts.length">
          Showing results for:
          <span class="text-primary font-medium">"{{ searchQuery }}"</span>
        </p>
        <p v-else>No results found for "{{ searchQuery }}"</p>
      </div>

      <!-- 🕹️ Results Grid -->
      <div
        v-if="!loading && filteredProducts.length"
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
      >
        <GameCard
          v-for="(product, i) in filteredProducts"
          :key="product.id + '-' + i"
          :id="product.id"
          :title="product.title"
          :image="product.image"
          :discount="product.discount"
          :price="product.price"
          :oldPrice="product.oldPrice"
          :rating="product.rating"
        />
      </div>

      <!-- ⏳ Loading -->
      <div v-if="loading" class="text-center py-20 text-onFooter">Loading...</div>

      <!-- 🚫 No Results -->
      <div
        v-if="!loading && searchQuery.trim() && !filteredProducts.length"
        class="text-center py-20 text-onFooter text-lg"
      >
        No games found.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import GameCard from '~/components/cards/GameCard.vue'

const route = useRoute()
const router = useRouter()

const searchQuery = ref(route.query.query || '')
const loading = ref(false)
const products = ref([])

async function fetchProducts() {
  loading.value = true
  try {
    // ✅ Same API as category page
    const res = await $fetch('/api/products')
    products.value = res
    console.log('✅ Products loaded:', res.length)
  } catch (err) {
    console.error('❌ Failed to fetch products:', err)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await fetchProducts()
  if (route.query.query) {
    searchQuery.value = route.query.query
  }
})

// 🧮 Filter logic (title, category, genres)
const filteredProducts = computed(() => {
  if (!searchQuery.value.trim()) return []
  const q = searchQuery.value.toLowerCase()
  return products.value.filter(
    (p) =>
      p.title?.toLowerCase().includes(q) ||
      p.category?.toLowerCase().includes(q) ||
      (p.genres && p.genres.some((g) => g.toLowerCase().includes(q))) ||
      p.type?.toLowerCase().includes(q)
  )
})

// 🔍 Trigger new search
function onSearch() {
  if (!searchQuery.value.trim()) return
  router.push({ path: '/search', query: { query: searchQuery.value } })
}

// 🔁 Watch route query
watch(
  () => route.query.query,
  async (val) => {
    searchQuery.value = val || ''
    if (!products.value.length) await fetchProducts()
  }
)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
