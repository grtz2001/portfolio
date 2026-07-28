/** Content for the Projects page. */

export interface Project {
  name: string
  tag: string
  summary: string
  detail: string
  tech: string[]
}

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
