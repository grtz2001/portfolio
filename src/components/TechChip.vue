<script setup lang="ts">
/** Small monospace bordered chip used for tech / methods / coursework. */
defineProps<{ label: string }>()
</script>

<template>
  <span class="chip">{{ label }}</span>
</template>

<style scoped>
.chip {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 4px 11px;
  border: 1px solid var(--border-strong);
  border-radius: 6px;
  color: var(--text-body);
  background: var(--surface-chip);
}
</style>
