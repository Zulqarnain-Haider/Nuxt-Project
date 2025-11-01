// stores/ordersStore.js
import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    orders: JSON.parse(localStorage.getItem('orders') || '[]'),
    selectedOrder: JSON.parse(localStorage.getItem('selectedOrder') || 'null'),
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),

  }),

    checkoutData: {
  billing: {},
  paymentMethod: null,
},

    getters: {
    cartCount: (state) => state.cart.reduce((acc, item) => acc + item.quantity, 0),
    cartTotal: (state) =>
      state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
  },

  actions: {
    setCheckoutData(data) {
  this.checkoutData = data
  localStorage.setItem('checkoutData', JSON.stringify(data))
},

    // 🔹 Set all orders (from API or static data)
    setOrders(data) {
      this.orders = data
      localStorage.setItem('orders', JSON.stringify(this.orders))
    },

    // 🔹 Add a new order (for future functionality)
    addOrder(order) {
      this.orders.push(order)
      localStorage.setItem('orders', JSON.stringify(this.orders))
    },

    // 🔹 Get single order by ID
    getOrderById(id) {
      return this.orders.find(o => o.id === Number(id))
    },

    // 🔹 Set selected order (for details page)
    setSelectedOrder(order) {
      this.selectedOrder = order
      localStorage.setItem('selectedOrder', JSON.stringify(order))
    },

    // 🔹 Clear selected order (when going back)
    clearSelectedOrder() {
      this.selectedOrder = null
      localStorage.removeItem('selectedOrder')
    },

    // 🔹 Sync orders from localStorage (in case of refresh)
    loadOrdersFromStorage() {
      const stored = JSON.parse(localStorage.getItem('orders') || '[]')
      const selected = JSON.parse(localStorage.getItem('selectedOrder') || 'null')
      const cartData = JSON.parse(localStorage.getItem('cart') || '[]')

      this.orders = stored
      this.selectedOrder = selected
      this.cart = cartData
    },

    addToCart(product) {
    const existing = this.cart.find(p => p.id === product.id)
    if (existing) { existing.quantity += 1
     } else { this.cart.push({ ...product, quantity: 1, 
        addedAt: new Date().toISOString(),
   })
 }
    localStorage.setItem('cart', JSON.stringify(this.cart))
  },

  removeFromCart(id) {
    this.cart = this.cart.filter(p => p.id !== id)
    localStorage.setItem('cart', JSON.stringify(this.cart))
  },

  updateQuantity(id, qty) {
    const item = this.cart.find(p => p.id === id)
    if (item) { item.quantity = Math.max(1, qty)
    localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  },

  clearCart() {
    this.cart = []
    localStorage.removeItem('cart')
  },
  
  },
})
