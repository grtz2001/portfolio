<script setup lang="ts">
import SectionLabel from './SectionLabel.vue'
import TechChip from './TechChip.vue'
import { highlights, edutrakTech } from '../data/home'
</script>

<template>
  <section class="featured">
    <SectionLabel
      number="01"
      label="featured_work"
      variant="accent"
      right-text="2024 — 2026"
    />
    <div class="featured__card">
      <div class="featured__kicker">Edutrak Software</div>
      <div class="featured__role">Full-stack Engineer</div>
      <h2 class="featured__title">
        Modernizing a platform schools rely on every day
      </h2>
      <p class="featured__lede">
        As a full-stack engineer at Edutrak, I helped rebuild a large education
        platform from the inside out — unifying separate products into one
        experience, making it accessible to every user, and giving non-engineers
        tools to manage their own content.
      </p>
      <div class="featured__highlights">
        <div v-for="h in highlights" :key="h.no" class="highlight">
          <div class="highlight__no">{{ h.no }}</div>
          <h3 class="highlight__title">{{ h.title }}</h3>
          <p class="highlight__body">{{ h.body }}</p>
        </div>
      </div>
      <div class="featured__tech">
        <TechChip v-for="t in edutrakTech" :key="t" :label="t" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured {
  padding: 46px var(--page-pad-x) 52px;
  background: var(--surface-lavender);
  border-top: 1px solid var(--border);
}

.featured__card {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 36px;
  box-shadow: 0 1px 3px rgba(20, 22, 26, 0.05);
}

.featured__kicker {
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
}

.featured__role {
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.02em;
  color: var(--text-faint);
  margin-top: 4px;
}

.featured__title {
  font-weight: 600;
  font-size: 33px;
  line-height: 1.14;
  letter-spacing: -0.02em;
  color: var(--text-heading);
  margin: 10px 0 0;
  max-width: 24ch;
}

.featured__lede {
  font-weight: 400;
  font-size: 17px;
  line-height: 1.62;
  color: var(--text-body);
  margin: 14px 0 0;
  max-width: 74ch;
}

.featured__highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  margin-top: 32px;
}

.highlight {
  border-top: 2px solid var(--accent);
  padding-top: 14px;
}
.highlight__no {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent);
  margin-bottom: 8px;
}
.highlight__title {
  font-weight: 600;
  font-size: 17px;
  line-height: 1.2;
  color: var(--text-heading);
  margin: 0 0 7px;
}
.highlight__body {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0;
}

.featured__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 30px;
}

@media (max-width: 720px) {
  .featured__card {
    padding: 26px 20px;
  }
  .featured__title {
    font-size: 26px;
  }
  .featured__highlights {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
