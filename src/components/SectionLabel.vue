<script setup lang="ts">
/** Numbered section header: [NN] section_name ──────── [rightText?] */
withDefaults(
  defineProps<{
    number: string
    label: string
    variant?: 'accent' | 'ink'
    rightText?: string
  }>(),
  { variant: 'accent' },
)
</script>

<template>
  <div class="section-label" :class="`section-label--${variant}`">
    <span class="section-label__badge">{{ number }}</span>
    <span class="section-label__text">{{ label }}</span>
    <span class="section-label__line"></span>
    <span v-if="rightText" class="section-label__right">{{ rightText }}</span>
  </div>
</template>

<style scoped>
.section-label {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.section-label__badge {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}

.section-label__text {
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.section-label__line {
  flex: 1;
  height: 1px;
}

.section-label__right {
  font-family: var(--font-mono);
  font-size: 11.5px;
  color: var(--text-faint);
}

.section-label--accent .section-label__badge {
  background: var(--accent);
}
.section-label--accent .section-label__text {
  color: var(--accent);
}
.section-label--accent .section-label__line {
  background: var(--accent-soft-line);
}

.section-label--ink .section-label__badge {
  background: var(--surface-ink);
}
.section-label--ink .section-label__text {
  color: var(--surface-ink);
}
.section-label--ink .section-label__line {
  background: var(--line);
}
</style>
