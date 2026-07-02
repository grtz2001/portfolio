<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import SectionLabel from '../components/SectionLabel.vue'
import TechChip from '../components/TechChip.vue'
import AccentPill from '../components/AccentPill.vue'
import { studies, interests, methods, presentation } from '../data/research'
</script>

<template>
  <PageHero
    eyebrow="undergraduate-research"
    title="Graphs, grids & knots"
    lede="I'm drawn to problems where a clean piece of mathematics quietly solves something real — placing the fewest sensors to watch a power grid, or counting the knots a protein ties in itself. Two undergraduate projects, one of them award-winning."
  />

  <!-- RESEARCH PROJECTS -->
  <section class="section section--muted">
    <SectionLabel number="01" label="research_projects" variant="accent" />
    <div class="studies">
      <article v-for="s in studies" :key="s.title" class="study">
        <div class="study__head">
          <div class="study__head-main">
            <h2 class="study__title">{{ s.title }}</h2>
            <span class="study__venue">{{ s.venue }}</span>
          </div>
          <span class="study__when">{{ s.when }}</span>
        </div>
        <div v-if="s.award" class="study__award">
          <AccentPill :label="s.award" star />
        </div>
        <p class="study__question">{{ s.question }}</p>
        <div class="study__grid">
          <span class="study__label">what_i_did</span>
          <ul class="study__list">
            <li v-for="(w, i) in s.work" :key="i">{{ w }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>

  <!-- INTERESTS + METHODS -->
  <section class="section section--lavender">
    <SectionLabel number="02" label="interests_&_methods" variant="ink" />
    <div class="two-col">
      <div class="panel">
        <h3 class="panel__title">Research interests</h3>
        <ul class="panel__list">
          <li v-for="(item, i) in interests" :key="i">{{ item }}</li>
        </ul>
      </div>
      <div class="panel">
        <h3 class="panel__title">Methods & tools</h3>
        <div class="panel__chips">
          <TechChip v-for="m in methods" :key="m" :label="m" />
        </div>
        <p class="panel__note">{{ presentation }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 46px var(--page-pad-x) 52px;
  border-top: 1px solid var(--border);
}
.section--muted {
  background: var(--surface-muted);
}
.section--lavender {
  background: var(--surface-lavender);
  padding-bottom: 56px;
}

.studies {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.study {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: 14px;
  padding: 32px 34px;
  box-shadow: 0 1px 3px rgba(20, 22, 26, 0.05);
}

.study__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 18px;
}
.study__head-main {
  min-width: 0;
}
.study__title {
  font-weight: 600;
  font-size: 26px;
  letter-spacing: -0.01em;
  color: var(--text-heading);
  margin: 0;
}
.study__venue {
  display: block;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent);
  margin-top: 7px;
}
.study__when {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-faint);
  white-space: nowrap;
  flex: none;
}

.study__award {
  margin-top: 16px;
}

.study__question {
  font-weight: 500;
  font-size: 20px;
  line-height: 1.45;
  color: #2b2f37;
  margin: 22px 0 0;
  max-width: 40ch;
}

.study__grid {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 16px 28px;
  margin-top: 24px;
  align-items: start;
}
.study__label {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-faint);
  padding-top: 4px;
}
.study__list {
  margin: 0;
  padding-left: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62;
  color: var(--text-body);
  max-width: 74ch;
}
.study__list li {
  margin-bottom: 9px;
}
.study__list li:last-child {
  margin-bottom: 0;
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.panel {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 28px;
}
.panel__title {
  font-weight: 600;
  font-size: 18px;
  color: var(--text-heading);
  margin: 0 0 16px;
}
.panel__list {
  margin: 0;
  padding-left: 18px;
  font-weight: 400;
  font-size: 15.5px;
  line-height: 1.6;
  color: var(--text-body);
}
.panel__list li {
  margin-bottom: 9px;
}
.panel__list li:last-child {
  margin-bottom: 0;
}
.panel__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
.panel__note {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-faint);
  margin: 20px 0 0;
}

@media (max-width: 720px) {
  .study {
    padding: 26px 22px;
  }
  .study__head {
    flex-direction: column;
    gap: 6px;
  }
  .study__grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .two-col {
    grid-template-columns: 1fr;
  }
}
</style>
