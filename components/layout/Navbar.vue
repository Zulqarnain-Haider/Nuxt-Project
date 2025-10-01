<template>
  <nav class="bg-surface border-b border-outline text-mainText px-6 py-4 flex items-center justify-between">
    <!-- Logo -->
    <div class="text-2xl font-bold text-primary cursor-pointer">E-Game Store</div>

    <!-- Nav Links (Desktop) -->
    <ul class="hidden md:flex items-center gap-6 font-medium">
      <li><a href="#" class="hover:text-primary">Home</a></li>
      <li><a href="#" class="hover:text-primary">PC Games</a></li>
      <li><a href="#" class="hover:text-primary">Xbox</a></li>
      <li><a href="#" class="hover:text-primary">PlayStation</a></li>
      <li><a href="#" class="hover:text-primary">Nintendo</a></li>
      <li><a href="#" class="hover:text-primary">Gift Cards</a></li>
      <li><a href="#" class="hover:text-primary">Deals</a></li>
      <li><a href="#" class="hover:text-primary">Pre-orders</a></li>
      <li><a href="#" class="hover:text-primary">Blog</a></li>
    </ul>

    <!-- Right Side -->
    <div class="flex items-center gap-4">
      <button class="hidden md:inline-block text-sm font-semibold hover:text-primary">Sign In</button>
      <!-- Mobile Menu Icon -->
      <button class="md:hidden text-2xl">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </nav>
</template>
