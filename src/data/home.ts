/** Content for the Home page, mirroring the design's renderVals(). */

export interface Highlight {
  no: string
  title: string
  body: string
}

export interface Project {
  name: string
  tag: string
  summary: string
  detail: string
  tech: string[]
}

export interface SideCard {
  kicker: string
  title: string
  body: string
  to: string
}

export const highlights: Highlight[] = [
  {
    no: '01',
    title: 'Vue 2 → 3 migration',
    body: 'Led the move to Vue 3, TypeScript and Pinia, merging Lobby, Food Services and Tuition into one platform with single sign-on.',
  },
  {
    no: '02',
    title: 'Dynamic form builder',
    body: 'Built a WYSIWYG form engine with multi-page layouts and responsive components — WCAG 2.1 AA compliant, fully unit-tested.',
  },
  {
    no: '03',
    title: 'i18n & accessibility',
    body: 'Replaced hardcoded copy with scalable internationalization (EN, ES + more) and standardized accessible patterns from Figma.',
  },
]

export const edutrakTech: string[] = [
  'Vue 2 & 3',
  'TypeScript',
  'Pinia',
  'Node.js',
  'WCAG 2.1 AA',
  'i18n',
  'CircleCI',
]

export const projects: Project[] = [
  {
    name: 'Monitoring Crimes in St. Paul',
    tag: 'Web Development',
    summary:
      'A single-page app visualizing St. Paul crime data over an interactive map, stitched together from three APIs.',
    detail:
      'A single-page application that pulls St. Paul crime data from three separate REST APIs and layers it onto an interactive Leaflet map. Users can filter incidents by type, date and neighborhood, drop a pin to explore a specific block, and read case details in a side panel. The hardest part was reconciling three inconsistent data sources into one clean, responsive interface.',
    tech: ['JavaScript', 'Leaflet', 'REST API'],
  },
  {
    name: 'Microbialites Database',
    tag: 'Database Design',
    summary:
      'A full-stack tool to read, display and manage a scientific database with clean, friendly CRUD operations.',
    detail:
      "A full-stack tool built to manage a geology research group's microbialite sample database. It supports the full set of CRUD operations behind a friendly UI, so researchers can search, add, edit and remove records without touching SQL. I designed the schema, wrote the query layer against SQLite3, and focused on making a scientific dataset approachable for non-technical users.",
    tech: ['JavaScript', 'SQLite3', 'HTML'],
  },
  {
    name: 'Commit Timeline Dashboard',
    tag: 'Capstone',
    summary:
      'chart.js visualizations of assignment commit timelines, modeled in the controller layer and fully unit-tested.',
    detail:
      'My capstone project: a dashboard that visualizes student assignment commit timelines with chart.js. Commit history is modeled in the controller layer so the views stay thin, and the whole thing is covered by JUnit tests. It gives instructors an at-a-glance view of how and when students work through an assignment.',
    tech: ['Java', 'chart.js', 'JUnit'],
  },
]

export const sideCards: SideCard[] = [
  {
    kicker: 'Research',
    title: 'Graphs, grids & knots',
    body: 'Award-winning work in graph theory and computational topology.',
    to: '/research',
  },
  {
    kicker: 'Education',
    title: 'Two degrees, summa cum laude',
    body: 'CS & Mathematics, plus years of teaching calculus.',
    to: '/education',
  },
  {
    kicker: 'Math',
    title: 'A decade in competitive math',
    body: "Competitor, then coach, now OMEC volunteer — grading, selecting and leading Ecuador's international teams.",
    to: '/olympiad',
  },
]
