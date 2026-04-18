<template>
  <main class="overflow-hidden">
    <Navbar />
    <Hero />
    <Constat />
    <Solution />
    <Features />
    <Pricing />
    <Users />
    <Values />
    <Footer />
  </main>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Constat from './components/Constat.vue'
import Solution from './components/Solution.vue'
import Features from './components/Features.vue'
import Values from './components/Values.vue'
import Pricing from './components/Pricing.vue'
import Users from './components/Users.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
main {
  overflow: hidden;
}
</style>
