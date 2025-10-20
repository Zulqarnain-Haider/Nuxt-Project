<template>
  <section
    class="min-h-screen flex flex-col md:flex-row md:-mt-[2.3rem] items-center justify-center text-white px-4 md:px-10"
  >
    <!-- Left Image -->
    <div class="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
      <img
        src="/games/ForgotPasswordLeft.png"
        alt="OTP Left"
        class="max-w-md w-full object-contain rounded-3xl"
      />
    </div>

    <!-- Right Side -->
    <div
      class="w-full md:w-1/2 flex flex-col font-inter justify-center max-w-md mx-auto rounded-3xl p-10 md:p-16"
    >
      <!-- Icon -->
      <div class="flex mb-6">
        <img
          src="/games/ForgotPasswordMainEmail.svg"
          alt="OTP Icon"
          class=""
        />
      </div>

      <!-- Heading -->
      <h2 class="text-2xl md:text-3xl font-semibold mb-2">
        OTP Verification
      </h2>
      <p class="text-inputsIn text-xs mb-7 md:mb-12">
        Check your email to see the verification code
      </p>

    <!-- OTP Inputs -->
<div
  :class="[
    'flex justify-center space-x-1 mb-4 transition-transform duration-200',
    { 'animate-shake': showError }, // shake if OTP invalid
  ]"
>
  <input
    v-for="(digit, index) in 6"
    :key="index"
    type="text"
    maxlength="1"
    v-model="otp[index]"
    @input="handleInput(index)"
    class="w-12 h-12 text-center text-lg rounded-full border transition-all duration-200 bg-transparent focus:outline-none"
    :class="[
      showError
        ? 'border-red-500 focus:ring-red-500'
        : 'border-gray-500 focus:border-primary focus:ring-1 focus:ring-primary',
    ]"
  />
</div>

      <!-- Error -->
      <p v-if="errorMessage" class="text-red-500 text-center text-sm mb-2 flex items-center gap-1">
          <span class="flex items-center justify-center w-3 h-3 rounded-full bg-error text-black text-xs">!</span>
        {{ errorMessage }}
      </p>

      <!-- Verify Button -->
       <NuxtLink to="/auth/reset-password">
      <ButtonComponent
        full
        class="h-9 font-semibold font-poppins mt-3"
        @click="verifyOtp"
      >
        Verify
      </ButtonComponent>
</NuxtLink>
      <!-- Resend -->
       
<!-- Timer / Resend Section -->
<p class="text-mainText text-center text-sm mt-4 md:mt-7">
  <template v-if="isTimerRunning">
    Resend code in
    <span class="text-primary font-semibold">{{ formatTime(timer) }}</span>
  </template>
  <template v-else>
    Didn’t receive the code?
    <span
      @click="resendOtp"
      class="text-primary cursor-pointer hover:underline"
    >
      Resend code
    </span>
  </template>
</p>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import ButtonComponent from '~/components/ui/Button.vue'

const otp = ref(['', '', '', '', '', ''])
const errorMessage = ref('')
const showError = ref(false)

const router = useRouter()


// 🔹 Timer states
const timer = ref(0) // seconds
const isTimerRunning = ref(false)
let timerInterval = null

// ✅ Function: Start Timer
const startTimer = () => {
  timer.value = 59
  isTimerRunning.value = true

  timerInterval = setInterval(() => {
    if (timer.value > 0) {
      timer.value--
    } else {
      clearInterval(timerInterval)
      isTimerRunning.value = false
    }
  }, 1000)
}

// ✅ Function: Format time (mm:ss)
const formatTime = (seconds) => {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0')
  const s = String(seconds % 60).padStart(2, '0')
  return `${m}:${s}`
}

// ✅ Handle OTP input (auto-focus next)
const handleInput = (index) => {
     showError.value = false
  errorMessage.value = '' // hide error when user starts typing again
  // move to next input automatically
  if (otp.value[index].length === 1 && index < 5) {
    const next = document.querySelectorAll('input')[index + 1]
    next.focus()
  }
}

// Verify OTP
const verifyOtp = () => {
  const enteredOtp = otp.value.join('')
  if (enteredOtp !== '123456') {
        showError.value = true
            setTimeout(() => (error.value = false), 500) // reset shake
    errorMessage.value = 'Invalid OTP. Please enter a valid OTP.'
  } else {
    showError.value = false
    errorMessage.value = 'Invalid OTP. Please enter a valid OTP.'
    router.push('/auth/reset-password')
  }
}

// Resend OTP
const resendOtp = () => {
  alert('A new OTP has been sent to your email.')
  startTimer() // start countdown again
}

// Start timer automatically on mount
onMounted(() => {
  startTimer()
})

// Cleanup timer when leaving page
onUnmounted(() => {
  clearInterval(timerInterval)
})

</script>
