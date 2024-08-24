<script setup lang="ts">
import { computed } from "vue";
import { useRouter, RouterLink } from "vue-router";
import routes from "../../router/routes";

const router = useRouter();
const currentRoute = computed(() => router.currentRoute.value);
const currentPrimaryRoute = computed(() => currentRoute.value.matched[0]);

// Filtrar las rutas para no mostrar las que tienen meta.hidden
const visibleRoutes = computed(() => routes.filter(route => !route.meta.hidden));
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" :to="{ name: 'home' }">Ariel Perez</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <span v-for="route in visibleRoutes" :key="route.name">
            <RouterLink
              class="nav-link"
              :class="{ active: route.name === currentPrimaryRoute?.name }"
              :to="route.path"
            >
            <i :class="route.icon"></i>
              {{ route.meta.title }}
              <span v-if="route.name === currentPrimaryRoute?.name" class="visually-hidden">(current)</span>
            </RouterLink>
          </span>
        </ul>
      </div>
    </div>
  </nav>
</template>
