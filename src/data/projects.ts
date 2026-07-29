/** Content for the Projects page. */

export interface Project {
  name: string
  tag: string
  summary: string
  detail: string
  tech: string[]
  repo: string
}

export const projects: Project[] = [
  {
    name: 'Monitoring Crimes in St. Paul',
    tag: 'Web Dev · CISC 375',
    summary:
      'A single-page app that maps St. Paul crime data, stitched together from three separate data sources.',
    detail:
      'A single-page application that visualizes St. Paul crime data on an interactive Leaflet map. It layers together three sources — Leaflet for the map, Nominatim for geocoding, and a custom RESTful server serving records from the St. Paul crime SQLite database. Users can filter incidents, explore specific locations, and read case details. The core challenge was reconciling three inconsistent data sources into one clean, responsive interface.',
    tech: ['Vue', 'JavaScript', 'Leaflet', 'Nominatim', 'REST API', 'SQLite3', 'Node.js'],
    repo: 'https://github.com/inda4434/webdev-rest',
  },
  {
    name: 'Microbialites Database',
    tag: 'Database Design · CISC 450',
    summary:
      'A full-stack tool to collect, display and manage a geology research database with clean CRUD operations.',
    detail:
      'A semester-long full-stack project built in collaboration with Dr. Hickson from the Geology department to house his research on microbialite formations in Nevada. The work involved normalizing the scientific database and building a web interface for researchers to enter and browse data — covering macrostructure, mesostructure, thin sections, waypoints, research logs, and employee records. Backed by a SQLite database with a multi-page HTML/JavaScript front end and login.',
    tech: ['JavaScript', 'SQLite3', 'HTML', 'Node.js'],
    repo: 'https://github.com/inda4434/Microbialite-Website',
  },
  {
    name: 'Global Power Plant Explorer',
    tag: 'Web Dev · CISC 375',
    summary:
      'A dynamic server that filters a worldwide power-plant database and rebuilds the results table on the fly.',
    detail:
      'A Node dynamic-server web app built over a global power-plant database. The tables populate dynamically as users filter and search — by country, estimated energy generation, capacity, and fuel type — pulling from SQLite and CSV data sources on the server side. A study in server-side rendering and turning a raw scientific dataset into a filterable, browsable interface.',
    tech: ['JavaScript', 'Node.js', 'SQLite3', 'HTML'],
    repo: 'https://github.com/inda4434/webdev-dynamic',
  },
  {
    name: 'Commit Timeline Dashboard',
    tag: 'Capstone · CISC 480',
    summary:
      'chart.js visualizations of student commit activity over time, built in the controller layer and fully unit-tested.',
    detail:
      'Part of Codesmell, a team-built Spring MVC course platform that tracks students’ unit-test executions and commit history. My contribution was the commit-timeline dashboard: controller-layer methods that query the database for each assignment’s commit data, map it by date and committer, and serve it as JSON to a chart.js front end. The logic is covered by a JUnit test suite spanning access control, authentication, and null/empty-data edge cases — a study in clean controller design and test-driven development over real version-control data.',
    tech: ['Java', 'Spring MVC', 'Hibernate', 'chart.js', 'JavaScript', 'JUnit', 'JSP'],
    repo: 'https://gitlab.codesmell.org/ust/root',
  },
  {
    name: 'Receipt Processor Challenge',
    tag: 'Coding Challenge',
    summary:
      'A take-home API challenge (Fetch Rewards) that processes receipts and awards points by a set of rules.',
    detail:
      'A solution to the Fetch Rewards receipt-processor take-home: a small web service that accepts a receipt, applies a set of point-scoring rules, and returns the points earned. A focused exercise in building a spec-driven REST API.',
    tech: ['REST API'],
    repo: 'https://github.com/inda4434/receipt-processor-challenge',
  },
  {
    name: 'Study Squad (Crewmates)',
    tag: 'Web Development',
    summary:
      'Build your own study-buddy squad — a full CRUD app with a persistent database backend.',
    detail:
      'A React app where users assemble a "study squad" by creating crewmates with custom names and attributes. It supports the full create/read/update/delete lifecycle: a form to add crewmates, a summary page sorted by newest, and edit/delete on each entry. Data persists through a Supabase backend, with client-side routing between the create, summary, and edit views.',
    tech: ['React', 'React Router', 'Supabase', 'Vite'],
    repo: 'https://github.com/grtz2001/crewmates',
  },
  {
    name: 'Bored Dashboard',
    tag: 'Data Visualization',
    summary:
      'A dashboard for exploring things to do when you’re bored, with charts and drill-down detail pages.',
    detail:
      'A React dashboard that surfaces activities to try when bored. It pairs a list/dashboard view with detail pages — each item has its own unique, shareable URL — and a persistent sidebar across views. Recharts powers the data-visualization layer that summarizes the activity data. A good example of turning an open dataset into a browsable, visual interface.',
    tech: ['React', 'React Router', 'Recharts', 'Vite'],
    repo: 'https://github.com/grtz2001/bored-dashboard',
  },
  {
    name: 'Vidi — Movie Discovery',
    tag: 'Web Development',
    summary:
      'Discover new movies by genre, language and runtime — keep the ones you like, ban the ones you don’t.',
    detail:
      'A React discovery app that surfaces a new movie each time based on attributes like genre, language, and duration, pulling from an external movie API. Users curate their experience by banning attributes they’re not interested in, so results narrow toward their taste. Deployed on Netlify with environment-based API key handling.',
    tech: ['React', 'REST API', 'Vite', 'Netlify'],
    repo: 'https://github.com/grtz2001/veni-vici',
  },
  {
    name: 'Learn Spanish Flashcards',
    tag: 'Web Development',
    summary:
      'An interactive flashcard app for learning Spanish, with guess-checking and card flipping.',
    detail:
      'A React flashcard app for practicing Spanish vocabulary. Users type a guess before flipping each card and get visual feedback on whether they were right, with the deck organized into components, data, and utility helpers. A clean example of state handling and interactive study UX.',
    tech: ['React', 'Vite'],
    repo: 'https://github.com/grtz2001/flashcards',
  },
  {
    name: 'Ecuador World Cup Community Board',
    tag: 'Web Development',
    summary:
      'A community board covering Ecuador’s World Cup run — post, browse and discuss.',
    detail:
      'A React community-board app themed around Ecuador’s participation in the World Cup, where users can create and browse posts. Built as the foundational project in the web development track, covering post creation and a feed-style listing view.',
    tech: ['React', 'Vite'],
    repo: 'https://github.com/grtz2001/web102',
  },
  {
    name: 'Music Recommender Simulation',
    tag: 'AI / Systems Design',
    summary: 'A small music recommender that scores songs against a user’s taste profile.',
    detail:
      'A Python recommender that represents songs and a user "taste profile" as data, then scores each song by how closely it matches. Numeric features (energy, valence, danceability) score by closeness while genre and mood are exact matches; scores are averaged, sorted, and the top picks returned. Includes reflection on what the system gets right and wrong and how it mirrors real-world recommenders.',
    tech: ['Python'],
    repo: 'https://github.com/grtz2001/ai110-module3show-musicrecommendersimulation-starter',
  },
  {
    name: 'PawPal+',
    tag: 'AI / Systems Design',
    summary:
      'A Streamlit assistant that builds a daily pet-care plan from tasks, priorities and constraints.',
    detail:
      'A Streamlit app that helps a pet owner stay consistent with care. Users enter owner and pet info and add tasks with durations and priorities; the app generates a daily schedule based on constraints and explains its reasoning. Built design-first — UML, then Python logic, then UI — with tests over the core scheduling behavior.',
    tech: ['Python', 'Streamlit'],
    repo: 'https://github.com/grtz2001/ai110-module2show-pawpal-starter',
  },
  {
    name: 'Game Glitch Investigator',
    tag: 'AI / Debugging',
    summary:
      'A debugging challenge — track down and fix state and logic bugs in a broken Streamlit guessing game.',
    detail:
      'A Python/Streamlit exercise centered on diagnosing a broken number-guessing game: the secret number resets on every click and the higher/lower hints lie. The work is finding the Streamlit session-state bug, fixing the comparison logic, and restoring correct game behavior — a focused study in state management and debugging.',
    tech: ['Python', 'Streamlit'],
    repo: 'https://github.com/grtz2001/ai110-module1show-gameglitchinvestigator-starter',
  },
]
