<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SectionLabel from './SectionLabel.vue'
import { sideCards } from '../data/home'
</script>

<template>
  <section class="beyond">
    <SectionLabel number="03" label="beyond_code" variant="accent" />
    <p class="beyond__intro">
      Before software I was — and still am — a mathematician. Three corners of
      that life, each with its own page.
    </p>
    <div class="beyond__grid">
      <RouterLink
        v-for="s in sideCards"
        :key="s.kicker"
        :to="s.to"
        class="side-card"
      >
        <div class="side-card__kicker">{{ s.kicker }}</div>
        <h3 class="side-card__title">{{ s.title }}</h3>
        <p class="side-card__body">{{ s.body }}</p>
        <span class="side-card__more">read_more →</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.beyond {
  padding: 46px var(--page-pad-x) 56px;
  background: var(--surface-lavender);
  border-top: 1px solid var(--border);
}

.beyond__intro {
  font-weight: 400;
  font-size: 16px;
  color: var(--text-body);
  margin: 0 0 22px;
  max-width: 62ch;
}

.beyond__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.side-card {
  text-decoration: none;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 26px 24px;
  display: block;
  transition: box-shadow 0.2s, transform 0.2s;
}
.side-card:hover {
  box-shadow: 0 8px 24px rgba(79, 70, 229, 0.13);
  transform: translateY(-3px);
}

.side-card__kicker {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}

.side-card__title {
  font-weight: 600;
  font-size: 19px;
  line-height: 1.18;
  color: var(--text-heading);
  margin: 10px 0 8px;
}

.side-card__body {
  font-weight: 400;
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0 0 14px;
}

.side-card__more {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent);
}

@media (max-width: 960px) {
  .beyond__grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 640px) {
  .beyond__grid {
    grid-template-columns: 1fr;
  }
}
</style>
