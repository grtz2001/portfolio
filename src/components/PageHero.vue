<script setup lang="ts">
/** Hero used by the inner pages: mono eyebrow, large title, lede. */
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    lede: string
    /** Bottom padding in px (designs vary slightly per page). */
    padBottom?: number
  }>(),
  { padBottom: 50 },
)
</script>

<template>
  <section class="page-hero" :style="{ paddingBottom: `${padBottom}px` }">
    <div class="page-hero__eyebrow"><span class="page-hero__path">~/</span>{{ eyebrow }}</div>
    <h1 class="page-hero__title">{{ title }}</h1>
    <p class="page-hero__lede">{{ lede }}</p>
  </section>
</template>

<style scoped>
.page-hero {
  padding: 60px var(--page-pad-x) 50px;
  background: var(--surface-card);
}

.page-hero__eyebrow {
  font-family: var(--font-mono);
  font-size: 12.5px;
  letter-spacing: 0.06em;
  color: var(--text-faint);
}
.page-hero__path {
  color: var(--accent);
}

.page-hero__title {
  font-weight: 600;
  font-size: 58px;
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: var(--text-heading);
  margin: 20px 0 0;
}

.page-hero__lede {
  font-weight: 400;
  font-size: 19px;
  line-height: 1.6;
  color: var(--text-body);
  margin: 22px 0 0;
  max-width: 70ch;
}

@media (max-width: 720px) {
  .page-hero__title {
    font-size: 40px;
  }
  .page-hero__lede {
    font-size: 17px;
  }
}
</style>
