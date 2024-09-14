<script setup lang="ts">
import { RouterView } from "vue-router"
import Navbar from './components/navbar/Navbar.vue'

</script>
<template>

  <header class="container">
    <Navbar />
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.navbar-container{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
