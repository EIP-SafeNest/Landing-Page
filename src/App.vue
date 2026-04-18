<template>
  <main class="overflow-hidden">
    <Navbar />
    <Hero />
    <Problem />
    <Solution />
    <Features />
    <Values />
    <Pricing />
    <Testimonial />
    <Footer />
  </main>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Problem from './components/Problem.vue'
import Solution from './components/Solution.vue'
import Features from './components/Features.vue'
import Values from './components/Values.vue'
import Pricing from './components/Pricing.vue'
import Testimonial from './components/Testimonial.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
main {
  overflow: hidden;
}
</style>
