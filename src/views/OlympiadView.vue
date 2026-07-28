<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import SectionLabel from '../components/SectionLabel.vue'
import { ongoing, roles } from '../data/olympiad'
</script>

<template>
  <PageHero
    eyebrow="competitive-math"
    title="Twelve years in competitive math"
    title-max-width="20ch"
    lede="It started when I was 13. First as a competitor for Ecuador, then as a coach, and — for the last several years — as a volunteer with OMEC, the organization that runs it all. Three chapters of the same obsession."
    :pad-bottom="44"
  />

  <!-- PHASE 01 · COMPETITOR -->
  <section class="phase phase--first section--muted">
    <SectionLabel number="01" label="competitor" variant="ink" right-text="2014 — 2019" />
    <div class="phase__grid">
      <div>
        <h2 class="phase__title">Where it began</h2>
        <p class="phase__body">
          I started competing at 13 and kept going until I aged out at 18. Over those years I
          represented Ecuador at eight international mathematical olympiads — learning to sit with
          a hard problem for hours, and building the foundation in geometry and number theory that
          everything after was built on.
        </p>
      </div>
      <div class="phase__card">
        <div class="phase__kicker">as a competitor</div>
        <div class="phase__stat">
          <span class="phase__stat-num">8</span>
          <span class="phase__stat-label">international<br />olympiads</span>
        </div>
        <p class="phase__caption">Representing Ecuador abroad between the ages of 13 and 18.</p>
      </div>
    </div>
  </section>

  <!-- PHASE 02 · COACH -->
  <section class="phase section--lavender">
    <SectionLabel number="02" label="coach" variant="accent" right-text="2019 — Present" />
    <div class="phase__grid">
      <div>
        <h2 class="phase__title">Switching sides of the table</h2>
        <p class="phase__body">
          The year I stopped competing, I started teaching. I became a math coach at my high
          school, working with the students walking the path I'd just left — and began helping
          prepare the country's upcoming international delegations. It turns out explaining a hard
          idea clearly is its own kind of problem to solve.
        </p>
      </div>
      <div class="phase__card">
        <div class="phase__kicker">the shift</div>
        <div class="phase__shift-title">Competitor → Coach</div>
        <p class="phase__caption">
          Coaching at my former high school and supporting national-team training.
        </p>
      </div>
    </div>
  </section>

  <!-- PHASE 03 · VOLUNTEER -->
  <section class="phase phase--volunteer section--muted">
    <SectionLabel number="03" label="volunteer · OMEC" variant="ink" right-text="2019 — Present" />
    <p class="phase__intro">
      Since 2019 I've volunteered with OMEC, Ecuador's mathematical olympiad organization, across
      nearly every part of the pipeline — from setting exams to standing on the competition floor
      abroad.
    </p>

    <div class="ongoing">
      <div class="ongoing__kicker">ongoing</div>
      <div class="ongoing__grid">
        <div v-for="o in ongoing" :key="o" class="ongoing__item">
          <span class="ongoing__dot"></span>
          <p class="ongoing__text">{{ o }}</p>
        </div>
      </div>
    </div>

    <div class="roles">
      <article v-for="r in roles" :key="r.role" class="role">
        <div class="role__head">
          <div class="role__head-main">
            <h3 class="role__title">{{ r.role }}</h3>
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
.phase {
  padding: 48px var(--page-pad-x) 50px;
  border-top: 1px solid var(--border);
}
.phase--first {
  margin-top: 40px;
}
.phase--volunteer {
  padding-bottom: 54px;
}
.section--muted {
  background: var(--surface-muted);
}
.section--lavender {
  background: var(--surface-lavender);
}

.phase__grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 40px;
  align-items: start;
}

.phase__title {
  font-weight: 600;
  font-size: 30px;
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: var(--text-heading);
  margin: 0;
}
.phase__body {
  font-weight: 400;
  font-size: 17px;
  line-height: 1.64;
  color: var(--text-body);
  margin: 16px 0 0;
  max-width: 52ch;
}

.phase__card {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 26px 28px;
  box-shadow: 0 1px 3px rgba(20, 22, 26, 0.05);
}
.phase__kicker {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
}
.phase__stat {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-top: 14px;
}
.phase__stat-num {
  font-weight: 700;
  font-size: 52px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--text-heading);
}
.phase__stat-label {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  color: var(--text-body);
}
.phase__shift-title {
  font-weight: 600;
  font-size: 19px;
  line-height: 1.3;
  color: var(--text-heading);
  margin-top: 14px;
  white-space: nowrap;
}
.phase__caption {
  font-weight: 400;
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--text-faint);
  margin: 18px 0 0;
}

.phase__intro {
  font-weight: 400;
  font-size: 17px;
  line-height: 1.62;
  color: var(--text-body);
  margin: 0 0 26px;
  max-width: 74ch;
}

.ongoing {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 28px 32px;
  box-shadow: 0 1px 3px rgba(20, 22, 26, 0.05);
  margin-bottom: 20px;
}
.ongoing__kicker {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 6px;
}
.ongoing__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 34px;
  margin-top: 12px;
}
.ongoing__item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.ongoing__dot {
  flex: none;
  width: 7px;
  height: 7px;
  margin-top: 8px;
  border-radius: 2px;
  background: var(--accent);
}
.ongoing__text {
  font-weight: 400;
  font-size: 15px;
  line-height: 1.55;
  color: var(--text-body);
  margin: 0;
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
  font-size: 23px;
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
  max-width: 82ch;
}
.role__list li {
  margin-bottom: 9px;
}
.role__list li:last-child {
  margin-bottom: 0;
}

@media (max-width: 860px) {
  .phase__grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .ongoing__grid {
    grid-template-columns: 1fr;
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
