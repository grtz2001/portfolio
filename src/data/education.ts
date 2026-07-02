/** Content for the Education page. */

export interface Cert {
  name: string
  when: string
}

export const honors: string[] = [
  'Summa Cum Laude',
  'Aquinas Scholar',
  "Dean's List · all semesters",
  'GPA 3.91 / 4.00',
]

export const csCourses: string[] = [
  'Data Structures',
  'Algorithms',
  'Operating Systems',
  'Computer Architecture',
  'Information Security',
  'Web Development',
  'AI & Robotics',
  'Database Design',
]

export const mathCourses: string[] = [
  'Calculus I–III',
  'Linear Algebra',
  'Abstract Algebra',
  'Discrete Mathematics',
  'Statistics & Applied Science',
  'Geometry',
  'Intro to Applied Mathematics',
]

export const certs: Cert[] = [
  { name: 'Architecting with Google Compute Engine — Coursera Specialization', when: 'Sep 2021' },
  { name: 'Intro to Cybersecurity — CodePath', when: 'Sep–Nov 2023' },
  { name: 'Intro to Web Development — CodePath', when: 'Sep–Nov 2023' },
  { name: 'Ace the Interview Bootcamp — Goldman Sachs × Rewriting the Code', when: 'Feb–May 2023' },
  { name: 'Leadership Academy: Advancing Students in Tech & Engineering', when: 'Summer 2022' },
]
