<template>
  <div class="min-h-screen text-mainText py-10 px-4 sm:px-8 lg:px-16">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 font-poppins">

      <!-- 🧾 LEFT: Billing Details -->
      <div class="flex-1 rounded-2xl space-y-6">
        <h2 class="text-lg sm:text-xl font-semibold mb-12">Billing Details</h2>

        <!-- 🔸 Global Error -->
        <p v-if="globalError" class="text-error text-sm mb-3">{{ globalError }}</p>

        <form @submit.prevent="placeOrder" class="space-y-5">
          <!-- Row 1 -->
          <div class="grid md:grid-cols-2 gap-5">
            <div>
              <label class="label">First Name<span class="text-error">*</span></label>
              <input v-model="form.firstName" type="text" :class="inputClass('firstName')" />
              <p v-if="errors.firstName" class="text-error text-xs mt-1">{{ errors.firstName }}</p>
            </div>
            <div>
              <label class="label">Last Name<span class="text-error">*</span></label>
              <input v-model="form.lastName" type="text" :class="inputClass('lastName')" />
              <p v-if="errors.lastName" class="text-error text-xs mt-1">{{ errors.lastName }}</p>
            </div>
          </div>

          <!-- Company -->
          <div>
            <label class="label">Company Name <span class="text-onFooter/70">(Optional)</span></label>
            <input v-model="form.company" type="text" class="input" />
          </div>

          <!-- Country -->
          <div class="relative">
            <label class="label">Country / Region<span class="text-error">*</span></label>
            <select v-model="form.country" :class="['appearance-none', inputClass('country')]" required>
              <option value="">Select country</option>
              <option>Pakistan</option>
              <option>UAE</option>
              <option>USA</option>
            </select>
            <i class="fa-solid fa-chevron-down absolute right-3 top-[38px] text-onFooter/70 cursor-pointer pointer-events-none"></i>
            <p v-if="errors.country" class="text-error text-xs mt-1">{{ errors.country }}</p>
          </div>

          <!-- Street -->
          <div>
            <label class="label">Street Address<span class="text-error">*</span></label>
            <input v-model="form.street" placeholder="House number and street name" :class="inputClass('street')" />
            <p v-if="errors.street" class="text-error text-xs mt-1">{{ errors.street }}</p>
            <input v-model="form.apartment" placeholder="Apartment, suite, unit etc (optional)" class="input mt-3" />
          </div>

          <!-- City / State -->
          <div class="grid grid-cols-1 gap-5">
            <div>
              <label class="label">Town / City<span class="text-error">*</span></label>
              <input v-model="form.city" :class="inputClass('city')" />
              <p v-if="errors.city" class="text-error text-xs mt-1">{{ errors.city }}</p>
            </div>
             <div class="relative">
            <label class="label">State /  Counrty<span class="text-error">*</span></label>
            <select v-model="form.country" :class="['appearance-none', inputClass('country')]" required>
              <option value="">Select country</option>
              <option>Pakistan</option>
              <option>UAE</option>
              <option>USA</option>
            </select>
            <i class="fa-solid fa-chevron-down absolute right-3 top-[38px] text-onFooter/70 cursor-pointer pointer-events-none"></i>
            <p v-if="errors.country" class="text-error text-xs mt-1">{{ errors.country }}</p>
          </div>
          </div>

          <!-- Zip / Phone -->
          <div class="flex flex-col gap-5">
            <div>
              <label class="label">Zip Code<span class="text-error">*</span></label>
              <input v-model="form.zip" :class="inputClass('zip')" />
              <p v-if="errors.zip" class="text-error text-xs mt-1">{{ errors.zip }}</p>
            </div>
            <div>
              <label class="label">Phone Number<span class="text-error">*</span></label>
              <input v-model="form.phone" :class="inputClass('phone')" />
              <p v-if="errors.phone" class="text-error text-xs mt-1">{{ errors.phone }}</p>
            </div>
          </div>

          <!-- Email -->
          <div>
            <label class="label">Email Address<span class="text-error">*</span></label>
            <input v-model="form.email" type="email" :class="inputClass('email')" />
            <p v-if="errors.email" class="text-error text-xs mt-1">{{ errors.email }}</p>
          </div>
      
                  <!-- Terms -->
        <div class="flex items-center mt-3 space-x-2">
          <input v-model="form.agree" type="checkbox" class="accent-primary" />
          <label class="text-md">Create an account?</label>
        </div>
        <p v-if="errors.agree" class="text-error text-xs mt-1">{{ errors.agree }}</p>
 

          <!-- Notes -->
          <div>
            <h3 class="font-semibold text-lg mb-6 mt-16">Additional Information</h3>
            <label class="label mb-3">Order Notes <span class="text-onFooter/80">(Optional)</span></label>
            <textarea v-model="form.notes" rows="3" class="input resize-none"></textarea>
          </div>
        </form>
      </div>

      <!-- 💳 RIGHT: Payment + Order -->
      <div class="w-full lg:w-[400px] flex flex-col gap-8">

        <!-- 💳 Payment Method -->
        <div class="marker:rounded-2xl mt-12">
          <h3 class="text-md sm:text-lg font-semibold mb-4">Payment Method</h3>

          <!-- Payment Options -->
          <div class="space-y-3">
            <div
              @click="selectMethod('Apple Pay')"
              :class="[
                'relative flex justify-between items-center border rounded-lg px-4 py-3 cursor-pointer transition-all',
                form.paymentMethod === 'Apple Pay'
                  ? 'border-primary bg-primary/10 scale-[1.02]'
                  : 'border-onMainText hover:border-primary/60 hover:bg-bgDark/40'
              ]"
            >
              <span class="text-onFooter/70">Apple Pay</span>
              <i class="fa-solid fa-chevron-right text-onFooter/70"></i>
            </div>

            <div
              @click="selectMethod('Fawry')"
              :class="[
                'relative flex justify-between items-center border rounded-lg px-4 py-3 cursor-pointer transition-all',
                form.paymentMethod === 'Fawry'
                  ? 'border-primary bg-primary/10 scale-[1.02]'
                  : 'border-onMainText hover:border-primary/60 hover:bg-bgDark/40'
              ]"
            >
              <span class="text-onFooter/70">Fawry</span>
              <i class="fa-solid fa-chevron-right text-onFooter/70"></i>
            </div>

            <div
              @click="toggleDebitCard"
              :class="[
                'relative flex justify-between items-center border rounded-lg px-4 py-3 cursor-pointer transition-all',
                showDebitCard
                  ? 'border-primary bg-primary/10 scale-[1.02]'
                  : 'border-onMainText hover:border-primary/60 hover:bg-bgDark/40'
              ]"
            >
              <span class="text-onFooter/70">Debit Card</span>
              <i
                class="fa-solid fa-chevron-right text-onFooter/70 transition-transform duration-300"
                :class="{ 'rotate-90': showDebitCard }"
              ></i>
            </div>
          </div>

          <!-- Debit Card Details -->
          <transition name="fade">
            <div v-if="showDebitCard" class="mt-4 rounded-lg p-4 space-y-3 border border-onMainText">
              <h4 class="text-base font-semibold mb-3">Debit Card</h4>

              <div
                @click="selectCard('Axim Bank')"
                :class="[
                  'flex justify-between items-center border rounded-lg px-4 py-3 border-onMainText cursor-pointer transition-all',
                  selectedCard === 'Axim Bank'
                ]"
              >
                <div class="flex items-center gap-3">
                  <NuxtImg 
                  densities="x1" quality="80" format="webp" loading="lazy"  src="/games/AximBank.png" alt="Axim Bank" class="w-8 h-8 object-contain" />
                  <p class="text-onFooter/70">Axim Bank **** **** **** 4578</p>
                </div>
              <div
  class="w-5 h-5 rounded-full border transition-all duration-300 flex items-center justify-center"
  :class="selectedCard === 'Axim Bank' ? 'border-primary' : 'border-onMainText'"
>
  <div
    :class="[
      'rounded-full transition-all duration-300',
      selectedCard === 'Axim Bank' ? 'w-3 h-3 bg-primary' : 'w-0 h-0 bg-transparent'
    ]"
  ></div>
</div>

              </div>

              <div
                @click="selectCard('HDFC Bank')"
                :class="[
                  'flex justify-between items-center border border-onMainText rounded-lg px-4 py-3 cursor-pointer transition-all',
                  selectedCard === 'HDFC Bank'
                ]"
              >
                <div class="flex items-center gap-3">
                  <NuxtImg densities="x1" quality="80" format="webp" loading="lazy" src="/games/VisaBank.png" alt="HDFC Bank" class="w-8 h-8 object-contain" />
                  <p class="text-onFooter/70">HDFC Bank **** **** **** 4521</p>
                </div>
                <div
  class="w-5 h-5 rounded-full border transition-all duration-300 flex items-center justify-center"
  :class="selectedCard === 'HDFC Bank' ? 'border-primary' : 'border-onMainText'"
>
  <div
    :class="[
      'rounded-full transition-all duration-300',
      selectedCard === 'HDFC Bank' ? 'w-3 h-3 bg-primary' : 'w-0 h-0 bg-transparent'
    ]"
  ></div>
</div>

              </div>

              <div
                @click="addNewCard"
                class="flex items-center gap-2 text-onFooter/70 hover:text-primary cursor-pointer mt-3"
              >
                <div class="w-5 h-5 rounded-full bg-primary p-1 flex items-center justify-center text-onMainText">
                  <i class="fa-solid fa-plus text-xs"></i>
                </div>
                <span class="text-sm font-medium">Add New Card</span>
              </div>
            </div>
          </transition>

          <p v-if="errors.paymentMethod" class="text-error text-xs mt-3">{{ errors.paymentMethod }}</p>
        </div>

        <!-- 🧾 Your Order -->
        <div class="bg-bgLight/10 border border-outline rounded-2xl p-6">
          <h3 class="text-lg sm:text-xl font-semibold mb-4">Your Order</h3>

          <div class="border-b border-outline pb-2 mb-3 flex justify-between text-sm font-semibold uppercase">
            <span>Product</span>
            <span>Sub Total</span>
          </div>

          <div
            v-for="item in cartItems"
            :key="item.id"
            class="flex justify-between text-sm py-3 border-b border-outline/40 last:border-none items-center"
          >
            <div class="flex items-center gap-3">
              <img :src="item.image" class="w-12 h-12 rounded-md object-cover" />
              <div>
                <p class="font-medium">{{ item.title }}</p>
                <p class="text-xs text-onFooter/70">{{ item.category }}</p>
                <p class="text-xs text-onFooter/70">x{{ item.quantity }}</p>
              </div>
            </div>
            <!-- <span>{{ (item.price * item.quantity).toFixed(2) }} EGP</span> -->
          </div>

          <div class="text-[12px] flex justify-between mt-4">
            <p>Worldwide Standard Shipping Free</p>
            <p class="text-error font-medium">+ $9.50</p>
          </div>

          <div class="flex justify-between font-semibold mt-2 border-t border-onOutline pt-3">
            <p>Total:</p>
            <p class="text-green-600">${{ total.toFixed(2) }}</p>
          </div>

          <p class="mt-4 text-xs max-w-xs text-mainText">
            Have a coupon? <span class="text-primary underline cursor-pointer"> Click here to enter your code</span>
          </p>

          <div class="flex justify-center itesm-center mt-10">
          <AppButton
            @click="placeOrder"
            variant="primary"
            extraClass="w-full justify-center items-center px-8 py-3 rounded-full text-md hover:opacity-90 transition-all"
          >
            Place Order
          </AppButton>
          </div>
        </div>
      </div>
    </div>

    <!-- ✅ Toast -->
    <transition name="fade">
      <div
        v-if="toast.visible"
        class="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg text-sm"
      >
        {{ toast.message }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useOrdersStore } from '~/stores/ordersStore.js'
import AppButton from '~/components/ui/Button.vue'
import { navigateTo } from '#app'

// Store
const ordersStore = useOrdersStore()
onMounted(() => ordersStore.loadOrdersFromStorage())

const cartItems = computed(() => ordersStore.cart)
const total = computed(() => ordersStore.cartTotal)

// Toast system
const toast = reactive({ visible: false, message: '' })
function showToast(msg) {
  toast.message = msg
  toast.visible = true
  setTimeout(() => (toast.visible = false), 2000)
}

// Payment logic
const showDebitCard = ref(false)
const selectedCard = ref('')
const errors = ref({})
const globalError = ref('')

function selectMethod(method) {
  form.value.paymentMethod = method
  showDebitCard.value = method === 'Debit Card'
  errors.value.paymentMethod = ''
}

function toggleDebitCard() {
  showDebitCard.value = !showDebitCard.value
  form.value.paymentMethod = 'Debit Card'
  errors.value.paymentMethod = ''
}

function selectCard(card) {
  selectedCard.value = card
  showToast(`💳 ${card} selected successfully!`)
}

function addNewCard() {
  showToast('➕ Add New Card feature coming soon!')
}

// Form data
const form = ref({
  firstName: '', lastName: '', company: '', country: '', street: '', apartment: '',
  city: '', state: '', zip: '', phone: '', email: '', notes: '', paymentMethod: ''
})

// Validation
function validateForm() {
  errors.value = {}
  globalError.value = ''
  const required = ['firstName', 'lastName', 'country', 'street', 'city', 'state', 'zip', 'phone', 'email', 'agree', 'paymentMethod']
  for (const field of required) {
    if (!form.value[field]) errors.value[field] = `${field.replace(/([A-Z])/g, ' $1')} is required.`
  }
  if (Object.keys(errors.value).length) {
    globalError.value = 'Please fill all required fields.'
    return false
  }
  return true
}

function inputClass(field) {
  return [
    'input',
    errors.value[field] ? 'border-error focus:border-error' : 'focus:border-primary focus:ring-1 focus:ring-primary'
  ]
}

// Place Order
function placeOrder() {
  if (!validateForm()) return
  const order = {
    id: Date.now(),
    ...form.value,
    items: [...ordersStore.cart],
    total: total.value,
    date: new Date().toISOString(),
  }
  ordersStore.addOrder(order)
  ordersStore.clearCart()
  showToast('✅ Order placed successfully!')
  setTimeout(() => navigateTo('/'), 1500)
}
</script>

<style scoped>
.input {
  @apply w-full px-3 py-2 rounded-lg bg-bgDark text-sm sm:text-base
  outline-none focus:ring-1 focus:ring-primary transition duration-200 placeholder:text-onFooter/70;
}
.label {
  @apply block mb-1 text-sm font-medium;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
