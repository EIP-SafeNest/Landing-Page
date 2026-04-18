<template>
  <nav :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-500', scrolled ? 'shadow-lg bg-white/95' : 'bg-transparent']">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center">
            <span class="text-white font-bold">S</span>
          </div>
          <span class="text-xl font-bold">Safe<span class="text-teal-500">Nest</span></span>
        </a>

        <!-- Desktop links -->
        <div class="hidden md:flex items-center gap-8">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" class="text-sm font-medium hover:text-teal-500 transition-colors">
            {{ link.label }}
          </a>
          <a href="#pricing" class="px-5 py-2.5 rounded-full bg-navy-900 text-white text-sm font-semibold hover:shadow-lg transition-all">
            Commencer
          </a>
        </div>

        <!-- Mobile toggle -->
        <button @click="isOpen = !isOpen" class="md:hidden p-2">
          {{ isOpen ? '✕' : '☰' }}
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="isOpen" class="md:hidden pb-4">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="block px-4 py-2 hover:bg-gray-100">
          {{ link.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { label: 'Solution', href: '#solution' },
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Pourquoi nous', href: '#values' },
  { label: 'Tarifs', href: '#pricing' }
]

const onScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
