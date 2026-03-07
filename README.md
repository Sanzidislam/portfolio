## Sanzid Islam – Portfolio

This is a personal portfolio built with **React** and **Vite**, styled with **Tailwind base** plus a custom CSS layer.
All portfolio text and links are driven by `src/data/content.js` so updates are simple and centralized.

### Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind base layer + custom CSS (`src/index.css`)
- **Tooling**: ESLint, Vite dev server

### Project Structure (key files)

- `src/App.jsx` – main layout and sections (Hero, About, Skills, Projects, Experience, Education, Achievements, Contact)
- `src/data/content.js` – content data for hero, skills, projects, links, and additional sections
- `src/assets/images/profile_picture.jpg` – profile image used in the hero section
- `src/index.css` – custom styles for layout, cards, buttons, gradients, and accessibility enhancements

### Running the project

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`) in your browser.

### Updating content

Edit `src/data/content.js`:

- Update hero text, summary, CTA links, and focus areas
- Add project details including role, impact, links, and technical challenges
- Update experience, education, and achievements sections
- Set your **GitHub**, **LinkedIn**, **email**, location, and availability in `links`
