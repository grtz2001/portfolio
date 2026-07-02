<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import SectionLabel from '../components/SectionLabel.vue'
import { stats, roles } from '../data/olympiad'
</script>

<template>
  <PageHero
    eyebrow="mathematical-olympiads"
    title="Coaching Ecuador's best"
    lede="For over a decade I've helped run Ecuador's mathematical olympiad pipeline — selecting and training national teams, writing and grading international problems, and standing on the floor at competitions in Europe. It's where I learned to teach hard ideas clearly and to coordinate people at scale."
    :pad-bottom="46"
  />

  <!-- STATS -->
  <section class="stats-wrap">
    <div class="stats">
      <div v-for="s in stats" :key="s.label" class="stat">
        <div class="stat__num">{{ s.num }}</div>
        <div class="stat__label">{{ s.label }}</div>
      </div>
    </div>
  </section>

  <!-- ROLES -->
  <section class="section">
    <SectionLabel number="01" label="roles" variant="accent" />
    <div class="roles">
      <article v-for="r in roles" :key="r.role" class="role">
        <div class="role__head">
          <div class="role__head-main">
            <h2 class="role__title">{{ r.role }}</h2>
            <span class="role__org">{{ r.org }}</span>
          </div>
          <span class="role__when">{{ r.when }}</span>
        </div>
        <span class="role__where">{{ r.where }}</span>
        <ul class="role__list">
          <li v-for="(p, i) in r.points" :key="i">{{ p }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.stats-wrap {
  padding: 0 var(--page-pad-x) 8px;
  background: var(--surface-card);
}
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
.stat {
  background: var(--surface-lavender);
  border: 1px solid #e0def7;
  border-radius: 14px;
  padding: 24px 22px;
}
.stat__num {
  font-weight: 700;
  font-size: 44px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--accent);
}
.stat__label {
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.04em;
  color: var(--text-body);
  margin-top: 10px;
}

.section {
  padding: 46px var(--page-pad-x) 52px;
  background: var(--surface-muted);
  border-top: 1px solid var(--border);
  margin-top: 40px;
}

.roles {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.role {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: 14px;
  padding: 32px 34px;
  box-shadow: 0 1px 3px rgba(20, 22, 26, 0.05);
}
.role__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 18px;
}
.role__head-main {
  min-width: 0;
}
.role__title {
  font-weight: 600;
  font-size: 24px;
  letter-spacing: -0.01em;
  color: var(--text-heading);
  margin: 0;
}
.role__org {
  display: block;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent);
  margin-top: 7px;
}
.role__when {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-faint);
  white-space: nowrap;
  flex: none;
}
.role__where {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--text-faint);
  margin-top: 12px;
}
.role__list {
  margin: 16px 0 0;
  padding-left: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62;
  color: var(--text-body);
  max-width: 80ch;
}
.role__list li {
  margin-bottom: 9px;
}
.role__list li:last-child {
  margin-bottom: 0;
}

@media (max-width: 860px) {
  .stats {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 720px) {
  .role {
    padding: 26px 22px;
  }
  .role__head {
    flex-direction: column;
    gap: 6px;
  }
}
</style>
