/** Content for the Olympiad (math) page. */

export interface Role {
  role: string
  org: string
  when: string
  where: string
  points: string[]
}

export const ongoing: string[] = [
  'Grade papers for the National Math Olympiad and team-selection tests — a regular, year-round commitment.',
  "Join OMEC's exam-setting calls to help decide which problems appear on national competitions.",
  "Run and support training sessions for Ecuador's upcoming international delegations.",
]

export const roles: Role[] = [
  {
    role: 'Deputy Leader, National Team',
    org: 'OMEC · EGMO & TJM',
    when: '2019 — Present',
    where: '4 × EGMO · 1 × TJM',
    points: [
      'Served as Deputy Leader for four editions of the European Girls’ Mathematical Olympiad (EGMO) and one TJM, coordinating Ecuador’s delegation on-site and remotely.',
      'Coached national representatives in Geometry and Number Theory in the lead-up to international competitions.',
      'Managed logistics and communication with organizers, guiding students through every stage of the event.',
    ],
  },
  {
    role: 'Problem Coordinator — Problem 4',
    org: "Pan-American Girls' Mathematical Olympiad (PAGMO)",
    when: '2021 & 2022',
    where: 'First two editions · Remote',
    points: [
      'Coordinated Problem 4 for the inaugural two editions of PAGMO, an international competition for girls.',
      'Authored complete solutions and detailed marking schemes, setting rigorous, consistent grading criteria for an international field.',
      'Graded every Problem 4 submission and ran coordination meetings with team leaders to finalize scores and adjudicate appeals.',
    ],
  },
]
