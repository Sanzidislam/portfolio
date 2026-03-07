import { useEffect, useState } from 'react';
import profileImage from './assets/images/profile_picture.jpg';
import {
  sections,
  hero,
  about,
  skills,
  projects,
  experience,
  education,
  achievements,
  links,
} from './data/content';

const iconByName = {
  C: 'https://cdn.simpleicons.org/c',
  'C++': 'https://cdn.simpleicons.org/cplusplus',
  Java: 'https://cdn.simpleicons.org/openjdk',
  Python: 'https://cdn.simpleicons.org/python',
  JavaScript: 'https://cdn.simpleicons.org/javascript',
  SQL: 'https://cdn.simpleicons.org/mysql',
  React: 'https://cdn.simpleicons.org/react',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs',
  'Express.js': 'https://cdn.simpleicons.org/express',
  Flutter: 'https://cdn.simpleicons.org/flutter',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss',
  MySQL: 'https://cdn.simpleicons.org/mysql',
  Oracle: 'https://cdn.simpleicons.org/oracle',
  Git: 'https://cdn.simpleicons.org/git',
  GitHub: 'https://cdn.simpleicons.org/github',
  Linux: 'https://cdn.simpleicons.org/linux',
  'VS Code': 'https://cdn.simpleicons.org/visualstudiocode',
  'MySQL Workbench': 'https://cdn.simpleicons.org/mysql',
  'Firebase Authentication': 'https://cdn.simpleicons.org/firebase',
  'Linux system programming': 'https://cdn.simpleicons.org/linux',
};

function TechIcon({ name }) {
  const src = iconByName[name];
  if (!src) return null;

  return <img src={src} alt="" aria-hidden="true" className="portfolio-tech-icon" />;
}

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState(sections.nav[0]?.id ?? '');

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const mostVisible = visible.reduce((current, entry) =>
          entry.intersectionRatio > current.intersectionRatio ? entry : current,
        );

        setActiveSection(mostVisible.target.id);
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: '0px 0px -55% 0px',
      },
    );

    sections.nav.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`app-root app-root-${theme}`}>
      <nav className="portfolio-nav">
        <div className="portfolio-nav-left">
          <span className="portfolio-logo">{hero.name}</span>
        </div>
        <div className="portfolio-nav-right">
          <div className="portfolio-nav-links">
            {sections.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`portfolio-nav-link${
                  activeSection === item.id ? ' portfolio-nav-link-active' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="theme-icon-button"
            onClick={toggleTheme}
            aria-label="Toggle color mode"
          >
            <span className="theme-icon-button-inner">
              {theme === 'dark' ? '☾' : '☀'}
            </span>
          </button>
        </div>
      </nav>

      <main className="portfolio-main">
        <section className="portfolio-hero">
          <div className="portfolio-hero-text">
            <p className="portfolio-hero-kicker">{hero.kicker}</p>
            <h1 className="portfolio-hero-title">Hi, I&apos;m {hero.name}</h1>
            <p className="portfolio-hero-subtitle">{hero.subtitle}</p>
            <p className="portfolio-paragraph">{hero.summary}</p>
            <div className="portfolio-hero-actions">
              <a className="portfolio-link portfolio-cta-primary" href={hero.cta.resumeUrl}>
                Download CV
              </a>
              <a className="portfolio-link portfolio-cta-secondary" href={hero.cta.projectsHref}>
                View Projects
              </a>
            </div>
            <div className="portfolio-hero-tags">
              {hero.focusAreas.map((area) => (
                <span key={area} className="portfolio-tag">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="portfolio-hero-image-wrapper">
            <img
              src={profileImage}
              alt={`${hero.name} profile`}
              className="portfolio-hero-image"
            />
          </div>
        </section>

        <section id={about.id} className="portfolio-section">
          <h2 className="portfolio-section-title">{about.title}</h2>
          <div className="portfolio-section-body">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="portfolio-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section id={skills.id} className="portfolio-section">
          <h2 className="portfolio-section-title">{skills.title}</h2>
          <div className="portfolio-grid">
            {skills.categories.map((category) => (
              <div key={category.label} className="portfolio-card">
                <h3 className="portfolio-card-title">{category.label}</h3>
                <ul className="portfolio-card-tags">
                  {category.items.map((item) => (
                    <li key={item} className="portfolio-tag">
                      <TechIcon name={item} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id={projects.id} className="portfolio-section">
          <h2 className="portfolio-section-title">{projects.title}</h2>
          <div className="portfolio-grid">
            {projects.items.map((project) => (
              <article key={project.name} className="portfolio-card">
                <h3 className="portfolio-card-title">{project.name}</h3>
                <p className="portfolio-card-text portfolio-card-role">{project.role}</p>
                <p className="portfolio-card-text">{project.description}</p>
                <p className="portfolio-card-text">{project.impact}</p>
                <ul className="portfolio-list">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="portfolio-list-item">
                      {challenge}
                    </li>
                  ))}
                </ul>
                <div className="portfolio-card-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="portfolio-tag">
                      <TechIcon name={tech} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
                <div className="portfolio-project-links">
                  <a href={project.demoUrl} className="portfolio-link portfolio-link-external">
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    className="portfolio-link portfolio-link-muted portfolio-link-external"
                  >
                    Source Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id={experience.id} className="portfolio-section">
          <h2 className="portfolio-section-title">{experience.title}</h2>
          <div className="portfolio-section-body">
            {experience.items.map((item) => (
              <article key={`${item.role}-${item.organization}`} className="portfolio-card">
                <h3 className="portfolio-card-title">{item.role}</h3>
                <p className="portfolio-card-text">{item.organization}</p>
                <p className="portfolio-card-text">{item.period}</p>
                <ul className="portfolio-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="portfolio-list-item">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id={education.id} className="portfolio-section">
          <h2 className="portfolio-section-title">{education.title}</h2>
          <div className="portfolio-education">
            <h3 className="portfolio-card-title">{education.degree}</h3>
            <p className="portfolio-paragraph">{education.institution}</p>
            <p className="portfolio-paragraph">{education.expectedGraduation}</p>
          </div>
        </section>

        <section id={achievements.id} className="portfolio-section">
          <h2 className="portfolio-section-title">{achievements.title}</h2>
          <ul className="portfolio-list">
            {achievements.items.map((achievement) => (
              <li key={achievement} className="portfolio-list-item">
                {achievement}
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="portfolio-section portfolio-contact">
          <h2 className="portfolio-section-title">Contact</h2>
          <p className="portfolio-paragraph portfolio-contact-text">
            If you would like to get in touch regarding projects, collaboration,
            or opportunities, feel free to reach out.
          </p>
          <p className="portfolio-paragraph">
            {links.location} · {links.availability}
          </p>
          <div className="portfolio-contact-links">
            {links.email && (
              <a href={`mailto:${links.email}`} className="portfolio-link">
                <img
                  src="https://cdn.simpleicons.org/gmail"
                  alt=""
                  aria-hidden="true"
                  className="portfolio-tech-icon"
                />
                Email
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                className="portfolio-link portfolio-link-external"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.simpleicons.org/github"
                  alt=""
                  aria-hidden="true"
                  className="portfolio-tech-icon"
                />
                GitHub
              </a>
            )}
            {links.linkedin && (
              <a
                href={links.linkedin}
                className="portfolio-link portfolio-link-external"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.simpleicons.org/linkedin"
                  alt=""
                  aria-hidden="true"
                  className="portfolio-tech-icon"
                />
                LinkedIn
              </a>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
