import profileImage from './assets/images/profile_picture.jpg';
import {
  sections,
  hero,
  about,
  skills,
  projects,
  education,
  links,
} from './data/content';

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <nav className="portfolio-nav">
        <div className="portfolio-nav-left">
          <span className="portfolio-logo">{hero.name}</span>
        </div>
        <div className="portfolio-nav-links">
          {sections.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <main className="portfolio-main">
        <section className="portfolio-hero">
          <div className="portfolio-hero-text">
            <p className="portfolio-hero-kicker">
              {hero.kicker}
            </p>
            <h1 className="portfolio-hero-title">
              Hi, I&apos;m {hero.name}
            </h1>
            <p className="portfolio-hero-subtitle">{hero.subtitle}</p>
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
                <ul className="portfolio-list">
                  {category.items.map((item) => (
                    <li key={item} className="portfolio-list-item">
                      {item}
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
                <p className="portfolio-card-text">{project.description}</p>
                <div className="portfolio-card-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="portfolio-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id={education.id} className="portfolio-section">
          <h2 className="portfolio-section-title">{education.title}</h2>
          <div className="portfolio-education">
            <h3 className="portfolio-card-title">{education.degree}</h3>
            <p className="portfolio-paragraph">{education.institution}</p>
            <p className="portfolio-paragraph">
              {education.expectedGraduation}
            </p>
          </div>
        </section>

        <section id="contact" className="portfolio-section portfolio-contact">
          <h2 className="portfolio-section-title">Contact</h2>
          <p className="portfolio-paragraph portfolio-contact-text">
            If you would like to get in touch regarding projects, collaboration,
            or opportunities, feel free to reach out.
          </p>
          <div className="portfolio-contact-links">
            {links.email && (
              <a href={`mailto:${links.email}`} className="portfolio-link">
                Email
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                className="portfolio-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}
            {links.linkedin && (
              <a
                href={links.linkedin}
                className="portfolio-link"
                target="_blank"
                rel="noreferrer"
              >
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
