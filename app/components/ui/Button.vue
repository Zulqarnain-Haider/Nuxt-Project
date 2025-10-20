<template>
  <button
    :class="[ 
      'rounded-lg transition-all duration-300 shadow-md md:px-1 py-2 sm:py-1 text-xs',
      variant === 'primary'
        ? 'bg-primary text-mainText hover:opacity-90'
        : 'bg-surface border-2 border-outline text-mainText hover:bg-outline hover:text-white',
      disabled ? 'bg-gray-400 cursor-not-allowed opacity-70 border-none text-white' : '',
      full ? 'w-full block' : '',
      extraClass
    ]"
    :style="{
      width: full ? '100%' : (width ? width + 'px' : 'auto'),
      height: height ? height + 'px' : undefined
    }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  width: { type: Number, default: 0 },  // changed from 176 → 0
  height: { type: Number, default: 0 },
  disabled: { type: Boolean, default: false },
  variant: { type: String, default: 'primary' },
  extraClass: { type: String, default: '' },
  full: { type: Boolean, default: false }
})
</script>
