<template>
  <div class="min-h-screen text-mainText">
    <div class="max-w-8xl flex flex-col">

      <!--Header -->
      <section
        class="bg-bgDark mt-10 max-w-8xl mx-10 rounded-2xl p-8 flex font-poppins flex-col items-center text-center relative overflow-hidden"
      >
        <div class="max-w-3xl">
          <h2 class="text-2xl sm:text-3xl font-semibold mb-3">Frequently Asked Questions</h2>
          <p class="text-onMainText">
            This page provides quick answers to the most common questions about our gaming platform.
            Find information about your account, payments, rewards, and more in one place.
          </p>
        </div>

        <!-- Decorative circle -->
        <div class="absolute -bottom-7 -left-7 w-28 h-28 rounded-full bg-primary/10"></div>
        <div class="absolute -top-7 -right-7 w-28 h-28 rounded-full bg-primary/10"></div>
      </section>

      <!-- Popular Questions -->
      <section class="w-full bg-bgDark pb-6 pt-10 px-0 mt-10">
        <div class="max-w-7xl mx-auto px-8 lg:px-0">
          <h3 class="text-2xl font-semibold text-center mb-8 font-poppins">Popular Questions</h3>

          <div v-for="(faq, index) in faqs" :key="index"
               class="border max-w-4xl mx-auto font-inter border-onMainText rounded-lg mb-4 overflow-hidden bg-bgDark/60">
            <div
              class="flex justify-between items-center px-6 py-4 cursor-pointer"
              @click="toggleFaq(index)"
            >
              <h4 class="font-medium text-md">{{ faq.question }}</h4>
              <Icon
                 name="heroicons:chevron-down"
              class="text-md font-semibold transition-transform duration-300"
                :class="{ 'rotate-180': faq.open }"
              />
            </div>

            <transition name="fade">
              <div 
                v-if="faq.open"
                class="border-t border-outline/40 px-6 py-4 text-onFooter text-sm sm:text-base"
              >
                {{ faq.answer }}
              </div>
            </transition>
          </div>
        </div>
      </section>

      <!-- Still Need Help -->
      <section class="py-14 text-center bg-gradient-to-l font-poppins from-bgDark via-bgDark/80 to-bgLight">
        <div class="max-w-6xl mx-auto px-8">
          <h3 class="text-2xl font-semibold mb-2">Still Need Help?</h3>
          <p class="text-onMainText mb-10">Can't find what you're looking for? Our support team is here to help.</p>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div
              v-for="(card, index) in helpCards"
              :key="index"
              class="bg-bgDark rounded-2xl  p-6 flex flex-col items-center justify-center text-center 
              shadow-md transition-all duration-300"
            >
              <NuxtImg
                densities="x1"
                quality="80"
                loading="lazy"
                :src="card.icon"
                alt="help icon"
                class="object-contain mb-3"
              />
              <h4 class="text-lg font-semibold mb-2">{{ card.title }}</h4>
              <p class="text-sm text-onFooter mb-4">{{ card.description }}</p>
              <button
                :class="[
                    'text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all duration-200',
                card.color
             ]"
              >
                {{ card.buttonText }}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'How do I activate a game after purchase?',
    answer: 'After completing your order, you’ll receive a unique game key via email. Redeem it on your platform (Steam, Xbox, etc.) to activate the game.',
    open: false,
  },
  {
    question: 'Can I refund a game after purchase?',
    answer: 'Refunds are only possible if the digital key has not been redeemed and within 24 hours of purchase.',
    open: false,
  },
  {
    question: 'How long will it take to receive my code?',
    answer: 'Typically within minutes after purchase. Occasionally, verification may take up to 1 hour.',
    open: false,
  },
  {
    question: 'Are your keys region-locked?',
    answer: 'Some keys may be region-specific. The product description will always specify if a key is region-locked.',
    open: false,
  },
  {
    question: 'Do you offer support for installation issues?',
    answer: 'Yes, our team provides step-by-step support for any activation or installation problems you may face.',
    open: false,
  },
])

const helpCards = ref([
  {
    icon: '/wallet/FaqChat.svg',
    title: 'Live Chat',
    description: 'Available 24/7',
    buttonText: 'Start Chat',
    color: 'bg-violet-600'       //  (Violet)
  },
  {
    icon: '/wallet/FaqEmail.svg',
    title: 'Email Support',
    description: 'Response within 24h',
    buttonText: 'Send Email',
    color: 'bg-cyan-600'     //  Cyan
  },
  {
    icon: '/wallet/FaqPhone.svg',
    title: 'Phone Support',
    description: 'Mon-Fri 9AM–9PM',
    buttonText: 'Call Now',
    color: 'bg-yellow-600'      // Yellow
  },
])

function toggleFaq(index) {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
