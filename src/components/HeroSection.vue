<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
  <section class="hero" id="top">
    <div class="hero__eyebrow">
      <span class="hero__path">~/</span>full-stack-engineer
      <span class="hero__dot">·</span> jersey-city-nj
    </div>
    <h1 class="hero__title">Maria Gratzia Indacochea</h1>
    <p class="hero__lede">
      I design and build accessible, large-scale web platforms — and care a lot
      about the small things that make software feel effortless.
    </p>
    <div class="hero__actions">
      <Button as="a" href="#projects" label="see_the_work()" class="btn btn--primary" unstyled />
      <Button as="a" href="/Gratzia resume.pdf" label="résumé.pdf ↓" class="btn btn--ghost" unstyled />
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 64px var(--page-pad-x) 56px;
  background: var(--surface-card);
}

.hero__eyebrow {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-faint);
}
.hero__path {
  color: var(--accent);
}
.hero__dot {
  color: #c5c9d1;
}

.hero__title {
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 64px;
  line-height: 1.04;
  letter-spacing: -0.025em;
  color: var(--text-heading);
  margin: 22px 0 0;
  max-width: 16ch;
}

.hero__lede {
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  color: var(--text-body);
  margin: 22px 0 0;
  max-width: 54ch;
}

.hero__actions {
  display: flex;
  gap: 14px;
  margin-top: 32px;
  font-family: var(--font-mono);
  font-size: 12.5px;
}

.btn {
  font-family: var(--font-mono);
  font-size: 12.5px;
  padding: 13px 22px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
}
.btn:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.btn--primary {
  background: var(--accent);
  color: #fff;
  font-weight: 600;
  border: none;
}
.btn--primary:hover {
  background: #473fce;
}

.btn--ghost {
  background: #fff;
  color: var(--text-heading);
  border: 1px solid var(--border-strong);
}
.btn--ghost:hover {
  box-shadow: 0 4px 14px rgba(20, 22, 26, 0.08);
}

@media (max-width: 720px) {
  .hero__title {
    font-size: 42px;
  }
  .hero__lede {
    font-size: 17px;
  }
  .hero__actions {
    flex-wrap: wrap;
  }
}
</style>
