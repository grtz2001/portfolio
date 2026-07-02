<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import Button from 'primevue/button'
import { navLinks, email } from '../data/site'

const route = useRoute()
const isActive = (to: string) => route.path === to
</script>

<template>
  <header class="nav">
    <RouterLink to="/" class="nav__brand">gratzia<span>.dev</span></RouterLink>
    <nav class="nav__links">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="nav__link"
        :class="{ 'nav__link--active': isActive(link.to) }"
      >
        {{ link.label }}
      </RouterLink>
      <Button
        as="a"
        :href="`mailto:${email}`"
        label="get_in_touch"
        class="nav__cta"
        unstyled
      />
    </nav>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px var(--page-pad-x);
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}

.nav__brand {
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 15px;
  color: var(--text-heading);
  text-decoration: none;
}
.nav__brand span {
  color: var(--accent);
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 12.5px;
}

.nav__link {
  color: var(--text-body);
  padding: 7px 13px;
  text-decoration: none;
  border-radius: 7px;
  border: 1px solid transparent;
  transition: color 0.2s, background 0.2s, border-color 0.2s;
}
.nav__link:hover {
  color: var(--accent);
}

.nav__link--active,
.nav__link--active:hover {
  color: var(--accent);
  border-color: var(--accent-soft-border);
  background: var(--surface-nav-pill);
}

.nav__cta {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: #fff;
  background: var(--accent);
  padding: 8px 16px;
  border: none;
  border-radius: 7px;
  margin-left: 8px;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s;
}
.nav__cta:hover {
  background: #473fce;
}
.nav__cta:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

@media (max-width: 720px) {
  .nav {
    flex-direction: column;
    gap: 14px;
    align-items: flex-start;
  }
  .nav__links {
    flex-wrap: wrap;
  }
}
</style>
