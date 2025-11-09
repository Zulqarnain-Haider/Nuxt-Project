<template>
  <div class="min-h-screen text-mainText font-poppins">
    <section class="text-center py-8 space-x-4">
      <AppButton variant="primary"
      class="px-16 py-3 text-sm rounded-xl"
      >Blogs</AppButton>
      <AppButton variant="outline" 
      class="px-16 py-3 text-sm rounded-xl"
      >News</AppButton>
    </section>
<Abbr>ABC</Abbr>
    <!--Hero Section -->
    <section
      class="relative max-w-7xl mx-auto xl:rounded-2xl overflow-hidden bg-cover bg-center font-poppins">
      <!-- Background Image -->
  <NuxtImg
    src="/blogs/BlogBg.jpg"
    alt="Blog Background"
    densities="x1"
    quality="85"
    format="webp"
    preload
    class="absolute inset-0 w-full h-full object-cover"
  />
      <div class="absolute inset-0 bg-gradient-to-l  from-gray-800/70 via-gray-800/60 to-bgDark/60"></div>
      <div class="relative z-10 px-8 py-10 sm:py-16 sm:px-10 max-w-md text-white space-y-2">
        <span class="text-primary text-sm font-semibold">Breaking</span>
        <h2 class="text-3xl sm:text-4xl font-bold leading-tight">
          Cyberpunk 2077: Phantom Liberty
        </h2>
        <p class="text-sm sm:text-base text-mainText mt-3">
          Explore Dogtown, uncover a deadly spy conspiracy, and unlock new missions, weapons, and abilities.
        </p>
        <AppButton
         variant="primary"
         class="px-12 py-3 text-sm rounded-full"
        >
        Read More</AppButton>
      </div>
    </section>

    <!--Blog Cards -->
    <section class="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-poppins">
      <BlogCard
        v-for="(blog, i) in blogs"
        :key="i"
        v-bind="blog"
      />
    </section>

    <!-- Load More -->
    <div class="text-center pb-20">
      <AppButton variant="primary"
       class="px-8 py-3 rounded-xl"
       >Load More Articles</AppButton>
    </div>
  </div>
</template>

<script setup>
import AppButton from '~/components/ui/Button.vue'
import BlogCard from '~/components/cards/BlogCard.vue'

const blogs = [
  {
    image: '/blogs/BlogCard1.png',
    tag: 'Features',
    title: 'Cyberpunk 2077 Phantom Liberty: Complete Guide',
    description: 'Explore the new expansion with our comprehensive guide covering all missions, side quests and secret locations in Night City’s district.',
    author: 'Alex Chen',
    authorImage: '/blogs/BlogUser1.jpg',
    time: '2 hours ago'
  },
  {
    image: '/blogs/BlogCard2.png',
    tag: 'Patch Notes',
    title: 'Fortnite Chapter 5 Season 1: Major Updates',
    description: 'New weapons, map changes, and gameplay mechanics arrive in the latest Fortnite update. Heres everything you need to know about the changes.',
    author: 'Sarah Johnson',
    authorImage: '/blogs/BlogUser2.jpg',
    time: '4 hours ago'
  },
  {
    image: '/blogs/BlogCard3.png',
    tag: 'Esports',
    title: 'Fortnite Chapter 5 Season 1: Major Updates',
    description: 'Team Phoenix claims victory in the most competitive tournament of the year. Catch up on all the highlights and memorable moments.',
    author: 'Sarah Johnson',
    authorImage: '/blogs/BlogUser3.jpg',
    time: '6 hours ago'
  },
  {
    image: '/blogs/BlogCard4.png',
    tag: 'Sales',
    title: 'Fortnite Chapter 5 Season 1: Major Updates',
    description: 'Team Phoenix claims victory in the most competitive tournament of the year. Catch up on all the highlights and memorable moments.',
    author: 'Sarah Johnson',
    authorImage: '/blogs/BlogUser4.jpg',
    time: '8 hours ago'
  },
  {
    image: '/blogs/BlogCard5.png',
    tag: 'Features',
    title: 'Fortnite Chapter 5 Season 1: Major Updates',
    description: 'Team Phoenix claims victory in the most competitive tournament of the year. Catch up on all the highlights and memorable moments.',
    author: 'Sarah Johnson',
    authorImage: '/blogs/BlogUser5.jpg',
    time: '12 hours ago'
  },
  {
    image: '/blogs/BlogCard6.png',
    tag: 'Patch Notes',
    title: 'Fortnite Chapter 5 Season 1: Major Updates',
    description: 'Team Phoenix claims victory in the most competitive tournament of the year. Catch up on all the highlights and memorable moments.',
    author: 'Sarah Johnson',
    authorImage: '/blogs/BlogUser6.jpg',
    time: '1 day ago'
  },
  {
    image: '/blogs/BlogCard4.png',
    tag: 'Sales',
    title: 'Fortnite Chapter 5 Season 1: Major Updates',
    description: 'Team Phoenix claims victory in the most competitive tournament of the year. Catch up on all the highlights and memorable moments.',
    author: 'Sarah Johnson',
    authorImage: '/blogs/BlogUser4.jpg',
    time: '8 hours ago'
  },
  {
    image: '/blogs/BlogCard5.png',
    tag: 'Features',
    title: 'Fortnite Chapter 5 Season 1: Major Updates',
    description: 'Team Phoenix claims victory in the most competitive tournament of the year. Catch up on all the highlights and memorable moments.',
    author: 'Sarah Johnson',
    authorImage: '/blogs/BlogUser5.jpg',
    time: '12 hours ago'
  },
  {
    image: '/blogs/BlogCard6.png',
    tag: 'Patch Notes',
    title: 'Fortnite Chapter 5 Season 1: Major Updates',
    description: 'Team Phoenix claims victory in the most competitive tournament of the year. Catch up on all the highlights and memorable moments.',
    author: 'Sarah Johnson',
    authorImage: '/blogs/BlogUser6.jpg',
    time: '1 day ago'
  },
  
  // ...add more
]
</script>
