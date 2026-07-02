<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()
const footerText = computed(() => route.meta.footer as string | undefined)
</script>

<template>
  <div class="page">
    <AppNav />
    <main class="page__main">
      <RouterView />
    </main>
    <AppFooter :text="footerText" />
  </div>
</template>

<style scoped>
.page {
  max-width: var(--page-max);
  margin: 0 auto;
  background: var(--surface-card);
  box-shadow: 0 1px 50px rgba(20, 22, 26, 0.08);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.page__main {
  flex: 1;
}
</style>
