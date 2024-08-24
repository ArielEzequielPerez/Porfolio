<script setup lang="ts">
import { RouterView } from "vue-router"
import Navbar from './components/navbar/Navbar.vue'
// import Personal from './views/PersonalView.vue'
// import Skill from './views/SkillsView.vue'
// import Projects from './views/ProjectsView.vue'
// import Contact from './views/ContactView.vue'
</script>
<template>

  <header class="container">
    <Navbar />
  </header>

  <div class="container">
    <RouterView />
    <h1>Hoalzxczxczxs</h1>
  </div>
  <!-- <Personal/>
  <Skill/>
  <Projects/>
  <Contact/> -->
</template>

<style scoped>
.navbar-container{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
