<template>
  <div class="bg-background text-on-background font-body selection:bg-primary-container/30 min-h-screen">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;600&family=Inter:wght@400;500;700&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
  ]
})
</script>

<style>
.material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
.font-notoSerif { font-family: 'Noto Serif', serif; }
.font-manrope { font-family: 'Manrope', sans-serif; }
.font-inter { font-family: 'Inter', sans-serif; }
</style>
