<script setup lang="ts">
/** Rounded lavender pill (honors, award badges). Optional leading star. */
defineProps<{ label: string; star?: boolean }>()
</script>

<template>
  <span class="pill">
    <span v-if="star" class="pill__star">★</span>{{ label }}
  </span>
</template>

<style scoped>
.pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.04em;
  padding: 5px 13px;
  border-radius: 20px;
  background: var(--surface-nav-pill);
  color: var(--accent);
  border: 1px solid var(--accent-soft-border);
}
.pill__star {
  line-height: 1;
}
</style>
