
export default function HomeSection() {
  return (
    <section className="profile-section" id="home">
      <div className="profile-container">
        {/* Decorative image on the left */}
        <div className="home-side-image">
          <img
            src="/home.png"
            alt=""
            aria-hidden="true"
            className="home-element"
          />
        </div>

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

          <p>
            I&apos;m Jessica Winola, an Informatics Engineering student
            at Tarumanagara University, passionate about creating
            meaningful digital experiences. I enjoy bringing ideas to
            life through interactive web applications, exploring new
            technologies, and blending creativity with technology.
          </p>

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
