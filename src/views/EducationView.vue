<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PageHero from '../components/PageHero.vue'
import SectionLabel from '../components/SectionLabel.vue'
import TechChip from '../components/TechChip.vue'
import AccentPill from '../components/AccentPill.vue'
import { honors, csCourses, mathCourses, certs } from '../data/education'
</script>

<template>
  <PageHero
    eyebrow="education-&-teaching"
    title="Two degrees, both loved"
    lede="I studied computer science and mathematics side by side, graduated summa cum laude, and spent two years teaching calculus to the students coming up behind me."
  />

  <!-- DEGREE -->
  <section class="section section--muted">
    <SectionLabel number="01" label="degree" variant="accent" />
    <div class="card card--accent">
      <div class="card__head">
        <div class="card__head-main">
          <h2 class="card__title">B.S. Computer Science · B.A. Mathematics</h2>
          <span class="card__sub">University of St. Thomas · St. Paul, MN</span>
        </div>
        <span class="card__when">May 2024</span>
      </div>
      <div class="card__pills">
        <AccentPill v-for="h in honors" :key="h" :label="h" />
      </div>
    </div>
  </section>

  <!-- COURSEWORK -->
  <section class="section section--lavender">
    <SectionLabel number="02" label="coursework" variant="ink" />
    <div class="two-col">
      <div class="panel">
        <span class="panel__kicker">computer_science</span>
        <div class="panel__chips">
          <TechChip v-for="c in csCourses" :key="c" :label="c" />
        </div>
      </div>
      <div class="panel">
        <span class="panel__kicker">mathematics</span>
        <div class="panel__chips">
          <TechChip v-for="c in mathCourses" :key="c" :label="c" />
        </div>
      </div>
    </div>
  </section>

  <!-- TEACHING -->
  <section class="section section--muted">
    <SectionLabel number="03" label="teaching" variant="accent" />
    <article class="card">
      <div class="card__head">
        <div class="card__head-main">
          <h3 class="card__title card__title--sm">
            Teaching Assistant & Mathematics Tutor
          </h3>
          <span class="card__sub">Dept. of Mathematics · University of St. Thomas</span>
        </div>
        <span class="card__when">Sep 2022 — May 2024</span>
      </div>
      <ul class="card__list">
        <li>
          Taught Pre-Calculus through Multivariable Calculus, adapting
          explanations to each learner and leading structured group sessions that
          drove measurable grade gains.
        </li>
        <li>
          Gave detailed written feedback on coursework for 90+ students across
          three sections of Calculus I & II, keeping evaluation consistent and
          fair.
        </li>
      </ul>
    </article>
  </section>

  <!-- CERTS + AFFILIATIONS -->
  <section class="section section--lavender">
    <SectionLabel number="04" label="certs_&_affiliations" variant="ink" />
    <div class="two-col two-col--13">
      <div class="panel">
        <h3 class="panel__title">Certifications & continued learning</h3>
        <ul class="certs">
          <li v-for="c in certs" :key="c.name" class="cert">
            <span class="cert__name">{{ c.name }}</span>
            <span class="cert__when">{{ c.when }}</span>
          </li>
        </ul>
      </div>
      <div class="panel">
        <h3 class="panel__title">Affiliations</h3>
        <p class="affil">
          <strong>Rewriting the Code & Latinas of RTC</strong> — active member
          since 2023.
        </p>
        <p class="affil">
          <strong>Ecuadorian Mathematical Organization (OMEC)</strong> —
          volunteer since 2019.
          <RouterLink to="/olympiad" class="affil__link">See the olympiad work →</RouterLink>
        </p>
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
}
.section--lavender:last-child {
  padding-bottom: 56px;
}

.card {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 32px 34px;
  box-shadow: 0 1px 3px rgba(20, 22, 26, 0.05);
}
.card--accent {
  border-left: 4px solid var(--accent);
}

.card__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 18px;
}
.card__head-main {
  min-width: 0;
}
.card__title {
  font-weight: 600;
  font-size: 25px;
  letter-spacing: -0.01em;
  color: var(--text-heading);
  margin: 0;
}
.card__title--sm {
  font-size: 21px;
}
.card__sub {
  display: block;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent);
  margin-top: 6px;
}
.card__when {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-faint);
  white-space: nowrap;
  flex: none;
}

.card__pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
}

.card__list {
  margin: 16px 0 0;
  padding-left: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62;
  color: var(--text-body);
  max-width: 80ch;
}
.card__list li {
  margin-bottom: 9px;
}
.card__list li:last-child {
  margin-bottom: 0;
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.two-col--13 {
  grid-template-columns: 1.3fr 1fr;
}

.panel {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 26px;
}
.panel__kicker {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}
.panel__title {
  font-weight: 600;
  font-size: 18px;
  color: var(--text-heading);
  margin: 0 0 18px;
}
.panel__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 16px;
}

.certs {
  margin: 0;
  padding: 0;
  list-style: none;
}
.cert {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  border-bottom: 1px solid #eef0f3;
  padding: 12px 0;
}
.cert:last-child {
  border-bottom: none;
}
.cert__name {
  font-weight: 400;
  font-size: 15px;
  color: var(--text-body);
}
.cert__when {
  font-family: var(--font-mono);
  font-size: 11.5px;
  color: var(--text-faint);
  white-space: nowrap;
  flex: none;
}

.affil {
  font-weight: 400;
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-body);
  margin: 0 0 14px;
}
.affil:last-child {
  margin-bottom: 0;
}
.affil strong {
  font-weight: 600;
  color: var(--text-heading);
}
.affil__link {
  color: var(--accent);
  text-decoration: none;
}
.affil__link:hover {
  text-decoration: underline;
}

@media (max-width: 720px) {
  .card {
    padding: 26px 22px;
  }
  .card__head {
    flex-direction: column;
    gap: 6px;
  }
  .two-col,
  .two-col--13 {
    grid-template-columns: 1fr;
  }
}
</style>
