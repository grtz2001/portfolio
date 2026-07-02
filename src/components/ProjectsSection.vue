<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import SectionLabel from './SectionLabel.vue'
import { projects } from '../data/home'

const open = ref<number | null>(null)
const active = computed(() => (open.value == null ? null : projects[open.value]))

function openProject(i: number) {
  open.value = i
}
function closeModal() {
  open.value = null
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeModal()
}

watch(open, (v) => {
  if (v != null) {
    window.addEventListener('keydown', onKeydown)
    document.body.style.overflow = 'hidden'
  } else {
    window.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = ''
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section id="projects" class="projects">
    <SectionLabel number="02" label="selected_projects" variant="ink" />
    <div class="projects__grid">
      <article
        v-for="(p, i) in projects"
        :key="p.name"
        class="project"
        role="button"
        tabindex="0"
        :aria-label="`Open details for ${p.name}`"
        @click="openProject(i)"
        @keydown.enter.prevent="openProject(i)"
        @keydown.space.prevent="openProject(i)"
      >
        <div class="project__tag">{{ p.tag }}</div>
        <h3 class="project__name">{{ p.name }}</h3>
        <p class="project__summary">{{ p.summary }}</p>
        <div class="project__footer">
          <div class="project__tech">
            <span v-for="t in p.tech" :key="t" class="project__tech-item">{{ t }}</span>
          </div>
          <span class="project__open">open →</span>
        </div>
      </article>
    </div>

    <Teleport to="body">
      <div v-if="active" class="modal" @click="closeModal">
        <div
          class="modal__panel"
          role="dialog"
          aria-modal="true"
          :aria-label="active.name"
          @click.stop
        >
          <button class="modal__close" aria-label="Close" @click="closeModal">×</button>
          <div class="modal__tag">{{ active.tag }}</div>
          <h2 class="modal__title">{{ active.name }}</h2>
          <p class="modal__detail">{{ active.detail }}</p>
          <div class="modal__divider"></div>
          <div class="modal__label">built_with</div>
          <div class="modal__tech">
            <span v-for="t in active.tech" :key="t" class="modal__chip">{{ t }}</span>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.projects {
  padding: 46px var(--page-pad-x) 52px;
  background: var(--surface-muted);
  border-top: 1px solid var(--border);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.project {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
}
.project:hover {
  box-shadow: 0 8px 24px rgba(79, 70, 229, 0.13);
  transform: translateY(-3px);
}
.project:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.project__tag {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-faint);
}

.project__name {
  font-weight: 600;
  font-size: 20px;
  line-height: 1.15;
  color: var(--text-heading);
  margin: 9px 0 10px;
}

.project__summary {
  font-weight: 400;
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0 0 16px;
  flex: 1;
}

.project__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.project__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.project__tech-item {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--accent);
}

.project__open {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent);
  white-space: nowrap;
}

/* Modal */
.modal {
  position: fixed;
  inset: 0;
  z-index: 60;
  background: rgba(20, 22, 26, 0.55);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}

.modal__panel {
  position: relative;
  width: 100%;
  max-width: 600px;
  max-height: 84vh;
  overflow: auto;
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: 0 24px 70px rgba(20, 22, 26, 0.35);
  padding: 40px 44px;
}

.modal__close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 34px;
  height: 34px;
  border: 1px solid var(--border);
  background: var(--surface-muted);
  border-radius: 9px;
  cursor: pointer;
  font-size: 19px;
  line-height: 1;
  color: var(--text-body);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal__close:hover {
  color: var(--text-heading);
}

.modal__tag {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}

.modal__title {
  font-weight: 600;
  font-size: 27px;
  line-height: 1.16;
  letter-spacing: -0.02em;
  color: var(--text-heading);
  margin: 11px 0 0;
  max-width: 24ch;
}

.modal__detail {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.64;
  color: var(--text-body);
  margin: 20px 0 0;
}

.modal__divider {
  height: 1px;
  background: var(--surface-page);
  margin: 26px 0;
}

.modal__label {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 12px;
}

.modal__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
.modal__chip {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 4px 11px;
  border: 1px solid var(--border-strong);
  border-radius: 6px;
  color: var(--text-body);
  background: var(--surface-chip);
}

@media (max-width: 960px) {
  .projects__grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 640px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
  .modal__panel {
    padding: 32px 24px;
  }
}
</style>
