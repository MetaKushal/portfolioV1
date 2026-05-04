import React, { useState } from 'react';
import './index.css'; // Make sure to import the CSS file

// Main data for your portfolio - easy to update
const aboutText = `
  I'm a B.Tech Computer Engineering student with a strong interest in web development and a steady habit of practicing data structures & algorithms.
  I like building small, focused projects from scratch — usually with vanilla HTML, CSS and JavaScript — and I'm currently expanding into the MERN stack.
  My goal is to grow into a skilled computer engineer and contribute to impactful real-world solutions.
  I care about clean code, thoughtful UI, and shipping things that actually work end-to-end.
`;

const skills = {
  Languages: ['HTML', 'CSS', 'JavaScript', 'Python'],
  Frameworks: ['React', 'Node.js', 'Express', 'MERN (learning)'],
  Tools: ['Git', 'GitHub', 'VS Code', 'npm'],
  Concepts: ['DSA', 'Responsive Design', 'REST APIs', 'localStorage / SPA']
};

const projects = [
  {
    number: '01',
    title: 'TaskMate',
    problem: 'Most to-do apps feel bloated and lose your data on refresh.',
    solution: 'A clean, lightweight task manager with drag-and-drop reordering, inline editing, filters, dark mode and a frosted modern UI — all in vanilla JS, persisted via localStorage.',
    outcome: 'Smooth, framework-free productivity app with persistent tasks, themes and stats.',
    tech: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
    liveDemo: 'https://metakushal.github.io/taskMate/',
    github: 'https://github.com/MetaKushal/taskMate'
  },
  {
    number: '02',
    title: 'VanillaMart',
    problem: 'Quick-commerce apps like Blinkit/Zepto feel native — but rebuilding that experience usually pulls in heavy frameworks.',
    solution: 'A mobile-first q-commerce SPA built in pure HTML/CSS/JS: SPA-style view toggling, real-time search overlay, full cart engine with GST billing, and persistent state via localStorage.',
    outcome: 'App-like grocery experience with instant cart updates and zero dependencies.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SPA'],
    liveDemo: 'https://metakushal.github.io/VanillaMart/',
    github: 'https://github.com/MetaKushal/VanillaMart'
  },
  {
    number: '03',
    title: 'MetroSim',
    problem: 'Visualizing and understanding the complex operational schedules, passenger flows, and delays of a metropolitan subway system.', //[cite: 2]
    solution: 'Developed a simulation tool with an interactive UI to model train routes and allow users to dynamically adjust system parameters like train speed and timetables.', //[cite: 2]
    outcome: 'Produced a visual prototype that effectively demonstrates how frequency and parameter changes impact network crowding and efficiency.', //[cite: 2]
    tech: ['Python', 'JavaScript', 'Algorithms'], //[cite: 2]
    liveDemo: '#',
    github: 'https://github.com/SimplyKushal/MetroSim'
  },
  {
    number: '04',
    title: 'Intelligent Autocorrect System',
    problem: 'Desktop environments lack privacy-first, system-wide text correction tools that do not rely on cloud tracking.', //[cite: 1]
    solution: 'Built a 100% offline Windows desktop application that uses lightweight transformer models and multi-layered processing for real-time text correction across all applications.', //[cite: 1]
    outcome: 'Achieved seamless, non-intrusive text enhancement that adapts to user writing styles while maintaining complete data privacy.', //[cite: 1]
    tech: ['Python', 'Transformers', 'SQLite', 'pynput'], //[cite: 1]
    liveDemo: '#', // No live demo for desktop apps
    github: 'https://github.com/SimplyKushal/intelligent-autocorrect-system'
  },
  {
    number: '05',
    title: 'Readme File Generator',
    problem: 'Creating professional, well-formatted GitHub README files is tedious and time-consuming for developers.',
    solution: 'Created an interactive tool that generates formatted Markdown based on simple user form inputs.',
    outcome: 'Saves significant time for developers while ensuring standard, high-quality documentation across repositories.',
    tech: ['React', 'JavaScript', 'CSS'],
    liveDemo: '#',
    github: '#' 
  }
  // Add more projects here following the same structure
];

const achievements = [
  {
    title: "2nd Runner-Up - Parul AI/ML Hackathon",
    desc: "Secured 2nd runner-up prize and ₹10,000 for building an innovative solution under a strict deadline."
  },
  {
    title: "Competitor - Tech Ideathons",
    desc: "Active participant in the CVM Hackathon and IEEE Ideathon, focusing on collaborative problem solving."
  }
];

const leadership = [
  {
    role: "Coordinator",
    organization: "Voices & Verse Literature Club",
    desc: "Organized campus literary events, boosted student participation, and directed the club's visual identity by designing a professional vector logo and aesthetic promotional posters."
  }
];

const education = {
  degree: 'B.Tech, Computer Engineering',
  timeline: '2023 — Present',
  status: 'Undergraduate · in progress',
  description: 'Currently pursuing my B.Tech in Computer Engineering, focusing on web development, data structures & algorithms, and core CS fundamentals alongside hands-on project work.'
};

const contactInfo = {
  email: 'kushal0rangoonwala@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kushal-rangoonwala-a5295a325/',
  githubSimply: 'https://github.com/SimplyKushal',
  githubMeta: 'https://github.com/MetaKushal'
};

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maqvellj';

function Portfolio() {
  // --- NEW CODE: Form handling state (Must be inside the component!) ---
  // --- BULLETPROOF REACT FORM ---
  const [formStatus, setFormStatus] = useState("");
  
  // Track what the user types in real-time
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle typing
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Stop the browser completely
    setFormStatus("Sending...");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData) // Send the exact state data
      });

      if (response.ok) {
        setFormStatus("Success! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        setFormStatus("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      setFormStatus("Oops! There was a network error.");
    }
  };
  // --- END NEW CODE ---

  return (
    <div className="portfolio">
      {/* 01. Header - The top navigation bar */}
      <header className="header">
        <div className="container">
          <a href="#" className="logo">Kushal</a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#highlights">Highlights</a>
            <a href="#contact">Contact</a>
            <a href="/public/resume.pdf" className="btn btn-primary">Resume</a>
          </nav>
        </div>
      </header>

      <main className="main container">
        {/* 02. Hero Section - The big introduction */}
        <section className="hero">
          <span className="tag">COMPUTER ENGINEERING · B.TECH</span>
          <h1>Hi, I'm <span className="highlight">Kushal</span> <br /> I build clean, useful web things.</h1>
          <p>
            A Computer Engineering student exploring web development, the MERN stack, and data structures & algorithms — turning small ideas into polished, working products.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">See projects</a>
            <a href="#contact" className="btn btn-secondary">Get in touch</a>
          </div>
        </section>

        {/* 03. About Me Section - Learn more about you */}
        <section id="about" className="about section-spacing">
          <div className="section-header">
            <span className="section-number">01 — ABOUT</span>
            <h2>A short intro.</h2>
          </div>
          <div className="about-content">
            <div className="card about-card">
              <p>{aboutText}</p>
            </div>
            <div className="about-details">
              <div className="card detail-card">
                <span className="label">Currently</span>
                <h3>Learning MERN</h3>
              </div>
              <div className="card detail-card">
                <span className="label">Focus</span>
                <h3>Web dev + DSA</h3>
              </div>
              <div className="card detail-card">
                <span className="label">Based in</span>
                <h3>India <span className="flag">IN</span></h3>
              </div>
            </div>
          </div>
        </section>

        {/* 04. Skills Section - What you're good at */}
        <section id="skills" className="skills section-spacing">
          <div className="section-header">
            <span className="section-number">02 — SKILLS</span>
            <h2>Tools I work with.</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="card skill-card">
                <h3>{category}</h3>
                <div className="skill-tags">
                  {items.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 05. Projects Section - Showcase your work */}
        <section id="projects" className="projects section-spacing">
          <div className="section-header">
            <span className="section-number">03 — PROJECTS</span>
            <h2>Things I've built.</h2>
          </div>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.title} className="card project-card">
                <div className="project-header">
                  <span className="project-number">{project.number}.</span>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-details">
                  <p><strong>PROBLEM</strong><br />{project.problem}</p>
                  <p><strong>SOLUTION</strong><br />{project.solution}</p>
                  <p><strong>OUTCOME</strong><br />{project.outcome}</p>
                </div>
                <div className="project-tech">
                  {project.tech.map(t => <span key={t} className="skill-tag">{t}</span>)}
                </div>
                <div className="project-btns">
                  <a href={project.liveDemo} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Live demo ↗</a>
                  <a href={project.github} className="btn btn-secondary btn-sm" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04. Highlights Section - Hackathons & Leadership */}
        <section id="highlights" className="highlights section-spacing">
          <div className="section-header">
            <span className="section-number">04 — HIGHLIGHTS</span>
            <h2>Beyond the code.</h2>
          </div>
          
          <div className="highlights-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))', gap: '3rem' }}>
            
            {/* Achievements Column */}
            <div className="card highlights-card">
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🏆 Achievements
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {achievements.map((item, index) => (
                  <div key={index}>
                    <h4 style={{ color: 'var(--color-primary-dark)', fontSize: '1.125rem' }}>{item.title}</h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '0' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Column */}
            <div className="card highlights-card">
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                💡 Leadership
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {leadership.map((item, index) => (
                  <div key={index}>
                    <h4 style={{ color: 'var(--color-primary-dark)', fontSize: '1.125rem' }}>{item.role}</h4>
                    <span style={{ display: 'inline-block', backgroundColor: 'var(--color-tag-bg)', color: 'var(--color-primary)', padding: '0.2rem 0.8rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                      {item.organization}
                    </span>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '0' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>       

        {/* 06. Education Section - Where you're studying */}
        <section id="education" className="education section-spacing">
          <div className="section-header">
            <span className="section-number">04 — EDUCATION</span>
            <h2>Where I'm studying.</h2>
          </div>
          <div className="card education-card">
            <div className="edu-header">
              <h3>{education.degree}</h3>
              <span className="tag">{education.timeline}</span>
            </div>
            <p className="edu-status">{education.status}</p>
            <p className="edu-desc">{education.description}</p>
          </div>
        </section>

        {/* 07. Contact Section - Let's get in touch */}
        <section id="contact" className="contact section-spacing">
          <div className="section-header">
            <span className="section-number">05 — CONTACT</span>
            <h2>Let's talk.</h2>
          </div>
          <div className="contact-grid">
            <div className="card contact-info-card">
              <h3>Reach me directly</h3>
              <ul>
                <li><span className="icon">✉️</span> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
                <li><span className="icon">💼</span> <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><span className="icon">🐙</span> <a href={contactInfo.githubSimply} target="_blank" rel="noopener noreferrer">GitHub · @SimplyKushal</a></li>
                <li><span className="icon">🐙</span> <a href={contactInfo.githubMeta} target="_blank" rel="noopener noreferrer">GitHub · @MetaKushal</a></li>
              </ul>
              <a href="/public/resume.pdf" className="btn btn-primary">Download résumé (PDF)</a>
            </div>
            <div className="card contact-form-card">
              <h3>Send me a message</h3>
              
              {/* UPDATED FORM */}
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={formStatus === "Sending..."}>
                  {formStatus === "Sending..." ? "Sending..." : "Send message"}
                </button>
              </form>

              {/* SUCCESS/ERROR MESSAGE DISPLAY */}
              {formStatus && (
                <p style={{ 
                  marginTop: "1rem", 
                  fontWeight: "500", 
                  color: formStatus.includes("Success") ? "#2e7d32" : "#d32f2f" 
                }}>
                  {formStatus}
                </p>
              )}

              <p className="form-note"></p>
            </div>
          </div>
        </section>
      </main>

      {/* 08. Footer - Copyright and credits */}
      <footer className="footer">
        <div className="container footer-content">
          <p>© 2026 Kushal Rangoonwala. Built with React.</p>
          <p>Designed & coded with <span className="icon">🍵</span> + lots of refresh-clicks.</p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;