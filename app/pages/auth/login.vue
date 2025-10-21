<template>
  <div class="flex items-center justify-center min-h-screen font-poppins px-8 bg-page-gradient">
    <div class="w-full max-w-md text-mainText py-12">
      <!-- Heading -->
      <h2 class="text-2xl font-semibold text-center mb-4 font-poppins">Welcome back!</h2>
      <p class="text-center text-sm text-mainText mb-10 font-poppins">
        Enter your Credentials to access your account
      </p>

      <!-- Global Error Message -->
      <p
        v-if="globalError"
        class="text-error text-sm mb-3 text-center font-poppins"
      >
        {{ globalError }}
      </p>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email / Phone -->
        <div>
          <label class="block mb-1 text-sm">Email or Phone</label>
          <input
            v-model="identifier"
            type="text"
            placeholder="Enter your email or phone"
            :class="inputClass('identifier')"
          />
          <p v-if="errors.identifier" class="text-error text-xs mt-1">{{ errors.identifier }}</p>
        </div>

        <!-- Password -->
        <div class="relative">
          <label class="block mb-1 text-sm">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            :class="inputClass('password') + ' pr-28'" 
          />

          <!-- forgot password link inside input -->
          <NuxtLink
            to="/auth/forgot-password"
            class="absolute right-3 top-11 -translate-y-[45%] text-xs underline direction-1 text-primary hover:text-primary/80 cursor-pointer leading-none"
          >
            forgot password?
          </NuxtLink>

          <p v-if="errors.password" class="text-error text-xs mt-1">{{ errors.password }}</p>
        </div>

        <!-- Remember Me Checkbox -->
        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              v-model="rememberMe"
              class="accent-primary w-4 h-4 cursor-pointer"
            />
            <span class="text-mainText text-sm">Remember for 30 days</span>
          </label>
        </div>

        <!-- Login Button -->
        <ButtonComponent
          type="submit"
          full
          class="h-10 mt-5 font-poppins font-semibold"
        >
          Login
        </ButtonComponent>
      </form>

      <!-- Divider -->
      <div class="flex items-center justify-center my-6 text-onMainText relative">
        <span class="border-t border-2 border-white w-1/2"></span>
        <span class="text-sm bg-white px-1 text-black">Or</span>
        <span class="border-t border-2 border-white w-1/2"></span>
      </div>

      <!-- Social Icons -->
      <div class="flex justify-center gap-4 mt-12 mb-6">
        <NuxtImg src="/games/Signinwith1.svg" alt="Google" class="cursor-pointer" quality="80" densities="x1" loading="=lazy" />
        <NuxtImg src="/games/Signinwith2.svg" alt="Google" class="cursor-pointer" quality="80" densities="x1" loading="=lazy" />
        <NuxtImg src="/games/Signinwith3.svg" alt="Google" class="cursor-pointer" quality="80" densities="x1" loading="=lazy" />
        <NuxtImg src="/games/Signinwith4.svg" alt="Google" class="cursor-pointer" quality="80" densities="x1" loading="=lazy" />
      </div>

      <!-- Signup Link -->
      <p class="text-center text-sm text-mainText">
        Don’t have an account?
        <NuxtLink to="/auth/signup" class="text-primary hover:underline">Sign Up</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { navigateTo } from '#app'
import ButtonComponent from '~/components/ui/Button.vue'
import { useUserStore } from '~/stores/userStore.js'
const userStore = useUserStore()

const identifier = ref('')
const password = ref('')
const rememberMe = ref(false)
const errors = ref({})
const globalError = ref('')


definePageMeta({
  layout: 'auth'
})

// Tailwind Input Style
const inputClass = (field) => [
  'w-full h-10 p-2 text-xs rounded-md bg-bgDark font-poppins focus:outline-none transition-all duration-200 placeholder:text-inputsIn',
  errors.value[field]
    ? 'border border-error'
    : 'border border-transparent focus:border-primary',
].join(' ')

// Form Validation
const validateForm = () => {
  errors.value = {}
  globalError.value = ''

  if (!identifier.value) errors.value.identifier = 'Email or phone is required.'
  if (!password.value) errors.value.password = 'Password is required.'

  return Object.keys(errors.value).length === 0
}

// Login Function
const handleLogin = () => {
  if (!validateForm()) {
    globalError.value = 'Please fill the highlighted fields.'
    return
  }

    const res = userStore.login(identifier.value, password.value)

  if (!res.success) {
    globalError.value = res.message
  } else {
    globalError.value = ''
    if (rememberMe.value) localStorage.setItem('rememberMe', 'true')
    else localStorage.removeItem('rememberMe')
    navigateTo('/profile')
  }

  // // Mock login logic (replace later with userStore)
  // if (identifier.value === 'test@example.com' && password.value === '123456') {
  //   // Save rememberMe in localStorage if checked
  //   if (rememberMe.value) localStorage.setItem('rememberMe', 'true')
  //   else localStorage.removeItem('rememberMe')

  //   globalError.value = ''
  //   navigateTo('/profile')
  // } else {
  //   globalError.value = 'Invalid credentials. Please try again.'
  // }
}
</script>
