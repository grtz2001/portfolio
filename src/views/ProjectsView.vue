<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import PageHero from '../components/PageHero.vue'
import { projects, type Project } from '../data/projects'

const active = ref<Project | null>(null)

function openProject(p: Project) {
  active.value = p
}
function closeModal() {
  active.value = null
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeModal()
}

const repoLabel = (repo: string) =>
  repo.includes('gitlab') ? 'view_on_gitlab' : 'view_on_github'

const allTech = computed(() => {
  const set = new Set<string>()
  projects.forEach((p) => p.tech.forEach((t) => set.add(t)))
  return Array.from(set).sort()
})

const activeTech = ref('')

const filteredProjects = computed(() =>
  activeTech.value ? projects.filter((p) => p.tech.includes(activeTech.value)) : projects,
)

type SortOrder = 'featured' | 'newest' | 'oldest'
const sortLabels: Record<SortOrder, string> = {
  featured: 'featured',
  newest: 'newest_first',
  oldest: 'oldest_first',
}
const sortOrder = ref<SortOrder>('featured')

function toggleSort() {
  const next: Record<SortOrder, SortOrder> = { featured: 'newest', newest: 'oldest', oldest: 'featured' }
  sortOrder.value = next[sortOrder.value]
}

const visibleProjects = computed(() => {
  const list = [...filteredProjects.value]
  if (sortOrder.value === 'featured') list.sort((a, b) => a.featured - b.featured)
  else if (sortOrder.value === 'newest') list.sort((a, b) => b.year - a.year)
  else list.sort((a, b) => a.year - b.year)
  return list
})

watch(active, (v) => {
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
  <PageHero
    eyebrow="projects"
    title="Things I've built"
    title-max-width="18ch"
    lede="A mix of coursework, personal builds and AI systems design — from crime-mapping SPAs and scientific databases to React apps and Python recommenders. Each one taught me something about turning messy inputs into interfaces people actually enjoy."
  />

  <section class="projects">
    <div class="projects__controls">
      <select v-model="activeTech" class="filter-select">
        <option value="">all_tech</option>
        <option v-for="t in allTech" :key="t" :value="t">{{ t }}</option>
      </select>
      <button class="sort-toggle" @click="toggleSort">
        {{ sortLabels[sortOrder] }} ↕
      </button>
    </div>

    <div class="projects__grid">
      <article
        v-for="p in visibleProjects"
        :key="p.name"
        class="project"
        role="button"
        tabindex="0"
        :aria-label="`Open details for ${p.name}`"
        @click="openProject(p)"
        @keydown.enter.prevent="openProject(p)"
        @keydown.space.prevent="openProject(p)"
      >
        <div class="project__meta">
          <span class="project__tag">{{ p.tag }}</span>
          <span class="project__year">{{ p.year }}</span>
        </div>
        <h3 class="project__name">{{ p.name }}</h3>
        <p class="project__summary">{{ p.summary }}</p>
        <div class="project__footer">
          <div class="project__tech">
            <span v-for="t in p.tech.slice(0, 3)" :key="t" class="project__tech-item">{{ t }}</span>
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
          <div class="modal__tag">{{ active.tag }} · {{ active.year }}</div>
          <h2 class="modal__title">{{ active.name }}</h2>
          <p class="modal__detail">{{ active.detail }}</p>
          <div class="modal__divider"></div>
          <div class="modal__label">built_with</div>
          <div class="modal__tech">
            <span v-for="t in active.tech" :key="t" class="modal__chip">{{ t }}</span>
          </div>
          <a class="modal__repo" :href="active.repo" target="_blank" rel="noopener">
            {{ repoLabel(active.repo) }} →
          </a>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.projects {
  padding: 48px var(--page-pad-x) 8px;
  background: var(--surface-lavender);
  border-top: 1px solid var(--border);
}

.projects__controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  padding-bottom: 24px;
}

.filter-select {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 5px 30px 5px 12px;
  border: 1px solid var(--border-strong);
  border-radius: 20px;
  color: var(--text-body);
  background: var(--surface-chip);
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%234f46e5' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}
.filter-select:hover {
  border-color: var(--accent);
}

.sort-toggle {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 5px 12px;
  border: 1px solid var(--border-strong);
  border-radius: 20px;
  color: var(--text-body);
  background: var(--surface-chip);
  cursor: pointer;
  white-space: nowrap;
}
.sort-toggle:hover {
  border-color: var(--accent);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-bottom: 60px;
}

.project {
  background: var(--surface-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(20, 22, 26, 0.05);
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

.project__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.project__tag {
  font-family: var(--font-mono);
  font-size: 10.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-faint);
}

.project__year {
  font-family: var(--font-mono);
  font-size: 10.5px;
  color: var(--text-faint);
  white-space: nowrap;
}

.project__name {
  font-weight: 600;
  font-size: 19px;
  line-height: 1.15;
  color: var(--text-heading);
  margin: 9px 0 10px;
}

.project__summary {
  font-weight: 400;
  font-size: 14px;
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

.modal__repo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 26px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  background: var(--surface-ink);
  padding: 11px 18px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;
}
.modal__repo:hover {
  background: #2b2f37;
}
.modal__repo:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
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
