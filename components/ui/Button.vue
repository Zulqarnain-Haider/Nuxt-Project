<!-- <template>
  <button
    :class="[
      'rounded-lg font transition-all duration-300 shadow-md ',
       variant === 'primary'
      ? 'bg-primary text-mainText hover:opacity-90'
       : 'bg-surface border-2 border-outline text-mainText hover:bg-outline hover:text-white',
      disabled ? 'bg-gray-400 cursor-not-allowed opacity-70 border-none text-white' : ''
    ]"
    :style="{ width: width ? width + 'px' : 'auto',  height: height + 'px' }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template> -->
<template>
  <button
    class="rounded-lg transition-all duration-300 shadow-md"
    :class="extraClass"
    :style="{ width: width ? width + 'px' : 'auto', height: height + 'px' }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<!-- <script setup>
defineProps({
  width: { type: Number, default: 176 },  // default width
  height: { type: Number, default: 52 },  // default height
  disabled: { type: Boolean, default: false },
})
</script> -->

<script setup> 
defineProps({
  width: { type: Number, default: 176 },  // default width
  height: { type: Number, default: 52 },  // default height
  disabled: { type: Boolean, default: false },
  extraClass: { type: String, default: '' } // custom classes for different use
})
</script>
