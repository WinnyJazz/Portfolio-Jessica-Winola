export default function Home() {
  return (
    <>
      <div className="bg-animation">
        <div className="glow-orb orb1"></div>
        <div className="glow-orb orb2"></div>
        <div className="glow-orb orb3"></div>
      </div>

      <nav>
        <div className="logo">Jessica's Portfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      <section className="profile-section" id="home">
        <div className="profile-container">
          <div className="profile-image">
            <div className="image-wrapper">
              <div className="glow-border"></div>
              <div className="profile-pic">
                <img
                  src="/jess.jpg"
                  alt="Jessica Winola"
                  className="profile-photo"
                />
              </div>
            </div>
          </div>

          <div className="profile-content">
            <h1>Hi, I'm Jessica Winola</h1>
            <div className="subtitle">Informatics Engineering Student</div>
            <p>
              Passionate developer crafting beautiful, functional, and intelligent web experiences.
              With a strong interest in UI/UX design and AI innovation, I strive to create solutions that 
              combine creativity with real-world impact.
            </p>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/jessica-winola-07073b356/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                in
              </a>

              <a
                href="https://github.com/WinnyJazz"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                💻
              </a>

              <a
                href="mailto:jessica.535240026@stu.untar.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                📧
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="skills-container">
          <h2 className="skills-title">My Skills</h2>
          <p className="skills-desc">
            These are some of the technologies and tools I’m passionate about mastering
            and using to build creative digital experiences.
          </p>

          <div className="skills-grid">
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">UI/UX Design</span>
            <span className="skill-tag">Python</span>
          </div>
        </div>
      </section>

      {/* === Projects Section (sudah dibenahi) === */}
      <section className="projects-section" id="projects">
        <div className="projects-container">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-desc">
            Here are some of my recent works that showcase my skills and creativity.
          </p>

          <div className="projects-grid">
            <div className="project-card">
              <img src="/project1.jpg" alt="TradisiHariIni" className="project-image" />
              <div className="project-info">
                <h3>TradisiHariIni Website</h3>
                <p>Website to explain and show Indonesian Cultures</p>
              </div>
            </div>

            <div className="project-card">
              <img src="/project2.jpg" alt="Poster" className="project-image" />
              <div className="project-info">
                <h3>Poster</h3>
                <p>A simple poster made by me</p>
              </div>
            </div>

            <div className="project-card">
              <img src="/project3.jpg" alt="Lintar" className="project-image" />
              <div className="project-info">
                <h3>Lintar's Update</h3>
                <p>Recreating Lintar webpage</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
