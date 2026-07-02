<script setup lang="ts">
import { socialLinks } from '../data/site'

withDefaults(
  defineProps<{ text?: string }>(),
  {
    text: 'Open to full-stack and research-adjacent roles, and open to relocation.',
  },
)
</script>

<template>
  <footer class="footer">
    <div class="footer__pitch">
      <div class="footer__title">Let's talk.</div>
      <p class="footer__text">{{ text }}</p>
    </div>
    <div class="footer__links">
      <a
        v-for="link in socialLinks"
        :key="link.href"
        :href="link.href"
        class="footer__link"
        :class="{ 'footer__link--accent': link.accent }"
      >
        {{ link.label }}
      </a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 54px var(--page-pad-x);
  background: var(--surface-ink);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.footer__title {
  font-weight: 600;
  font-size: 42px;
  letter-spacing: -0.02em;
  color: var(--text-on-ink);
}

.footer__text {
  font-weight: 400;
  font-size: 15.5px;
  color: var(--text-on-ink-muted);
  margin: 10px 0 0;
  max-width: 44ch;
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 12.5px;
}

.footer__link {
  color: var(--text-on-ink-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.footer__link:hover {
  color: var(--text-on-ink);
}
.footer__link--accent {
  color: var(--accent-on-ink);
}
.footer__link--accent:hover {
  color: #c4c0ff;
}

@media (max-width: 720px) {
  .footer__title {
    font-size: 32px;
  }
}
</style>
