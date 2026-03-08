export const sections = {
  nav: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ],
};

export const hero = {
  name: 'Sanzid Islam Mahi',
  title: 'Computer Science & Engineering Student',
  kicker: 'Computer Science & Engineering · University of Chittagong',
  subtitle:
    'I build practical software systems and explore how intelligent algorithms solve real-world problems.',
  summary:
    'I am currently open to software engineering and full-stack development internship opportunities where I can contribute to production-ready applications.',
  focusAreas: [
    'Software Engineering',
    'Full Stack Development',
    'Computer Vision',
  ],
  cta: {
    resumeUrl: '#',
    projectsHref: '#projects',
  },
};

export const about = {
  id: 'about',
  title: 'About Me',
  paragraphs: [
    'I am a Computer Science and Engineering student at the University of Chittagong with a strong interest in software engineering and computer vision. I enjoy building practical software systems and exploring how intelligent algorithms can be applied to real-world problems.',
    'My work mainly focuses on full-stack web development, database design, and computer vision applications. I like designing structured and efficient software systems and learning new technologies through hands-on projects.',
    'Recently, I have been focusing on computer vision and machine learning techniques. I am comfortable working in Linux environments and enjoy building tools and systems from scratch.',
  ],
};

export const skills = {
  id: 'skills',
  title: 'Skills',
  categories: [
    {
      label: 'Programming Languages',
      items: ['C++', 'Java', 'Python', 'JavaScript', 'SQL'],
    },
    {
      label: 'Frameworks & Technologies',
      items: ['React', 'Node.js', 'Express.js', 'Flutter', 'Tailwind CSS'],
    },
    {
      label: 'Databases',
      items: ['MySQL', 'Oracle'],
    },
    {
      label: 'Tools & Environments',
      items: ['Git', 'GitHub', 'Linux', 'VS Code', 'MySQL Workbench'],
    },
  ],
};

export const projects = {
  id: 'projects',
  title: 'Projects',
  items: [
    {
      name: 'Campus Event Management System',
      role: 'Full Stack Developer',
      description:
        'A full-stack web application that allows students and teachers to create and manage events and register for activities.',
      impact:
        'Implemented event categorization and location-based filtering, which significantly improved event discovery for campus users.',
      challenges: [
        'Designed role-based authentication and authorization flow for students and teachers.',
        'Created performant query logic for category and location-based search.',
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'MySQL'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      name: 'Flutter eCommerce Application',
      role: 'Mobile App Developer',
      description:
        'A mobile shopping application with product browsing and user authentication features.',
      impact:
        'Built reusable UI components and integrated authentication flow to support fast iteration of core shopping screens.',
      challenges: [
        'Implemented robust authentication with Firebase and guarded routes.',
        'Structured app state and navigation for a smooth user checkout flow.',
      ],
      technologies: ['Flutter', 'Firebase Authentication'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      name: 'Custom Linux Shell',
      role: 'Systems Programming Developer',
      description:
        'A command-line shell implemented for an operating systems project, with support for basic commands and extensions such as job control and command aliases.',
      impact:
        'Improved understanding of process lifecycle, signal handling, and low-level system interactions through end-to-end shell development.',
      challenges: [
        'Added background process execution and job control handling.',
        'Built alias parsing and command execution pipeline from scratch.',
      ],
      technologies: ['C', 'C++', 'Linux system programming'],
      demoUrl: '#',
      repoUrl: '#',
    },
  ],
};

export const experience = {
  id: 'experience',
  title: 'Experience',
  items: [
    {
      role: 'Software Engineering Project Contributor',
      organization: 'Academic & Personal Projects',
      period: '2023 – Present',
      highlights: [
        'Delivered multiple full-stack and systems projects using React, Node.js, MySQL, and Linux tooling.',
        'Collaborated with peers on requirement analysis, implementation, and debugging.',
        'Practiced writing modular, maintainable code with Git-based workflows.',
      ],
    },
  ],
};

export const education = {
  id: 'education',
  title: 'Education',
  degree: 'Bachelor of Science in Computer Science and Engineering',
  institution: 'University of Chittagong',
  expectedGraduation: 'Expected Graduation: January 2027',
};

export const achievements = {
  id: 'achievements',
  title: 'Achievements & Certifications',
  items: [
    'Built and shipped multiple end-to-end academic software projects with modern web and mobile stacks.',
    'Consistently practicing data structures, algorithms, and problem solving.',
    'Actively exploring machine learning and computer vision through self-driven coursework and experimentation.',
  ],
};

export const links = {
  github: 'https://github.com/Sanzidislam',
  linkedin: 'https://www.linkedin.com/in/sanzid-islam-mahi/',
  email: 'sanzid.csecu@gmail.com',
  location: 'Chittagong, Bangladesh',
  availability: 'Open to internship opportunities',
};
