/** Content for the Olympiad page. */

export interface Stat {
  num: string
  label: string
}

export interface Role {
  role: string
  org: string
  when: string
  where: string
  points: string[]
}

export const stats: Stat[] = [
  { num: '7', label: 'years with OMEC' },
  { num: '4', label: 'EGMO editions' },
  { num: '2', label: 'PAGMO editions coordinated' },
  { num: '123', label: 'Problem 4 scripts graded' },
]

export const roles: Role[] = [
  {
    role: 'Deputy Leader, Ecuadorian National Team',
    org: 'Ecuadorian Mathematical Organization (OMEC)',
    when: '2019 — Present',
    where: 'EGMO 2020, 2021, 2022 · EGMO 2026 (Bordeaux, France) · Remote',
    points: [
      "Lead selection, training and international coordination of Ecuador's team at the European Girls' Mathematical Olympiad (EGMO).",
      'Coach national representatives in Geometry and Number Theory ahead of international competitions including the IMO and EGMO.',
      "Oversee end-to-end logistics for Ecuador's National Math Olympiad — exam coordination, grading and candidate evaluation at scale.",
    ],
  },
  {
    role: 'Problem Coordinator — Problem 4',
    org: "Pan-American Girls' Mathematical Olympiad (PAGMO)",
    when: '2021 & 2022',
    where: '1st Edition (Number Theory, 2021) · 2nd Edition (Geometry, 2022) · Remote',
    points: [
      'Served on the three-person coordination committee for Problem 4 across both editions of PAGMO, an international competition for girls.',
      'Authored complete solutions and detailed marking schemes, setting rigorous, consistent grading criteria for an international field.',
      'Graded every Problem 4 submission (59 in 2021, 64 in 2022) and ran coordination meetings with team leaders to finalize scores and adjudicate appeals.',
    ],
  },
]
