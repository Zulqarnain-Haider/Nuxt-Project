// composables/useCart.js
import { useOrdersStore } from '~/stores/ordersStore.js'

export function useCart() {
  const store = useOrdersStore()
  const { $toast } = useNuxtApp()

  // 🛒 Add product to cart
  const addToCart = (product) => {
    if (!product || !product.id) {
      console.warn('⚠️ Invalid product passed to addToCart:', product)
      return
    }

    store.addToCart(product)

    // ✅ Safe Toast
    if ($toast) {
      $toast.success(`${product.title || 'Product'} added to cart!`, {
        autoClose: 2000,
        position: 'top-right',
        theme: 'dark',
      })
    }
  }

  // 🗑️ Optional: Remove from cart (future use)
  const removeFromCart = (id) => {
    store.removeFromCart(id)
    if ($toast) {
      $toast.info('Item removed from cart', {
        autoClose: 1500,
        position: 'top-right',
        theme: 'dark',
      })
    }
  }

  return { addToCart, removeFromCart }
}
