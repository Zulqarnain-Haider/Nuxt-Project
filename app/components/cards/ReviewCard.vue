<template>
  <div
    :class="[
      'relative flex flex-col items-center justify-center text-center transition-all duration-500 py-10 px-6 overflow-visible',
      isActive ? 'scale-105 opacity-100 z-20' : 'scale-90 opacity-70 z-10'
    ]"
    style="height: 400px; min-height: 380px;"
  >
   <!-- 🔹 Single Combined Vector Background -->
<img
  :src="bgImage"
  alt="review-card-bg"
  class="absolute inset-0 object-contain z-0"
/>


   
    <!-- ✅ Avatar -->
    <div
      :class="[
        'absolute rounded-full overflow-hidden bg-black z-20 transition-all duration-500',
        isActive ? 'w-20 h-20 -top-10' : 'w-16 h-16 -top-1 right-28'
      ]"
    >
      <img :src="image" alt="avatar" class="w-full h-full object-cover" />
    </div>

    <!-- ✅ Name -->
    <h3
      :class="[
        'font-poppins font-semibold text-white mb-2 z-20 transition-all duration-500',
        isActive ? 'text-lg' : 'text-sm opacity-80'
      ]"
    >
      {{ name }}
    </h3>

    <!-- ✅ Stars -->
    <div
      :class="[
        'flex justify-center mb-3 z-20 transition-all duration-500',
        isActive ? 'scale-100' : 'scale-90 opacity-70'
      ]"
    >
      <i
        v-for="n in 5"
        :key="n"
        :class="[n <= (rating || 0) ? 'fas fa-star' : 'far fa-star']"
        class="mx-0.5 text-sm"
      ></i>
    </div>

    <!-- ✅ Text -->
    <p
      :class="[
        'font-poppins text-gray-200 leading-relaxed max-w-xs z-20 transition-all duration-500',
        isActive ? 'text-sm opacity-100' : 'text-xs opacity-70'
      ]"
    >
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  name: string
  rating: number
  text: string
  isActive?: boolean
  bgImage: string // ✅ new prop
}>()
</script>

<style scoped>
/* ⭐ FontAwesome Stars Styling */
.fas,
.far {
  transition: color 0.3s ease;
}

/* Filled */
.fas {
  color: #ffb800;
}

/* Outlined (yellow border) */
.far {
  color: transparent;
  -webkit-text-stroke: 1px #ffb800;
}
</style>
