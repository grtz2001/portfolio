/** Content for the Research page. */

export interface Study {
  title: string
  venue: string
  when: string
  award?: string
  question: string
  work: string[]
}

export const studies: Study[] = [
  {
    title: 'Power Domination',
    venue: 'Center for Applied Mathematics · University of St. Thomas',
    when: 'Summer 2023',
    award: 'Outstanding Research Award, Summer 2023',
    question:
      '"Where do you place the fewest sensors to keep watch over an entire power grid?"',
    work: [
      'Modeled electrical grids as hierarchical graph products — paths, cycles, complete, star and bipartite graphs — and studied their power domination number.',
      'Designed and implemented algorithms that minimize the number of phasor measurement units (PMUs) needed for full grid observability, contributing original combinatorial results.',
      'Analyzed the two-step power domination process to find configurations that minimize cost while guaranteeing observability.',
      'Presented the findings formally to Center for Applied Mathematics faculty.',
    ],
  },
  {
    title: 'Computational Topology',
    venue: 'Knot theory in proteins & genomes · University of St. Thomas',
    when: 'Spring 2022',
    question: '"Why do proteins tie themselves in knots — and can we count them?"',
    work: [
      'Contributed to a software project detecting and counting knots in protein and genomic sequences, motivated by the role of misfolding in diseases such as Mad Cow disease and some cancers.',
      'Wrote and tested code to enumerate topological knots in sequential data, supporting inquiry into why knotting persists and how it might be used therapeutically.',
    ],
  },
]

export const interests: string[] = [
  'Combinatorics & graph theory — power domination, network optimization',
  'Computational topology — knot invariants in proteins and genomes',
  'Accessible & internationalized software systems',
  'Algorithmic problem design & mathematical-olympiad pedagogy',
]

export const methods: string[] = [
  'Graph theory',
  'Combinatorics',
  'Network analysis',
  'Knot theory',
  'Abstract algebra',
  'Complexity analysis',
  'Proof writing',
  'Python',
  'C++',
  'LaTeX',
]

export const presentation =
  'Presentation: "Power Domination in Hierarchical Graph Products," to the Center for Applied Mathematics faculty, August 2023.'
