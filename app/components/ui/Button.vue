<template>
  <button
    :class="[
      'rounded-lg  transition-all duration-300 shadow-md md:px-1 py-2 sm:py-1 text-xs',
       variant === 'primary'
      ? 'bg-primary text-mainText hover:opacity-90'
       : 'bg-surface border-2 border-outline text-mainText hover:bg-outline hover:text-white',
      disabled ? 'bg-gray-400 cursor-not-allowed opacity-70 border-none text-white' : '',
      extraClass
    ]"
    :style="{ width: width ? width + 'px' : 'auto',  height: height + 'px' }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup> 
defineProps({
  width: { type: Number, default: 176 },  // default width
  height: { type: Number, default: 52 },  // default height
  disabled: { type: Boolean, default: false },
  variant: { type: String, default: 'primary' }, // ✅ Added for button type
  extraClass: { type: String, default: '' } // custom classes for different use
})
</script>


<!-- <template>
  <button
    :class="[
      'rounded-lg font-semibold transition-all duration-300 shadow-md',
      sizeClasses,
      variantClasses,
      disabled ? 'bg-gray-400 cursor-not-allowed opacity-70 border-none text-white' : '',
      extraClass
    ]"
    :style="{ 
      width: width ? width + 'px' : 'auto',
      height: height ? height + 'px' : 'auto'
    }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'primary' }, // primary | outline | danger | success
  size: { type: String, default: 'md' },         // sm | md | lg
  width: { type: Number, default: 0 },           // optional custom width
  height: { type: Number, default: 0 },          // optional custom height
  disabled: { type: Boolean, default: false },
  extraClass: { type: String, default: '' }
})

// ✅ Size presets (you can override with width/height)
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'text-sm px-3 py-1.5'
    case 'lg': return 'text-lg px-6 py-3'
    default: return 'text-base px-4 py-2'
  }
})

// ✅ Variant presets
const variantClasses = computed(() => {
  switch (props.variant) {
    case 'outline':
      return 'bg-surface border-2 border-outline text-mainText hover:bg-outline hover:text-white'
    case 'danger':
      return 'bg-red-600 text-white hover:bg-red-700'
    case 'success':
      return 'bg-green-500 text-white hover:bg-green-600'
    default:
      return 'bg-primary text-mainText hover:opacity-90'
  }
})
</script> -->
