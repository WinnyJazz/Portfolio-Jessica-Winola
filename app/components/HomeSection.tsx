export default function HomeSection() {
  return (
    <section className="profile-section" id="home">
      <div className="profile-container">
        {/* Profile photo */}
        <div className="profile-image">
          <div className="image-wrapper">
            <div className="glow-border"></div>

            <div className="profile-pic">
              <img
                src="/jessy.jpg"
                alt="Jessica Winola"
                className="profile-photo"
              />
            </div>
          </div>
        </div>

        {/* Profile information */}
        <div className="profile-content">
          <h1>Hi, I&apos;m Jessica Winola</h1>

          <div className="subtitle">
            Informatics Engineering Student
          </div>

          <div className="home-desc">
            <p>
              I&apos;m Jessica Winola,an Informatics Engineering student at Tarumanagara University
               passionate about software development, full-stack web development, and data science. 
               I enjoy building web applications, exploring new technologies, and applying data-driven 
               approaches to real-world problems. With a growth-oriented mindset, I value continuous learning, 
               adaptability, and self-improvement.
            </p>
          </div>

          <a
            href="https://github.com/WinnyJazz"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-btn"
          >
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
}
