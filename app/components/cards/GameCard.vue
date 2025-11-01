<template>
 <NuxtLink
    :to="`/products/${id}`"
    class="relative border border-onOutline rounded-xl p-3 sm:p-4 md:p-5 shadow-md 
      hover:shadow-lg transition-all duration-300 font-vazirmatn flex flex-col justify-between 
     h-full hover:scale-[1.03]"
  >
    <!-- Discount Badge -->
    <span
      v-if="discount"
      class="absolute top-2 left-2 bg-onGoNext text-onError 
      text-xs md:textsm font-vazirmatn px-2 py-1 rounded-lg z-20"
    >
      {{ discount }}%
    </span>

    <!-- Game Image -->
    <div class="relative mb-2 md:mb-1 xl:mb-3">
      <NuxtImg densities="x1" quality="80" loading="lazy" format="webp"
        :src="image"
        :alt="title"
        class="w-full h-[180px] sm:h-[180px] md:h-[180px] lg:h-[190px] xl:h-[230px] object-cover rounded-lg"
      />
    </div>

    <!-- Title + Stars -->
    <div class="flex items-center justify-between">
      <h3
        class="font-semibold text-xs sm:text-xs md:text-sm text-mainText truncate"
      >
        {{ title }}
      </h3>
     
        <!-- ⭐ Dynamic Stars -->
      <div class="flex text-yellow-400 text-[10px] sm:text-xs lg:sm">
        <template v-for="(star, index) in computedStars" :key="index">
          <i
            v-if="star === 'full'"
            class="fa-solid fa-star"
          />
          <i
            v-else
            class="fa-regular fa-star"
          />
        </template>
      </div>
    </div>

    <!-- Price + Rating -->
    <div class="flex items-center justify-between mt-2 md:mt-1 xl:mt-2">
      <div class="flex items-center gap-1 md:gap-1">
        <span
          class="line-through text-onMainText text-xs sm:text-sm flex items-baseline"
          >{{ oldPrice }}<span class="text-[10px] sm:text-[11px] mr-[1px]">$</span></span
        >
        <span
          class="text-mainText text-sm sm:text-md flex items-baseline"
          >{{ price }}<span class="text-[11px] sm:text-[12px] mr-[1px]">$</span></span
        >
      </div>
      <div class="flex items-center font-medium">
        <NuxtImg 
        densities="x1" quality="80" loading="lazy" src="/games/fi.svg.svg" alt="rating" class="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
        <span class="text-yellow-400 font-semibold text-sm sm:text-sm">
          {{ rating }}</span>
        <span class="text-onMainText text-xs">/100</span>
      </div>
    </div>

    <!-- Buttons -->
    <div class="flex gap-2 mt-3 md:mt-1 xl:mt-3">
     <!--  Add to Cart (outline primary) -->
      <UiButton
        @click.stop.prevent="handleAddToCart"
        class="flex-1"
        :width="0"
        :height="38"
         variant="outline" 
        extraClass="bg-surface text-mainText
         hover:bg-outline hover:text-white text-xs 
          font-vazirmatn py-2 sm:py-1 rounded-xl whitespace-nowrap"
      >
        Add to Cart
      </UiButton>
    <!-- 🟠 Buy Now (solid primary background) -->
      <UiButton
        class="flex-1 "
        :width="0"
        :height="38"
        variant="primary" 
        extraClass="bg-primary border-2 border-primary text-mainText
         hover:opacity-90 text-xs  font-vazirmatn py-2 rounded-xl whitespace-nowrap"
      >
        Buy Now
      </UiButton>
    </div>
    </NuxtLink>
</template>

<script setup>
import UiButton from '~/components/ui/Button.vue'
import { computed } from 'vue'
import { useCart } from '~/composables/useCart.js' // ✅ new composable import

const { addToCart } = useCart()

const handleAddToCart = () => {
   const product = {
    id: props.id,
    title: props.title,
    image: props.image,
    price: props.price,
    oldPrice: props.oldPrice,
    discount: props.discount,
    rating: props.rating,
    category: props.category || 'General',
    delivery: props.delivery || 'Online',
    shipping: 'Free Shipping',
    stockStatus: 'In Stock',
  }
    addToCart(product)
}

const props = defineProps({
  id: Number,
  title: String,
  image: String,
  discount: Number,
  price: Number,
  oldPrice: Number,
  rating: Number,
  category: String,
  delivery: String,  
}) 

// 🌟 Convert rating (0–100) → 0–5 stars 
const computedStars = computed(() => {
  const totalStars = 5
  const filled = Math.round(props.rating / 20) // e.g. 81/20 = 4 → ⭐⭐⭐⭐☆
  return Array.from({ length: totalStars }, (_, i) =>
    i < filled ? 'full' : 'empty'
  )
})

</script>
  
