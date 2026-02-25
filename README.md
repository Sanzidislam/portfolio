## Sanzid Islam – Portfolio

This is a personal portfolio built with **React** and **Vite**, styled with **Tailwind base** plus a small set of custom CSS classes.  
All content (introduction, skills, projects, education, links) is driven from a data file so it is easy to update without touching components.

### Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind base layer + custom CSS (`src/index.css`)
- **Tooling**: ESLint, Vite dev server

### Project Structure (key files)

- `src/App.jsx` – main layout and sections (Hero, About, Skills, Projects, Education, Contact)
- `src/data/content.js` – data for text content, skills, projects, education, and links
- `src/assets/images/profile_picture.jpg` – profile image used in the hero section
- `src/index.css` – minimal, custom CSS for layout, glassmorphism cards, and gradients

### Running the project

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`) in your browser.

### Updating content

Edit `src/data/content.js`:

- Update hero text, about paragraphs, skills, and project descriptions
- Set your **GitHub**, **LinkedIn**, and **email** in the `links` export
- Edit `expectedGraduation` under `education` to your real graduation year

To change the look and feel (colors, gradients, card effects), adjust the `.portfolio-*` classes in `src/index.css`.
