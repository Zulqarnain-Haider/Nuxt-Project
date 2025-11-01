import { defineNuxtPlugin } from '#app'
import 'vue3-toastify/dist/index.css'
import { toast } from 'vue3-toastify'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      toast,
    },
  }
})
