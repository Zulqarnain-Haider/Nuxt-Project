<template>
  <button
    :class="[ 
      'transition-all duration-300 shadow-md ',
      variant === 'primary'
        ? 'bg-primary text-white hover:opacity-90'
        : 'bg-surface border-2 border-outline text-mainText hover:bg-outline hover:text-white',
      disabled ? 'bg-gray-400 cursor-not-allowed opacity-70 border-none text-mainText' : '',
      full ? 'w-full block' : '',
      extraClass || 'rounded-lg', 'text-md'
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
