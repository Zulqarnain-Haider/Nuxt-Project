<template>
  <div v-if="!product" class="text-center py-10 text-onMainText">Loading product...</div>

  <div v-else class="min-h-screen text-mainText font-poppins">
    <div class="w-[90%] max-w-7xl mx-auto  flex flex-col gap-10 animate-fadeIn">

      <!-- 🔹 Conditionally show overview based on category -->
      <div v-if="product.category === 'preorders'">
        <PreOrderOverview :product="product" />
      </div>

      <div v-else>
        <ProductOverview :product="product" />
      </div>

      <!-- 🔸 Highlights -->
      <ProductHighlights />

      <!-- 🔹 Tabs -->
      <ProductTabs :product="product" />
   
      <ProductFAQ /> 
        
      <!-- 🔸 Related -->
      <RelatedProducts :products="relatedProducts" class="mt-2" />

      <!-- 🔹 Customer Reviews -->
      <CustomerReviews 
        :reviews="reviews" 
        :currentUser="currentUser"
      />
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '~/stores/userStore'
import ProductOverview from '~/components/product/ProductOverview.vue'
import PreOrderOverview from '~/components/product/PreOrderOverview.vue'
import ProductHighlights from '~/components/product/ProductHighlights.vue'
import ProductTabs from '~/components/product/ProductTabs.vue'
import ProductFAQ from '~/components/product/ProductFAQ.vue'
import RelatedProducts from '~/components/product/RelatedProducts.vue'
import CustomerReviews from '~/components/product/CustomerReviews.vue'

const route = useRoute()
const userStore = useUserStore()

const loading = ref(true)
const product = ref(null)
const relatedProducts = ref([])
const reviews = ref([])
const currentUser = ref(null)

onMounted(async () => {
  try {
    const res = await $fetch('/api/products')
    const allProducts = res || []
    const currentId = Number(route.params.id)
    const foundProduct = allProducts.find(p => p.id === currentId)
    product.value = foundProduct || null

    if (product.value) {
      relatedProducts.value = allProducts.filter(
        p => p.category === product.value.category && p.id !== currentId
      )
      reviews.value = product.value.reviews || []
    }

    currentUser.value = userStore.currentUser
  } catch (error) {
    console.error('❌ Failed to load product details:', error)
  } finally {
    loading.value = false
  }
})
</script>
