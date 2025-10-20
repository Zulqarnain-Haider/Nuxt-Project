<template>
  <section
    class="min-h-screen flex flex-col md:flex-row md:-mt-[2.3rem] items-center justify-center text-white px-4 md:px-10"
  >
    <!-- Left Image -->
    <div class="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
      <NuxtImg src="/games/ForgotPasswordLeft.png" alt="" quality="80" format="webp" densities="x1" loading="lazy" />
      <!-- <img
        src="/games/ForgotPasswordLeft.png"
        alt="Forgot Password Left"
        class="max-w-md w-full object-contain rounded-3xl"
      /> -->
    </div>

    <!-- Right Content -->
    <div
      class="w-full md:w-1/2 flex flex-col justify-center font-inter max-w-md mx-auto rounded-3xl p-9 md:p-14"
    >
      <!-- Icon -->
      <div class="flex mb-4">
        <img
          src="/games/ForgotPasswordLock.svg"
          alt="Lock Icon"
          class=""
        />
      </div>

      <!-- Heading -->
      <h2 class="text-2xl md:text-3xl font-semibold text-left mb-2">
        Forgot Password?
      </h2>
      <p class="text-inputsIn text-xs text-left mb-6 md:mb-12">
        Enter your email to reset your password
      </p>

      <!-- Email Input -->
      <div class="relative mb-4">
        <img
          src="/games/ForgotPasswordEmail.svg"
          alt="Email Icon"
          class="absolute left-3 top-5 -translate-y-1/2 w-5 h-5"
        />
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          class="w-full bg-bgDark rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-1 focus:ring-primary"
        />
      <p v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</p>
      </div>
        <NuxtLink to="/auth/otp-verification" class="">

      <!-- Submit Button -->
      <ButtonComponent
        full
        class="h-9 font-semibold font-poppins mt-3"
        @click="handleSubmit"
      >
        Submit
      </ButtonComponent>
</NuxtLink>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ButtonComponent from '~/components/ui/Button.vue'

const email = ref('')
const error = ref('')
const router = useRouter()

// ✅ Handle Submit
const handleSubmit = () => {
  if (!email.value) {
    error.value = 'Please enter your email.'
    return
  }
  error.value = ''
  // simulate OTP sending (can be replaced with backend)
  localStorage.setItem('resetEmail', email.value)
  router.push('/auth/otp-verification')
}
</script>
