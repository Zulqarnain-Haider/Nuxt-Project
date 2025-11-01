<template>
  <section
    class="flex flex-col md:flex-row gap-10 font-poppins text-mainText p-6 md:p-10 rounded-2xl"
  >
    <!-- Image -->
    <div class="flex-1">
      <NuxtImg
      densities="x1" quality="80" loading="lazy" format="webp" :src="product.image" :alt="product.title"
           class="rounded-xl w-full max-w-[500px] object-cover shadow-lg" />
    </div>

    <!-- Info -->
    <div class="flex-[1.3] flex flex-col gap-3 justify-start">
      <h1 class="text-2xl font-semibold">{{ product.title }}</h1>

      <!-- Stars -->
      <div class="flex items-center gap-2 text-yellow-400">
        <i v-for="i in 5" :key="i"
           :class="i <= starCount ? 'fa-solid fa-star' : 'fa-regular fa-star'" />
      </div>

      <!-- Release Date -->
      <p class="text-onMainText text-md mt-1">
        Release Date – {{ product.releaseDate }}
      </p>

      <!-- Price -->
      <div class="flex items-center gap-3 mt-2">
        <span class="text-2xl">${{ product.price }}</span>
        <span class="line-through text-onMainText text-lg">${{ product.oldPrice }}</span>
      </div>

      <!-- Button -->
      <UiButton
        variant="primary"
        :height="48"
        full
        extraClass="text-md rounded-xl mt-5"
      >
        {{ product.buttonText || 'Pre-Order Now' }}
      </UiButton>
    </div>
  </section>
</template>

<script setup>
import UiButton from '~/components/ui/Button.vue'
import { computed } from 'vue'
const props = defineProps({ product: Object })
const starCount = computed(() => Math.round(props.product.rating / 20))
</script>
