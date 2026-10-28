
import { ExternalLink, GraduationCap } from "lucide-react";

const education = [
  {
    level: "Senior High School",
    period: "2021 – 2024",
    name: "Mutiara Bangsa 2 School",
    major: "Science Major",
    description:
      "Completed senior high school education while building foundational knowledge, analytical thinking, and problem-solving skills.",
    logo: "/MB2.jpe",
    website: "https://mutiarabangsa.sch.id/mutiarabangsa2/",
  },
  {
    level: "Higher Education",
    period: "2024 – Present",
    name: "Universitas Tarumanagara",
    major: "Informatics Engineering",
    description:
      "Pursuing Informatics Engineering with an interest in full-stack development, software engineering, and data-driven applications.",
    logo: "/untar.png",
    website: "https://www.untar.ac.id/",
  },
];

export default function EducationSection() {
  return (
    <section className="education-section">
      <div className="education-container" id="education">
        <div className="education-heading">
          <span className="education-eyebrow">MY ACADEMIC JOURNEY</span>
          <h2 className="education-title">Education</h2>
          <p className="education-description">
            My educational journey and the experiences that have shaped
            my knowledge, skills, and personal growth.
          </p>
        </div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <article className="education-card" key={item.level}>
              <div className="education-timeline-marker">
              </div>

              <div className="education-card-content">
                <div className="education-card-top">
                  <span className="education-period">{item.period}</span>

                  
                </div>

                <div className="education-school">
                  <a
                    className="education-logo-link"
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${item.name} website`}
                  >
                    <img
                      className="education-logo"
                      src={item.logo}
                      alt={`${item.name} logo`}
                    />
                  </a>

                  <div className="education-school-info">
                    <span className="education-level">{item.level}</span>
                    <h3>{item.name}</h3>
                    <p className="education-major">{item.major}</p>
                  </div>
                </div>

                <p className="education-card-description">
                  {item.description}
                </p>

                <a
                  className="education-visit-link"
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit institution website
                  <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
